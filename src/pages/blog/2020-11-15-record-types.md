---
templateKey: blog-post
title: C# 9.0 Record Types
date: 2020-11-15T17:53:10.000Z
featuredpost: true
featuredimage: 
description: 
tags:
  - C# 9.0
  - record
---
<div className="blog-image">
<img src="/img/record.png">
</div>


##So what are C# 9.0 Record Types and are they really immutable objects?

First things first - **record** is a new keyword introduced in C# 9.0 that is used in place of the **class** or **struct** keyword. For example, instead of writing
```cs
public class Person
{
  public string Name { get; set; }
}
```
to create a record you would write
```cs
public record Person
{
  public string Name { get; set; }
}
```
So what's the difference then? Nothing really, if you write records like the above example.  

This is the important bit - the record keyword does not **create immutability**, rather it **provides helpful functionality** for objects that are already immutable.

If you're not sure if you quite got that, take a stop and read that line again. There's no rush.

Ok, so lets first create an immutable object, and then we'll see what records help us with.
The easiest way to create an immutable object is with another new C# 9.0 feature - **init** properties, which allows the value of the property to be set only once, and never again (if you haven't come across this yet, have a look [here](https://www.thomasclaudiushuber.com/2020/08/25/c-9-0-init-only-properties/) for an excellent explanation).
```cs
public class Person
{
  public string Name { get; init;}
}
```

Now lets create an instance of Person
```cs
Person personOne = new Person();
 person.Name = "Dave";
```

This is an immutable object, and its just a regular class. No mention of records yet. 
There is no way we could ever change the Name of personOne, and if we wanted to, we would have to create a new Person object with a different Name.

So now lets look at one difficulty we might have if we just left this immutable object as a class. 

 **Creating a copy of a more complex object**

Supposing we had an immutable object like this
```cs
public class Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public string Title { get; init; }
    public int Age { get; init; }
}
```
and here is an instance of Person
```cs
Person personOne = new Person();
personOne.FirstName = "Dave";
personOne.LastName = "White";
personOne.Title = "Mr";
personOne.Age = 40;
```
Now we need to change personOne's Title to Sir because he has been knighted by Her Majesty the Queen.

So we will need to create a new Person object, and copy all of the fields manually from the personOne object to the personTwo object - like this
```cs
Person personTwo = new Person();
personTwo.FirstName = personOne.FirstName;
personTwo.LastName = personOne.LastName;
personTwo.Title = "Sir";
personTwo.Age = personOne.Age;
```
That's pretty tedious, and it can get worse if there are more properties.....

Record types come to the rescue - by **providing useful functionality** for immutable objects (as we pointed out earlier).

The **WITH** keyword - a gift from Record types. Watch this:

Declare your Person as a record instead of a class
```cs
public record Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public string Title { get; init; }
    public int Age { get; init; }
}
```
create the personOne object as before, just now its a record instead of a class
```csharp
Person personOne = new Person();
personOne.FirstName = "Dave";
personOne.LastName = "White";
personOne.Title = "Mr";
personOne.Age = 40;
```
AND NOW
```cs
Person personTwo = personOne with {Title = "Sir"};
```
Wouldn't you agree that that's useful functionality?

There's more though to record types that just this - have a look at a really comprehensive and well written article [here](https://www.thomasclaudiushuber.com/2020/09/01/c-9-0-records-work-with-immutable-data-classes/) which will tell you everything there is to know about C# Record Types.

Thanks for reading!
