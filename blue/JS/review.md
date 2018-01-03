## JS Review

So coming off the long weekend, I think we could all use a refresher on some of the stuff we've covered during the past couple of weeks.  Putting everything into one document seems like the logical way to go.  

### Do Now 

In the class github site, click on "Resources".  Inside this folder, you'll see a file called "html_css_js_steps.docx".  Click it, then click "View Raw".  Save this file onto your desktop - this has all the steps to creating files in Sublime.  I want you to follow the steps and create an index.html, styles.css, and scripts.js.   

### Javascript itself

- Runs the interweb
- Used in a myriad of web applications, web sites, addons/plugins, games
- Libraries add to the 'wow-factor'.  Remember all that 3D animation.

### console.log

```js
console.log("Hello");
```

This `console.log()` prints out a message, "Hello", onto the console.

### Variables

`const` vs `let`

#### `const`

We use `const` for variables whose values should NOT be changing within the program.

```js
const name = "Andrew"; // string
const age = 27; // number
const likeDogs = true; // boolean
```

*Note: remember what STRINGS, NUMBERS, AND BOOLEANS are!*

Doing something like below will not work.

```js
const name = "Andrew";
name = "David";
console.log(name);
```

The re-declaration of a `const` will result in a syntax error.

#### `let`

If the variable's value WILL be changed later on, we'd want to use `let`.  While theoretically we could use `let` for all variables, doing so would create confusion.  There are some variables that we definitely don't want to change, and we want JS to give us a failsafe if we try to.

Thus, for `let`...

```js
let name = "Andrew";
console.log(name);
name = "David";
console.log(name);
```

### Expressions

JS allows us to turn variables into expressions.

```js
const num1 = 10;
const num2 = 25;
const sum = num1 + num2;
```

Your turn!  Open repl and make an expression so this will happen:

`(x*(y+z))/a`

You'll have to declare what `x`,`y`,`z`, and `a` are.

<hr>

You can also chain strings together!

```js
const name = "Andrew";
const greeting = "Hi, " + name;
console.log(greeting);
```

Notice how the string `"Hi, "` and the variable `name` are separated by a `+`.  

### Functions

A function is a reusable collection of statements.

```js
const sayMyName = function(){
	console.log("Jim Bob Cooter");
}
```

I can launch this function by writing `sayMyName()` anywhere in the program.  

#### Circular Dependencies

Remember, this is bad!

```js
const chicken = function() {
	egg();
}

const egg = function() {
	chicken();
}

egg();
```

You don't want to go through an infinite loop, unless you're trying to troll someone.  Just kidding.

#### Arguments

A function can accept any number of named "arguments", or "parameters".  

```js
function sayMyName(name) {
    console.log('Hi, ' + name);
}

sayMyName('Gabrielle');
sayMyName("YankeesStink212");
```

This works with numerical expressions as well.

```js
const addNum = function(a,b){
	const sum = a+b;
	console.log(sum);
}

addNum(3,4);
addNum(12,13);
```

This can get complicated as well, so naming your argument relevant things is probably important.

```js
function tellFortune(jobTitle, geoLocation, partner, numKids) {
    const future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Gabby P', 3000);
tellFortune('Elvis Impersonator', 'Russia', 'Bron Bron', 0);
```

There are also prebuilt JS 'functions'.  Notice `Math.PI` below.  

```js
function calcGeometry(radius) {
  const circumference = Math.PI * 2*radius;
  console.log('The circumference is ' + circumference);
  const area = Math.PI * radius * radius;
  console.log('The area is ' + area);
}
calcGeometry(20);
```

### Conditional Statements

<h2><a href="https://github.com/gen-code/visions/blob/master/w10d1/intro_conditionals.md">Lesson on Conditionals!</a>

