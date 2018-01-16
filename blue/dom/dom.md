# DOM 

### Learning Objectives
- Describe the DOM
- Access elements in the DOM
- Add/remove elements to the DOM
- Edit existing elements in the DOM

### Why This Is Important

The DOM is an interface for our HTML and provides us with a structured representation of our document. With it, we can manipulate our HTML so our pages are no longer static data.

In other words, DOM and DOM manipulation is what allows websites to basically do anything "dynamic". 

Learning about the DOM and how it fits into the front end (visually what the user sees) also provides us a window into a bit more of how the internet works. This is obviously super important to our understanding of what we are learning and how it will fit into the entire web dev process as a whole.


### Okay, so what exactly is the Document Object Model?

- The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.  It represents the page so that programs can change the document structure, style, and content. The DOM represents the document (document = "a Web Page") as nodes and objects. That way, programming languages can connect to the page.

- The best way to conceptualize DOM is as a "tree".  There is a "hierarchy" attached to this.

<img src="images/dom1.jpg">

If you look at this diagram, and again below in HTML form...

```html
<!-- initial HTML tag  -->
<!DOCTYPE html> 
<html>

<!-- initial head tag  -->
<head> 
	<title>Sample Title</title>
</head> 
<!-- closing head tag  -->

<!-- initial body tag  -->
<body> 
	<h1>Example Page</h1>
	<p>This is an example page</p>
</body>
<!-- closing body tag  -->

</html> 
<!-- closing HTML tag  -->
```

An entire HTML page stems from the `<html>` tag.  

<hr>

Save an `index.html`, `styles.css`, and `scripts.js` into a folder called "DOM 1".





