## Expressions

<h1><a href="http://bit.ly/2lV5L6t">http://bit.ly/2lV5L6t</a></h1>

### Lesson Objectives
- Write JS 'expressions'

### Do Now

<h1><a href="https://repl.it/languages/javascript" target="_blank">repl.it</a></h1>

In repl, write three different variable that represents...

- your name
- your age
- do you like dogs?  true/false


ex.
```js
const name = "Andrew";
const age = 27;
const likeDogs = true;
```

`console.log()` these variables so their values show up on the console.

<hr>

### Expressions

Variables can store the result of any expression.

```js
const add = 1+1;
const divide = 1/1;
```

Write four different variables.  Each variable should have an expression indicating addition, subtraction, multiplication, and division.  `console.log()` the results to the console.  Remember - PEMDAS rules are in effect.

ex. 

```js
console.log(add);
```


<hr>

We can also write expressions using strings.

```js
const name = "Jim Bob";
const greeting = "Hello, " + name;
console.log(greeting);
```

I can start chaining these expressions as well.

```js
const name = "Jim Bob Cooter";
const greeting = "Hello, " + name;
const title = "Coach";
const formalGreeting = title + " " + name;
console.log(formalGreeting);
```

Note: Why do you think I included a " " within formalGreeting?

### Exercises:

#### The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.

Output your fortune to the screen like so: 

"You will be a X in Y, and married to Z with N kids."

#### The Age Calculator

Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1990, then in 2026 you'll be either 35 or 36, depending on what month it is in 2026.

Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.