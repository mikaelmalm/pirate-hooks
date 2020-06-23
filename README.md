# Hooked on Hooks

## 01 - Presentation

So what are todays subject you might ask?
Today we are going to talk about hooks! And not just any dusty old hooks that might have been collected during the all the years on sea.

No today we are talking about hooks in React, what they are and some examples on how to use them.

## 02 - Disclamer

This talk is set to be covering the basics of hooks, so I won't go into any advanced patterns or hooks, and some people working daily with React might find it a little to basic for their taste.

All right, lets move on because this cruice waits for no one!

## 03 - What are hooks?

Hooks are a type of tool in React that gives the developer a more direct API to work with fundemental React concepts, such as props, state, lifecycles and so on.

**Why hooks though? Why not classes?** <br>
Before hooks, there was a couple of problems that was common when working in React, and hooks helps us solve some of them.

1. Reuse stateful logic was hard

   - Hooks allows developers to extract stateful logic from components, such as fetching data from APIs, checking if an user is signed in or not, or keep track of translations.

   All this, without having to modify the hierarchy of the application. Removing the need to use technuiqes such as Higher order components to achive the same results.

2. Components often grew complex

   - As per usual when developing, one small component could quickly grow into a mess of spaghetti-code, were logic not really related to the component was tangled up in eachother. And with the increasing complexity of components, testing and maintaining them became harder and harder

3. Classes in Javascript are confusing

   - In the words of the react-team themself, classes was a rather big barrier to learning React.
     You had to have a really good knowledge of Javascript, understanding how the `this`-keyword works and classes had, and still has to my knowledge, no stable syntax proposals.

   And with addition to that, classes don't play well with most tools we use today, where hot-reload and minification was two areas where performance could be described as questionable at best.

In short, Hooks allows developers use alot of the features in React, without having to write classes. Making the code we write better performant, easier to read, and best of all, more reusable.

That beeing said, The React team have no plans to get rid of classes, and some methods are not covered by hooks at the moment. So hooks does not 'kill' classes, it is just another way of working in React.

## 04 - State management in React

Lets start our voyage by navigating straight to one of the fundemental-aspects of almost every React-application out there, state management.

There is two builtin hooks in React to handle state in the application. useState and useReducer. They are actually both built on the same code inside of React, and they work very similar.

Note:
I will use the word "update" when talking about changing the state, but that word is not quite true. React does not update the value of a state, but it replaces the old state with the new.

**useState** has a simpler API thats returns an array containing two items. First item is the value of the state, and the second item is a function used to update the value.

useState is great for storing single or simple values, without having to write alot of extra code just to get it to work.

**useReducer** also returns an array with two items, first one beeing the value, and the second item being an function, just as useState. The useReducer require us to provide the update-function at initialization. This opens up more possibilitys on managing advanced states, but it requires some more code to get it to work.

Most of the time, useState will be more than enough, so that is the one we will be focusing on today.

But who likes therory right? Let us start of with some examples.

[Use state examples](https://codesandbox.io/s/hooks-examples-6s661)

### Example notes

First of, we are initializing the state with the number 0, and then we are using array deconstructuring to get the value and the function updating the value from the useState hook.

We can click the button, and it increases the counter as expected. One thing we can note here is how we in the setCount are using an function to set the value.

So, Setting the state in react is working async, so if we want to use the previous value in order to set the new value, we can use a function like this.

**Slow counter**
Here we can see what happens if we are setting the count without the function inside to use the old value.

And if I change it, you can see that it works as expected.

**Values**
useState can handle all sorts of types, so we are not limeted to working with only numbers or strings. Here we can see how I switch between data-types.

**Form**
Here is an example on how I would use useState in a real-world application (that's not about handling counters)

## 05 - Be effective with useEffect

On to the next hook! useEffect, So what is the deal with this hook?

useEffect allows us to perform side-effects in functional components.

A side effect could be explained like anything that effects our code after the initial function has been executed.
For example, if we fetch data from an API, or query-parameters from the url, and updating the data after we get it, that is an side effect.

Lets look at an example!

[Pirate page](https://pirate.mikaelmalm.com)

### Notes about example

Here we got a webpage that I had my best developer build for me. It's robust, beautiful, and I am sure that this could not contain any bugs what so ever!

I can navigate through my maps, go back to land and go in to another map. I can even navigate directly between my maps down here... What in the flying dutchman is this.. There is a bug on my webpage? Well some idiot developer is walking the plank tonight!!

Well lets calm down a second, maybe we can solve this. I know that this logic is contained inside the `MapView`. So lets see. Ah I see the problem. The useEffect we are having here is not updating when the URL is updating. I can see that the dependency-array at the end is missing the id, so just lets put it in there.

And it works. Ok ok, I maybe overreacted earlier, no one needs to walk the plank, all is good.

The dependency array is like its name implies an collection of dependencys, and whenever one of this dependencys changes value, the useEffect is excecuted. If the array is empty, the useEffect will only run on inital render.

**Captains log**
So let me show you another cool feature implemented in the website, its hidden, and contains some secrets hidden from the crew.

Look at this beauty, all my secrets, safe from the world. And the best thing is, that if the page is scrolling, I get a warning in the console that someone is trying to read my secrets! Cool huh?

As a self-proclaimed master of hooks, I know though that this will cause a bug.

**Go back to a red sea, scroll, still see warnings in console.**

Lets see here, this should be the LogView. Aha, we have forgotten to remove the eventlistener when the component unmounts.
To do this with useEffect is really simple, all we have to do is to return a cleanup function, and we should be set.

Thats it for me. Questions?

### Tips

1. Use multiple useEffects to separate concerns
   We can use multiple useEffects to keep our logic contained where it makes sense.

2. The second depencency array is optinal!
   If you don't want the effect to run on every render, we can pass arguments to an array as an second parameter that tells the useEffect when to run

### Code help ;)

```js
return () => {
  document.removeEventListener("scroll", scrollWarning);
};
```

## 06 - (Bonus) Eslint and the rules of hooks

### Rules of hooks

Hooks have some rules we _need_ to follow.
The most important one is that hooks must come in the same order everytime an component render.
This is because the way React keep track of the hooks and their value, is by the ordered they are rendered. So if your 'treassures' state is rendered on place 4, that is the pointer React will use to remember the value.

So no conditionally rendering of hooks! If you feel the need to conditionally render a hook, you should probably rethink the flow in your app, or place that hook in its own component, and conditionally render that.

### Eslint

Eslint is a great tool, and I recomend using it when working with react hooks. They have a plugin that commes with default if you are creating your project with create-react-app.

This gives us an guiding hand on how we write our code.

https://reactjs.org/docs/hooks-rules.html
