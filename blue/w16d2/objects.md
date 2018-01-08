# Objects

### Learning Objectives

- Compare JS objects vs arrays
- Explain the difference between object properties and methods
- Add and retrieve object properties using dot and bracket notations

### Why This Is Important

- Understanding objects in JavaScript is a huge fundamental building block writing organized, powerful, and clean code.
- Objects allow us to deal with complexity in programs
- Objects allow us to be DRYer 
	- Reminder: DRY = Don't Repeat Yourself!  

## Objects... objectively

Think about an Object like you would a person.  

<h2>Andrew</h2>

Andrew is a person.  This person has unique properties.

Andrew...
- is 27 years old
- from New Jersey
- enjoys coffee on the reg
- likes sports

These properties *ONLY* belong to Andrew.

<h2>Gabby</h2>

Gabby is also a person.  This person has unique properties.

Gabby...
- is 22 years old
- is from Long Island
- can't drink coffee
- only likes soccer

Therefore, while these two "things" are under the same category "people", each of them possesses their own unique properties.  These "things" that we're referring to are perfect analogies for JavaScript Objects.

## JavaScript Objects

Objects are a type of data structure that is nearly universal across programming languages, although they may have different names in different languages...

- JS: Objects
- Ruby: Hashes
- Python: Dictionaries

In essence, what we're talking about are key/value pairs.

- Objects are a type of key-value store, or a way to group many pairs of keys and values together.
- Like arrays, objects can hold multiple pieces of data of varying types; but unlike arrays, objects use named keys rather than indices to order and access those pieces of data.

Just to rehash...

```js
const arr = ["Andrew","Gabby","Brian","Sarah","Kyra","Fatou"];

console.log(arr[0]); // "Andrew"
console.log(arr[1]); // "Gabby"
console.log(arr[2]); // "Brian"
console.log(arr[3]); // "Sarah"
console.log(arr[4]); // "Kyra"
console.log(arr[5]); // "Fatou"
```

Objects consist of keys and values
- Keys are unique
- Values can be common

```js
const obj = {
	key1: "bla",
	key2: "bla2",
	key3: "bla3"
}
```

Objects are defined using variables.  The key/value pairs in each object are separated by commas.  We do not use a comma after the last k/v pair is defined.

```js
const me = {
	name: "Andrew",
	age: 27,
	cool: true
};
console.log(me);
```

#### Objects vs Arrays

Objects store data in key/value pairs and can hold multiple k/v pairs. Arrays contain a list of objects in consecutive order.

```js
// object 1
const andrew = { 		
	name: "Andrew",
	age: 27,
	faveFood: "Wings",
	favePlace: "Las Vegas"
} 

// object 2
const gabby = {
	name: "Gabrielle",
	age: 22,
	faveFood: "Wings",
	favePlace: "Sephora"
}

// object 3
const stefan = {
	name: "Stefan",
	age: 27,
	faveFood: "Everything",
	favePlace: "Saigon"
}


const people = [andrew,gabby,stefan]; // Array of Objects

console.log(people);
```


### Accessing Object Properties

Objects in JS always have properties associated with them.

You can think of a property on a JS object as a type of variable that contains a value. The properties of an onkect can be accessed using "dot notation".

##### Dot Notation

```javascript
const theCoolestInstructor = {
	name: "Andrew Lee"
}
console.log(theCoolestInstructor.name);
```


You can also re-assign or define a property be assigning a value using `=` as you would a normal variable.

```javascript
theCoolestInstructor.age = 27;
console.log(theCoolestInstructor.age);
```

```javascript
theCoolestInstructor.name = "Andrew McAndrewFace";
console.log(theCoolestInstructor.name);
```


##### Bracket Notation
You can accomplish the same by using bracket notation...

```javascript
console.log(theCoolestInstructor["name"]);
```

*Note: First, dot notation seems a bit more common in my experience in JS. But remember, convention. If you're team uses one style, follow it.*

*Note 2: Notice that we are accessing bracket notation properties as "strings"*

```js
const me = {
	name: "Andrew",
	name: "McAndrewFace",
	age: 27,
	cool: true
};
console.log(me.name);
console.log(me.cool);
```

Note how `me.name` is no longer `"Andrew"`, it's `"McAndrewFace"`. Object keys must be unique! The first line to set `name: "Andrew"` and then we're mutating that value (updating the existing variable, not creating a new one), to `name: "McAndrewFace"`.

##### DELETE
This won't be used as often in our class but you can absolutely `delete` an attribute from a JS object.

```js
delete me.name;
console.log(me);
```

### Exercise
- Create a variable `myInfo` and set it equal to an object with the following...
- `firstName`: Your first name.
- `lastName`: Your last name.
- `age`: Your age.
- `faveClass`: Your favorite class in school.
- `console.log()` the entire `myInfo` object.
- `console.log()` just your `age`.
- Add another attribute...
	- `favoriteFood`: Your favorite food.

Notice you can add more and more attributes to an object.
