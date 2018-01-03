## Divs + Lists
### Lesson Objectives
- Introduce Sublime Text 3
- Refresher on tags
- Learn list tags
- Learn div tags
- Implement everything

### Sublime Text
For this class, and for now on, we are going to be coding using Sublime Text.  This is a text editor where we can save dedicated HTML, CSS, and JS files.  But first...

#### Setup

<ol>
	<li>Navigate to your desktop</li>
	<li>Double tap on your desktop, then click "New Folder"</li>
	<li>Name the folder "Your name" + Coding</li>
	<li>Click inside your folder, then double tap inside of it to create another folder.  Name it "w1d3" for week 1, day 3.</li>
	<li>Inside of w1d3, create a new folder called "Do Now"</li>
</ol>

We are going to constantly name our folders this way throughout this course, so make sure you remember this method.

#### Do Now
<ol>
	<li>Open Sublime Text 3 from the bottom bar.</li>
	<li>Press Command-N to create a new tab.</li>
	<li>Press Command-S to save your file.</li>
	<li>Navigate towards the folder "Do Now" that we've created earlier (I'll show you how to do this)</li>
	<li>Save your file as "index.html".  You'll need to include the .html when you're saving these files.</li>
	<li>Inside of this new file, type this: Open a tag, then type "htm", then press tab.  This will create the HTML skeleton for you (HTML tags, head tag and body tag).</li>
</ol>
For the skeleton, type...

For #6, ```<htm``` then press tab!

### Tag Refresher.

Inside your ```<body>```, let's practice some of the tags we've learned from yesterday.

Remember that there are three components to an HTML element.  They are...

Opening tag, Content, Closing tag.

Don't forget your closing tag!

- ```<h1></h1>``` = header tag 
- ```<h2></h2>``` = header 2 tag
- ```<p></p>``` = paragraph tag
- ```<img src="" width="" height="">``` = image tag (remember what attributes are?)
- ```<a href="http://www.google.com">Google</a>``` = hyperlink tag

Type one example of each within your Sublime file!

#### Lists

So, you know what lists are, right?  For HTML purposes, we primarily use two types.

ORDERED<br>
UNORDERED

##### Ordered List

```
<ol>
</ol>
```
Typing ```<ol>``` tells the computer that you'll want to use NUMBERS in regards to writing a list.  How do we write each individual numbered point?

```
<ol>
	<li>This is number one!</li>
	<li>This is number two!</li>
</ol>
```
Translates to...
<ol>
	<li>This is number one!</li>
	<li>This is number two!</li>
</ol><br>

Type this out, so we make sure we know what we're doing.

##### Unordered List

```
<ul>
</ul>
```
Typing ```<ul>``` tells the computer that you'll want to use BULLET POINTS in regards to writing a list.  How do we write each bullet point?

```
<ul>
	<li>This is number one!</li>
	<li>This is number two!</li>
</ul>
```
Translates to...
<ul>
	<li>This is number one!</li>
	<li>This is number two!</li>
</ul><br>

<hr><hr>

#### Adding a title to the list.
```
<h1>Things I did today</h1>
<ul>
	<li>Woke up</li>
	<li>Showered</li>
	<li>Went to work</li>
</ul>
```
...translates to...
<h1>Things I did today</h1>
<ul>
	<li>Woke up</li>
	<li>Showered</li>
	<li>Went to work</li>
</ul>

You try this!

### Divs

```<div>``` means "divider" tag.  This is how we'll start to organize our HTML document.

The best way to think of ```<div>``` are like a school binder.  The organization structure would be...

```
<school binder>
	<history folder>
		<--- history stuff --->
	</history folder>
	<math folder>
		<--- math stuff ---> 
	</math folder>
	<english folder>
		<--- english stuff --->
	</english folder>
</school binder>
```
So, below is an example of how ```<div>``` would work.

```
<body>
	<div>
		<h1>TV shows I like</h1>
		<ol>
			<li>Game of Thrones</li>
			<li>Bla bla bla</li>
		</ol>
	</div>
	<div>
		<h2>Things I like about history</h2>
		<ul>
			<li>Blabla</li>
		</ul>
	</div>
</body>
```

Notice how these are housed within separate ```<div>``` tags?

While, right now because we're only learning HTML, you can't see how these ```<div>``` are really being used.

When we introduce something called CSS (Cascading Style Sheet) next week, Now we'll see why we're doing this.

### General List of Tags

Okay, so now that we've gone over ```<div>``` and lists, I'm going to list you a variety of usable tags.

`<h1>`-`<h6>`: various headers. These are kinda like sub titles.<br>
```<div>```: divider<br>
```<a>```: anchor aka hyperlink<br>
`<br>`: line break<br>
`<span>`: generic inline container for phrasing content. Good for snippets of text within p tags<br>
`<p>`: paragraph<br>
`<hr>`: homerun! just kidding. It's used for a thematic change i.e. a separating line.<br>
`<img>`: image tag<br>
`<ul>`: unordered list<br>
`<ol>`: ordered list<br>
`<li>`: list item<br>
`<table>` and various table tags<br>

### Exercise

While you're in Sublime, press Command-N.  This will make a new tab.

Make a new folder within "w1d3", and call it "exercises".  Save your file as "exercise.html" inside of that new folder you just created.  

Type ```<htm``` and press tab!  

Now, create two separate ```<div>```

In the first ```<div>```, you should include a ```<h1>``` stating what your favorite activity is.  

In the second ```<div>```, you should include a ```<h1>``` stating what your least favorite activity is.

<h3>Bonus!</h3>

Include a picture of your favorite/not favorite activity inside of the relevant ```<div>```.

Remember, the syntax goes...

```<img src="" height="" width="">```

```src``` = the source of the picture. (ends in .jpg, .jpeg, .png)
```height``` and ```width``` are measured using px.

<h3>Bonus 2</h3>

I want it so, if you click the picture, it will LINK you to a site that's relevant towards that activity.  

Reminder: 

Syntax: ```<a href="">*Something*</a>```
```href``` = hyperlink reference.

Hint: You can use a tag within another tag.  

```
<div>
	<p>Bla</p>
</div>
```

<h3>Bonus 3</h3>

Go to this website:

``http://www.w3schools.com``

This is kind of like an encyclopedia for programming.

