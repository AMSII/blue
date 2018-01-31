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

## Great, but why does this work the way it works?

>Containers provide a means to center and horizontally pad your site’s contents. Use .container for a responsive pixel width or .container-fluid for width: 100% across all viewport and device sizes.

> Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.

> In a grid layout, content must be placed within columns and only columns may be immediate children of rows.

> Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns. For example, four instances of .col-sm will each automatically be 25% wide from the small breakpoint and up. See the auto-layout columns section for more examples.

> Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use .col-4.

Below is a simplified diagram of what I'm talking about.

<img src="images/grid3.png">

## Col Sizes.

|  			 | Extra Small | Small | Medium | Large | Extra Large |
| ------ | ----------- | ------| ------ | ----- | -----------
| Max Width | auto |    540px |    720px | 960px | 1140px
| class prefix | .col- | .col-sm- | .col-md- | .col-lg- | .col-xl-
| max columns  |  12																				 

