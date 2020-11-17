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


##What is this odd code all about?

```csharp
SomeType someObject = new SomeType();
string myXmlString = XMLHelper.Serialize(someObject);
SomeType newObject = XMLHelper.Deserialize<SomeType>(myXmlString);
```
So, for starters, what's happening here?

Very simple - on line 1 we create an instance of SomeType and call it **someObject**.
Then on line 2 we change ('serialize' in fancy terminology) **someObject** into an xml string and save it in **myXmlString**.
And finally on line 3, we 'deserialise' (change the other way) **myXmlString** into **newObject** which is also of type SomeType.

The question is glaring, just copy **someObject** into **newObject** and you're done - as so
```csharp
SomeType newObject = someObject;
```
What's the benefit of serializing and then deserializing?

Answer is - **reference types are not easy to copy.**

What does that mean? and what is a reference type?

There are two types of variables in C# - reference types and value types - and the difference is whether the variable name is used by the compiler as a reference to the actual saved value, or just as a reference to the address where the actual value is stored.

That was quite a mouthful - lets give a simpler example.










I didn't know the answer, but one of the senior developers did.
I should have known better. I should have realised the answer myself. I've read up so much about reference types vs value types, I've answered interview questions on it, but somehow when it actually came to a practical use-case, none of that helped me. Tutorials etc only get you so far, its when you come up against these things in real examples that they start to sink in.

Thanks for reading!
