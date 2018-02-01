# Intro to Bootstrap

### Lesson Objectives
- Introduce Bootstrap
- Demo some of the things that can be done via BS

## Ok, what is Bootstrap?

Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web!  

Not a good enough explanation?

<img src="https://v4-alpha.getbootstrap.com/examples/screenshots/carousel.jpg">

Notice how differently the site above looks versus the types of things we've been making in this class so far.  Utilizing this framework will allow you to create highly responsive webpages using minimal amounts of JS.

## Let's get started.

```html
<!DOCTYPE html>
<head>
	<!-- All your meta links go below -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>

	<!-- All your script links go below -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script type="text/javascript" src="scripts.js"></script>
</body>
</html>                            
```

You *may* want to copy the above code and paste it into a HTML document on your Desktop.  If you do this and name it something like "template.html", that'd probably be incredibly useful.  You could then copy/paste this template into every new project we create.

## Intro to BS

### I. Headers

Try writing `<h1>` through `<h6>` in the body.

Notice how everything's a bit different now.

<img src="images/header.png">

With Bootstrap, you can make EVEN BIGGER headers!

```html
  <h1 class="display-1">Dogs</h1>
  <h1 class="display-2">Are not</h1>
  <h1 class="display-3">Cooler than</h1>
  <h1 class="display-4">Cats</h1>
```

Take note of how each of these `<h1>` have different classes.  Also notice how in our own personal CSS page, we never defined these classes.  The reason this works is because these classes are defined in the Bootstrap CSS link we've provided.  If we want to fully utilize this Bootstrap framework, we're going to have to learn and research all the different types of classes there are.

<img src="images/display1.png">

### II. Paragraphs

How do we take normal, "boring" paragraphs, and make them more dynamic?

Look at these different types of text.

```html
  <p>I like dogs and I'm not the biggest fan of cats</p>
  <p class="lead">The Patriots are going to win the Super Bowl</p>

  <blockquote class="blockquote">
    <p class="mb-0">"I'm being nice to you.  Have I stabbed you?  No."</p>
    <footer class="blockquote-footer">Cardi B</footer>
  </blockquote>
```

Notice that there are all these new tags?  Thank Bootstrap for that.  All 3 of these statements are different from one another.

<img src="images/cardi.png">

### Practice

- Include a `<h1>` that is your name
- Include a header using the class `display-2`.  Write what your favorite snack is.
- Include a `<blockquote>`.  Write your senior quote in that.


### More Typography stuff...

<h3><a href="https://www.w3schools.com/bootstrap4/bootstrap_typography.asp">https://www.w3schools.com/bootstrap4/bootstrap_typography.asp</a></h3>

## Jumbotron

<img src="images/jumbo1.png">

Jumbotron works exactly the way you think it would - a BIG container to display something you'd want to get extra attention.

```html
<div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple *hero* unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-3">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
</div>
```

Practice this by inserting your own information.

<h3><a href="https://www.w3schools.com/bootstrap4/bootstrap_jumbotron.asp">https://www.w3schools.com/bootstrap4/bootstrap_jumbotron.asp</a></h3>

## Dropdowns

Dropdown menus are overlays accessed by *clicking*, used to display links and more!  The secret is that there is JavaScript being executed, but you don't write the code - it's prebuilt for you.

Dropdowns in particular are enabled by *popper.js*, utilized by this link at the bottom of the body.

```html
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
```

### Buttons

There are quite a few button "types"...

```html
<button type="button" class="btn btn-primary">Primary</button>

<!-- Secondary, outline button -->
<button type="button" class="btn btn-secondary">Secondary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
```

<img src="images/button1.png">

### Single Drop

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Search Engines
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="http://www.google.com">Google</a>
    <a class="dropdown-item" href="http://www.yahoo.com">Yahoo</a>
    <a class="dropdown-item" href="http://www.msn.com">MSN</a>
  </div>
</div>
```

Notice all the different attributes this single button has.

- `class`
- `type`
- `id`
- `data-toggle`
- `aria-haspopup`
- `aria-expanded`

P.S.

Accessible Rich Internet Applications (ARIA) defines ways to make Web content and Web applications (especially those developed with Ajax and JavaScript) more accessible to people with disabilities.

<img src="images/drop1.png">

### Multi Drop

Notice the similarities, and the differences, between the below example and the example above.

```html
<div class="btn-group">
  <button type="button" class="btn btn-warning dropdown-toggle" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Settings
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-success dropdown-toggle" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Help
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-info dropdown-toggle" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Profile
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
```

<img src="images/drop2.png">

### Exercise

Create a dropdown menu and include 3 or 4 websites you go to on a regular basis.  Make sure you name the menu something relevant.

<h3><a href="https://www.w3schools.com/bootstrap4/bootstrap_dropdowns.asp">https://www.w3schools.com/bootstrap4/bootstrap_dropdowns.asp</a></h3>
