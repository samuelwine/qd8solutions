---
templateKey: blog-post
title: Viewing event listeners
date: 2020-12-03T17:53:10.000Z
featuredpost: true
featuredimage: 
description: 
tags:
  - event listener
  - dev tools
---
<div className="blog-image">
<img src="/img/event-listeners.png">
</div>

## Have you ever spent hours trying to work out why your web application is doing the strangest things?

I did today. And a good part of yesterday. #:frowning:

Clicking the **submit** button was supposed to do 'x', but it did 'y'.

I tried everything (that I could think of). Event.StopPropagation, Event.PreventDefault and I probably tried some other methods that don't even exist. I set breakpoints on almost every line of code in the Chrome debugger.

To no avail. It totally ignored all my valiant efforts and continued doing what it knew best. And I was truly stumped.

It was obvious by now that there was another event listener being called, but try as I might I couldn't find it anywhere....

Until I found this:

<img src="/img/chrome-event-listeners.png">

Chrome (and possibly other browsers as well) will kindly list out all the event listeners to a specific event on a specific element.

Best of all, its really easy to get to! #:smile:

Go to the **elements** tab in Chrome devtools, select the element you want to find the listeners for, and then just head over to the right hand side - where you normally see all the CSS styles. The CSS styles are under the **Styles** tab, all you need to do is click on the **Event Listeners** tab, select the event you are interested in, and then inspect the listeners, or you can even remove them one at a time and pinpoint the one that's causing you grief!

Time to take a #:coffee:!

Thanks for reading!
