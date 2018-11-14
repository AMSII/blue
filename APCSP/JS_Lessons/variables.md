# Variables

## Objectives:
- Take a step back from "code.org", and relearn variables, functions, and data types.

## Do Now:
- Go to this website: "http://www.repl.it/languages/javascript"

### Variables

Today, we are going to learn about variables. A variable is a line of code that stores some information for us. For example, if we want chocolate ice cream, then we look for the container labeled chocolate. The label tells us what is inside. Variables make coding easier because instead of remembering a bunch of numbers, we can remember names. There are three parts to every variable: a type, name, and value.

For example:

```js
var chocolate = "chocolate ice cream";
```

type: var
name: chocolate
value: "chocolate ice cream"

#### Examples

In repl, add three variables.

```js
var num = 5;
var name = "Katherine";
var catsAreCool = true;
```

I want you to console log these variables.  What do you see?

```js
console.log(num);
```

Note: do not use quotes when `console.log`-ing variables. 

### Data Types: 

#### Strings

A string is a series of characters like "John Doe".  Strings are written using quotations. You can use single or double quotes.

```js
var greeting = "Hello, chaps";
var name = "Joan of Arc";
var restaurant = 'Sushi Nakazawa';
```

Note: if you need to use contractions in your string, use double quotes.

```js
var response = "You're doing alright, 'cool kid'";
var answer = "Everything's going to be okay, ol' chap";
```

#### Numbers

Numbers are... numbers.  Can be with or without decimals, positive or negative.

```js
var num1 = 40;
var num2 = 40.00;
```

#### Booleans

Booleans are used to determine true or false.  Think about conditional statements.

```js
var catsAreNice = false;
var dogsAreBetter = true;
var yankeesStink = true;
```

#### Undefined

A variable without a value is undefined.

```js
var yankees
```

I can also set a variable to equal undefined.

```js
var yankees;
yankees = undefined;
```