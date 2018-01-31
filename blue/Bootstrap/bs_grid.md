# The Grid (Bootstrap II)

### Lesson Objectives
- Learn, and master the grid

## Intro

Great, so we've kinda learned some "typography" and some dropdowns.  While those are great to do in Bootstrap, the *real* power of this stuff lies in the grid system. 

> "Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive."

It makes what we're about to do possible.

## Example:

Create a new HTML and CSS page.  Copy and paste from the template we saved yesterday.

In the `<body>`...

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      A column
    </div>
    <div class="col-sm">
      A column
    </div>
    <div class="col-sm">
      A column
    </div>
  </div>
</div>
```

In your `styles.css`...

```css
body{
	text-align: center;
}

div{
	height: 50px;
}

div.container{
	margin-top: 50px;
}

div.col-sm{
	border: 1px solid black;
	background-color: lightblue;
}

```

You're going to see something like...

<img src="images/grid.png">

Interesting...

What if we add another `col-sm`.

```
<div class="container">
  <div class="row">
    <div class="col-sm">
      A column
    </div>
    <div class="col-sm">
      A column
    </div>
    <div class="col-sm">
      A column
    </div>
    <div class="col-sm">
      A column
    </div>
  </div>
</div>
```

This translates to...

<img src="images/grid2.png">

<b>NOTE</b> how the columns are automatically resizing?  Thank Flexbox for that.

### Exercise

Add a 5th column, then a 6th column.

Give the 5th column it's own separate background color.  What might we have to do?

*Hint: Think about the thing you need to swipe into school every day*


