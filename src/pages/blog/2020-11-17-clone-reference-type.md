---
templateKey: blog-post
title: Cloning reference types
date: 2020-11-17T17:53:10.000Z
featuredpost: true
featuredimage: 
description: 
tags:
  - clone
  - reference type
---
<div className="blog-image">
<img src="/img/clone.png">
</div>

## What is this odd code all about? :confused:

```csharp {.line-numbers}
MyType firstObject = new MyType();
string myXmlString = XMLHelper.Serialize(firstObject);
MyType secondObject = XMLHelper.Deserialize<MyType>(myXmlString);
```

So, for starters, what's happening here?

Very simple 
- on line 1 we create an instance of MyType and call it **firstObject**.
- on line 2 we change ('serialize' in fancy terminology) **firstObject** into an xml string and store it in **myXmlString**.
- on line 3, we 'deserialise' (change the other way) **myXmlString** into **secondObject** which is also of type MyType.

The question is obvious, why don't we just copy **firstObject** into **secondObject** and you're done - as so

```csharp 
MyType secondObject = firstObject;
```

 **Q**. What's the benefit of converting firstObject into xml and then converting it back into secondObject?

 **A**. **Reference types are not easy to copy.**

What does that mean? and what is a reference type? :pensive:

There are two types of variables in C# - reference types and value types - and the difference is whether the variable stores **the actual value**, or the variable stores **a reference** to the value.

That was quite a mouthful - let's explain that a little better.

Supposing we declare a variable and assign it a value - like this:

```csharp
var myVariable = 45;
```
If myVariable is a **value type**, then myVariable stores 45.
That's why it's called a value type - because it stores a value. Quite simple

However if myVariable is a **reference type**, then myVariable stores a reference to the value. A reference means - something that tells you where you can get the value from, so it **refers** to the value.
That's why it's called a reference type - becuase it stores a reference to the value. Also simple.

(As an aside, if you google around about value types and reference types, you'll find a lot written about the stack and the heap. It turns out though that all of that is mostly irrelevant to developers - see [this great writeup](https://docs.microsoft.com/en-us/archive/blogs/ericlippert/the-stack-is-an-implementation-detail-part-one) from Eric Lippert).

##### What difference does it make to a developer if a variable is a reference type or a value type? 
##### As long as I can get the value, why should I care if the variable name stores the actual value or a reference to it?

Truthful answer is that when you are retreiving the value, it makes very little difference. Where it does make a big difference though, is where you want to make **a copy of your variable** - like so:

```csharp
var secondVariable = firstVariable;
```

Copying a variable copies whatever is stored in the first variable to the second variable. **Take that in a minute**.

- so if firstVariable is a value type (it stores the actual value), then secondVariable gets a copy of the value. So obviously if I now change firstVariable to store a different value, that has no effect on secondVariable. 
- but if secondVariable is a reference type (it stores a reference to the value), then secondVariable gets a copy of the reference, but both reference refer to the same value - so if the value changes, both references will retrieve the new value.

Now we get to the problem - if we have a reference type variable, and we need to copy the **value** (not just the reference) because we don't want the copy to be affected by changes to the original - (this is called a  **deep-copy**) - how can we do this?  

ANSWER (or to be more precise, one of the anwers) - this odd code from above:

```csharp {.line-numbers}
MyType firstObject = new MyType();
string myXmlString = XMLHelper.Serialize(firstObject);
MyType secondObject = XMLHelper.Deserialize<MyType>(myXmlString);
```

We break the link between firstObject and secondObject by serializing firstObject into a different format (xml) and then deserializing it back into secondObject.

Now secondObject is a deep-copy of firstObject.

The values might be identical, but they are totally unconnected and each variable contains a different reference - each to their own value.

That makes sense now. :smile:

Thanks for reading!
