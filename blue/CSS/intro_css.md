## Cascading Style Sheet

### Learning Objectives

- Install CSS onto html files
- Explain specificity
- Add basic CSS properties and attributes

### DO NOW

- Create a W2D4 folder
- Save an index.html into that folder
- Add one header `<h1>` and a few `<p>` about some activities you do with your friends.

### What is CSS?

"CSS (Cascading Style Sheet) is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers"

- Google

### How to add CSS to an HTML file?

#### Inline Style:   

```<p style="color:green;font-size:40px">This is a paragraph</p>``` 

#### Internal Style Sheet: Put styling directly in `<head>` within HTML

```html
<head>
	<style>
		p {
			color: blue;
      font-size: 20px;
      }
  </style>
</head>
```

External Style Sheet: Include the link tag using a relative path (a file path).  

```html
<head>
	<link rel="stylesheet" type="text/css" href="file name">
</head>
```

For example, this would look like...

`<link rel="stylesheet" type="text/css" href="styles.css">`

Doing it this way involves creating a new file (Command-N, and saving this new file as 'styles.css').  This type of linking also ONLY works if you save index.html and styles.css inside the SAME folder.

If you do this, on the top bar, if you go to...

`view > layouts > columns 2`

You'll be able to go split screen, and you drag the tabs to whichever side you'd like.

### Specificity 

The reason CSS refers to a "cascade" is because styles have a specific order they're applied in - different levels of Specificity.  Where we define the styles and the selectors we use determine how the styling is applied to the DOM.

### Properties or CSS Attributes
1. color (name/values)- can be determined using Hex code / rgb / rgba
2. background (color/image)
3. font-size
4. font-family: 
	- "Times New Roman", Georgia, Serif
5. text-align

### Examples:

For the `<h1>` we have on our page, let's try to change the color of the text to red.

In CSS...

```css
h1{
	color: red;
}
```

If we want to change the font size to something...

```css
h1{
	color: rgb(72,141,105);
	font-size: 40px;
}
```

If we want to change the font, as well as change the color, AND change the font size...

```css
h1{
	color: #933E2C;
	font-size: 40px;
	font-family: "Verdana";
}
```

Add another `<h1>` to your HTML, then refresh the page in chrome.  Notice how this `<h1>` takes on the properties you assigned it?  We are changing all the `<h1>` elements in the page!

For additional colors...

`http://htmlcolorcodes.com/color-picker/`


### More Examples...

If we'd want to change the BACKGROUND COLOR of the page, we would want to change that in the element which would affect the entire VISIBLE part of the page.  

```css
body{
	background-color: blue;
}
```

If we'd want to push all the text of the page to the middle, we could do...

```css
body{
	background-color: #488D8B;
	text-align: center;
}
``` 

BTW, this is when the `<div>` tag would be really useful.

```html
<div>
	<p>Hullo, chap.</p>
</div>
```

```css
div{
	height: 200px;
	width: 200px;
	border: 1px solid black;
	background-color: aqua;
	text-align: center;
}
p{
	color: orange;
}
```

Lookee here, matey!  I've introduced height, width, and border.  

Borders operate like this...

```css
div{
	border: size type color;
}
```

Size: xyz in pixels (px).
Type: Solid, double, dotted...
Color: You know, color!

You can also assign borders in any given direction:

```css
div{
	border-top: 5px dotted aqua;
}
```
#### BOOKMARK THIS

`https://www.w3schools.com/css/css_intro.asp`

Go to this site - it is a CSS encyclopedia!

#### Hierarchy / level of importance goes from
1. Inline 
2. ID
3. Class
4. Element 

### Selection in CSS
- Multiple selectors ```h1, h2```
- Ancestors/Descendants ```footer li```
- ids
- classes 

=========================================

### Identifiers

#### ID

Let's say, you have something like this.

```html
<body>
	<p>Hello</p>
	<p>I like Kit Kats</p>
</body>
```

What if I want the FIRST `<p>` to be RED, and the SECOND `<p>` to be BLUE.

I can't just go to my CSS and do...

```css
p {
	color: red;
	color: blue;
}
```

We could just inline style, but what if we want multiple `<p>` tags to be blue and red?

What we do here is declare an ID.

ex.
```
<body>
	<p id="red">Hello</p>
	<p id="blue">I like Kit Kats</p>
</body>
```

Inside our CSS page, we declare ID with a # (hashtag) before it.  

So..

```css
#red{
	color: red;
}

#blue{
	color: blue;
}
```

REMEMBER: id's are realistically used to only name ONE element in a page.  Naming conventions are VERY IMPORTANT AS WELL.  Make sure your spelling is correct when you're trying to use id's.

#### CLASSES

```
<body>
	<p class="red">Hello</p>
	<p class="blue">I like Kit Kats</p>
</body>
```

We call upon classes using a period [.]
```
.red{
	color: red;
}

.blue{
	color: blue;
}
```

When we name CLASS in our CSS, know that it's with a period.  The difference between ID and CLASS right now is small.  For now, I want you to get used to the idea of using ID first.  If you have to reuse the name for some reason, change it to class.  You can use either/or throughout your page, it doesn't really matter too much.


### Combining tag name, id, and class in CSS selectors

Tag with Class Name ```article.important```

Similarly Id with Class ```#special-section.important```

Multiple Classes ```.important.active```

This is redunant code because there is only one id on the page.  
```div#special-section{...}```


### Practice

Create a new folder.  Open Sublime and save an HTML and CSS file in that folder.  Show me when you'd need to use id/class, or if I want to adjust the whole entire tag as a whole.  Use your brains and think about what I'm asking for.

1. I want to see 3 paragraphs.  They should ALL have a size of 14px. 

2. Give each of these paragraphs different text colors.

3. The body should have a background color of papayawhip (it's a color!).

4. The MIDDLE paragraph should have a border of 1px solid black.  

5. Add two different h1 to the top of your page.  Fill in the text with whatever you'd like.

6. The FIRST h1 should have the SAME TEXT COLOR that your FIRST PARAGRAPH has.  Show me an efficient way of achieving this task.

7. The SECOND h1 should have the SAME TEXT COLOR that your THIRD PARAGRAPH has.

BONUS. (USE GOOGLE IF YOU NEED HELP)

8. Find a picture from the internet and link it to your page.  Write an ID that sets the HEIGHT to 300px, and the WIDTH to 300px.

9. Add a hyperlink to the page.  On HOVER, the link should change colors to ORANGE.

10. Look up how to add a GOOGLE FONT to your page.  Change the font family of your entire page to your chosen font.

### DIV/POSITIONING

Why would we use divs?  

WE CAN DIVIDE THINGS INTO CERTAIN SECTIONS ON THE PAGE!

ex.
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

HOW DO WE DIFFERENTIATE THE TWO divs?  

We use IDs!

```
<body>
	<div id='left'>
		<p>Hello, I belong on the left</p>
		<p>What?</p>
	</div>
	<div id='right'>
		<p>Hello, I belong on the right!</p>
		<p>WHAT?</p>
	</div>
</body>
```
WE CAN POSITION THINGS TO THE LEFT AND RIGHT SIDE OF THE PAGE!  OBSERVE THE CSS.

```
#left {
	width: 200px;
	border: 1px solid black;
	background-color: papayawhip;
	float: left;
}

#right {
	width: 200px;
	border: 1px solid black;
	background-color: papayawhip;
	float: right;
}
```

We can manipulate things into specific positions as well!

### POSITIONING: 

Know difference between FIXED and RELATIVE.

Fixed: whatever you say is fixed will stay in the same place, even if the page is scrolled up and down.
Relative: Positioned 'relative' to its normal position.

Let's see relative in action, now.

```
#left {
	width: 200px;
	border: 1px solid black;
	background-color: papayawhip;
	position: relative;
	float: left;
	left: 30px;
}

#right {
	width: 200px;
	border: 1px solid black;
	background-color: papayawhip;
	position: relative;
	float: right;
	right: 30px;
}
```

WE CAN PUT DIVS INSIDE OTHER DIVS!

```
<body>
	<div id='main-container'>
		<div id='left'>
			<p>Hello, I belong on the left</p>
			<p>What?</p>
		</div>
		<div id='right'>
			<p>Hello, I belong on the right!</p>
			<p>WHAT?</p>
		</div>
	</div>
</body>
```
```
#main-container{
	width: 300px;
	height: 120px;
	border: 1px solid black;
	background-color: yellow;
}

#left {
	width: 100px;
	border: 1px solid black;
	background-color: papayawhip;
	position: relative;
	float: left;
	margin-top: 10px;
	margin-left: 30px;
}

#right {
	width: 100px;
	border: 1px solid black;
	background-color: papayawhip;
	position: relative;
	float: right;
	margin-top: 10px;
	margin-right: 30px;
}
```
Below is what we're calling the CSS Box Model.  Check it out.  Looking at this should tell the difference between BORDER, MARGIN, and PADDING.  Whenever we sa y something like, margin-left, what that means is that we're PUSHING the content from the LEFT side of whatever you're pushing it from.<br>
<img src="https://i.stack.imgur.com/PeSIJ.gif"/>

## Diagram the box model
1. height/width
1. padding
1. border
1. margin

## List and define the different ways to display an element
1. block- no matter what size the body is, the element will adjust to be 100% of width
1. inline- width shrinks around content and width does not expand to fit container.  (Span is an example)
	- ignores width and height properties
	- only horizontal margin and padding are respected (ignore vertical margin)
1. inline-block-width will shrink to fit around content
	- height, width, and vertical padding/margin work

## Differentiate between units of measure in layout
1. px
1. em-unit of measure based on multiple of font size 
	-  inherits font size from parents
	
1. rem-based on browser default font size 
1. %
	- height: % of parent's height
	- width: % of parent's width
		- To utilize entire element to take into account padding and border and not just content use 
		```box-sizing: border-box```
	- padding: % of parents's width not heigh
	- border: doesn't even work (just take note)
	- margin: like padding
	- position: works as expected
	

##Additional Resources

####[CanIUse](http://caniuse.com/)

http://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block
http://www.w3schools.com/css/css_positioning.asp

### Resizing Images
---------------
Let's say we got an image from the internet, like...

<img style="height: 150px; width: 200px;"src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Skittles-Louisiana-2003.jpg">

I can resize it using measurements of HEIGHT, and WIDTH.  

```
img{
	height: 100px;
	width: 200px;
}
```

Remember that I can assign ID's to images as well.  
	
