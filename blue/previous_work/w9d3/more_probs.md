## More FUN-ction stuff!

### 1. Alert!

If I do something like...

```js
const name = prompt("What's your name?");
```

What's going to happen is the console is going to literally ask you the question `"What's your name?"`, and whatever you type in the box will be stored into the variable `name` as a string.

I want you to make a function, `alertYourName` that takes in the parameter `name`.  The function should print this statement.

"Ahh, `name`, you're about to be eaten!  Run away!"

*Bonus: try `alert`-ing the statement instead of merely printing it.*

### 2. Bill Calculator

Gabby wants to figure out the amount of money she wants to pay at a restaurant.  She is incapable of doing the math in her head, so she wants you to write something that'll help her do the math.

You should write a function, `calcBill()`, that takes in three parameters.  

- How many total people are at the table?
- What is the total bill?
- How much do you want to tip?  (0.20 = 20%)

Using these parameters, figure out how much Gabby (and each other person) should individually pay.



### 2. Are you making enough?

Shaina is trying to figure out what salary she needs to make in order to survive this puzzling game called life in NYC.  

Assuming that the average liveable salary to survive in NYC is $40,000, write a function called `calcSalary()` that does these following things.

- We should ask her how much she's making in a year.
- We should determine if she's able to survive in NYC!

This is how we write a "conditional" statement in JS, using this variable `salary`.

```js
if(salary<40000){
	alert("You will not survive NYC!")
}else{
	alert("You're going to thrive in NYC!");
}
```



