### Divs/Positioning

Lesson Objectives:
- Really learn what the purpose of `<div>` are.
- Learn the CSS Box Model
- Reps on reps!

#### Do Now
- W3D4 folder
- index.html/styles.css
- Change the background color

<hr>
<hr>

#### Divs

What are the purpose of `<div>`?  

`<div>` basically serve as folders.  We house stuff inside them!  We can make them into boxes, and fling them across the page.  Let's try.

Copy the below code.

```
<body>
	<div>
		<p>Hello, I belong on the left</p>
	</div>
	<div>
		<p>Hello, I belong on the right!</p>
	</div>
</body>
```

Cool, so we have two `<div>`.  How do we differentiate the two?

We use IDs!

```
<body>
	<div id='left'>
		<p>Hello, I belong on the left</p>
	</div>
	<div id='right'>
		<p>Hello, I belong on the right!</p>
	</div>
</body>
```


```
div{
	background-color: papayawhip;
	width: 200px;
	border: 1px solid black;
}
div#left {
	float: left;
}
div#right {
	float: right;
}
```

Do y'all see what happens if we use the float style?  

<hr>
<hr>

We can put `<div>`s within other `<div>`.

HTML:
```
<body>
	<div id='main-container'>
		<div id='left'>
			<p>Hello, I belong on the left</p>
		</div>
		<div id='right'>
			<p>Hello, I belong on the right!</p>
		</div>
	</div>
</body>
```
CSS:
```
div{
	height: 100px;
	width: 100px;
	background-color: papayawhip;
	border: 2px solid black;
}
div#main-container{
	width: 400px;
	height: 125px;
	background-color: magenta;
}
div#right{
	float: right;
}
div#left{
	float: left;
}	
```

Below is what we're calling the CSS Box Model.  Check it out.  Looking at this should tell the difference between BORDER, MARGIN, and PADDING.  Whenever we say something like, margin-left, what that means is that we're PUSHING the content from the LEFT side of whatever you're pushing it from.<br>

<img src="https://i.stack.imgur.com/PeSIJ.gif"/>

## Diagram the box model
1. height/width
2. padding
3. border
4. margin

### Explaining the box model.

Height and width are pretty self explanatory.  Let's move on to padding.

#### Padding

Think of shoulder pads.  They provide an extra 'buffer' between yourself and... the air.  Padding in CSS provides a 'buffer' between the content and the rest of the page.  

```css
padding: 50px;
```

This will provide a `buffer` worth 50px between the content and the rest of the page.

```css
padding-left: 50px;
```

This will provide a 'buffer', but only on the left hand portion of the content.

#### Margin

Margin pretty much means you're pushing content inwards from the exterior of the page.

```css
body{
	margin: 50px
}
```

What's happening here is - you're telling the body to push itself in 50px in every direction.

<hr>

```css
body{
	margin-left: 100px;
}
```

What you're doing here is telling the body to push itself inwards 100px, but only from the left side.

<hr>

#### Hard-placement

I can place things anywhere on the page.  

HTML:
```html
<body>
	<div></div>
</body>
```

CSS:
```css
div{
	height: 200px;
	width: 200px;
	border: 1px solid red;
	position: absolute;
	left: 200px;
	top: 200px;
}
```

Give it a whirl and see what happens.  I'm going to explain what that position attribute is/does.  It's a doozy.

#### Display

<img src="https://i.stack.imgur.com/mGTYI.png"/>
<hr>

#### Positioning 

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">Positioning</a>

<hr>



## Additional Resources

#### [CanIUse](http://caniuse.com/)

http://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block
http://www.w3schools.com/css/css_positioning.asp 
	
