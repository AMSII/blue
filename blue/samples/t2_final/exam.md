# T2 Final

## Part 1: Multiple Choice.

1) What is the HTML shortcut we type into Sublime before pressing `tab`?

a) `htm` <br>
b) `<htm` <br>
c) `<html>` <br>
d) `html` <br>

2) What is not a valid 'color' format in CSS?

a) hex wheel <br>
b) color name <br>
c) palette number <br>
d) rgb <br>

3) Based on this code sample...

```html
<h1>Hello, chap</h1.><p>I think bananas are great</p>
```

Why won't this code run?

a) The `<p>` needs to be capitalized <br>
b) The `<h1>` and `<p>` are on the same line <br>
c) There is a `.` within the closing `<h1>` tag 

4) What is the proper way of writing a console log in JS?

a) `consolelog(hello)` <br>
b) `console.log(hello)` <br>
c) `console.log("hello");` <br>
d) `console.log("hello")` <br>

5) Which of the following tag is used to mark a beginning of paragraph ?

a) `<td>` <br>
b) `<br>` <br>
c) `<p>` <br>
d) `<tr>` <br>
<br>

6) The tag to create a numbered list is...

a) `<li>` <br>
b) `<ol>` <br>
c) `<ul>` <br>
d) none of the above <br>

### This function below is for Questions 7-9

```js
function nameCreator(name){
	console.log(name + "is cool");
}
```

7) In the above function, what is `name`?

a) an argument <br>
b) literally a `name` <br>
c) a pass <br>

8) How would I execute this function?

a) `namecreator(name)` <br>
b) `nameCreator(Mr. DeBottis);` <br>
c) `nameCreator("Mr. DeBottis");` <br>

9) If I executed this function correctly, what would it print in the console?

a) `syntax error: undefined` <br>
b) `"Mr. DeBottis is cool";` <br>
c) `"Mr. DeBottisis cool"` <br>
d) `"Mr. DeBottisis cool";` <br>
e) `Mr. DeBottisis cool` <br>

10) In Bootstrap's grid system, how many units wide is each container?

a) 8 <br>
b) 10 <br>
c) 12 <br>
d) 14 <br>

11) An array is housed within...

a) {} <br>
b) () <br>
c) [] <br>
d) <> <br>

12) Which one of these styles would be the best way to center the text on the webpage?

a) `align-text: center` <br>
b) `align-text: center;` <br>
c) `align: center` <br>
d) `text-align: center;` <br>

```

```

13) Which one is NOT a valid statement?

a) 12 == 12 <br>
b) 13 != 12 <br>
c) 13 && 13 != 14 <br>
d) 12 % 12 = 12 <br>

### This function below is for Questions 14-16

```js
function compareNum(num1,num2){
	if(num1 < num2){
		alert(num1 + " is less than " + num2);
	} else if(num1 > num2){
		alert(num1 + " is greater than " + num2);
	}
}
```

14) Which is the correct way to execute this function?

a) `comparNum(num1,num2)` <br>
b) `compareNum("3","4")` <br>
c) `compareNum(3,"4")` <br>
d) `compareNum(3,4);` <br>

15) Using your response from Q. 14, what would be the output from this function?

a) `num1 is less than num2` <br>
b) `3 is less than 4` <br>
c) `3 is greater than 4` <br>
d) `syntax error: undefined` <br>

16) Is there anything potentially missing from this function?

a) You could use an `else` statement in case `num1 = num2` <br>
b) You need another `else if` statement in case `num1 = num2` <br>
c) Nope <br>

17) Writing a console log is the same as writing this kind of JS statement

a) `print` <br>
b) `alert` <br>
c) `prompt` <br>

18) Writing this type of style would allow our element to animate over X seconds?

a) `translate-duration: 5s;` <br>
b) `transition: duration: 5s;` <br>
c) `translation-duration: 5s;` <br>
d) `animate: 3s;` <br>

19) Which of the following is not a valid data type?

a) Number <br>
b) String <br>
c) Object <br>
d) Class <br>

20) If we wanted to add a string `Bugs Bunny` to the end of an array `arr`, we would...

a) `arr.add(Bugs Bunny);` <br>
b) `arr.pop('Bugs Bunny');` <br>
c) `arr.push('Bugs Bunny');` <br>
d) This is not a possible task <br>
<br>
21) How many default sized headers do we have (e.g. `<h1>`)?

a) 4 <br>
b) 6 <br>
c) 7 <br>
d) 8 <br>

22) Which is the incorrect way of defining a variable?

a) `const x = 5;` <br>
b) `int x = 5;` <br>
c) `let x = 5;` <br>
d) `var x = 5;` <br>

```js
const myCar = {
	name: "Sonya",
	make: "Acura",
	model: "TL",
	year: 2011
}
```

23) Which is the incorrect way of grabbing this object's `year` value?

a) `myCar.year` <br>
b) `myCar(year)` <br>
c) `myCar["year"]` <br>

24) Which of these styles is for pushing an element away from *only* the left side of the page?

a) `margin-left` <br>
b) `margin` <br>
c) `padding-left` <br>
d) `move-left` <br>

25) Which of the following defines a measurement in screen pixels?

a) px <br>
b) vh <br>
c) vw <br>
d) vmin <br>

```








```

## Part 1-b: Answer the questions

```js
const prompt = prompt("How many dice are you using?");
const num = parseInt(prompt);

function rollDice(num){
  let i=0;
  while(i<num){
    const die = Math.floor(Math.random() * 6) + 1;
    console.log("dice " + (i+1) + " = " + die);
    i++
  }

rollDice(num);
```

1) What is this function trying to do?

```



```

2) Based on context, what do you think this line is doing

`const die = Math.floor(Math.random() * 6) + 1;` ?

```


```

3) Will this code execute?  If not, why not?

```


```

## Part 2: Open Response

1)  Write me a function that takes in a parameter `name` and prints...

`"Hello, " + name + " I am better than you at being cool."`


```













```

2) Replicate the below image using HTML.

<img src="sample1.png">


```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>















</body>
</html>
```

