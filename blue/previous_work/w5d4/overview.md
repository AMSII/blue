## 10-19 Do Now

## Link to this do now:
<h1><a href="http://bit.ly/2hQwmMy">http://bit.ly/2hQwmMy</a></h1>

### Instructions Pt. 1
- W5D4 folder
- index.html + styles.css
- connect them

<hr>

### Instructions Pt. 2
(10-15m)

- Create 4 `<div>`, give them all a class of 'box'.  
	e.g. `<div class="box"></div>`

- Give all `<div>` with class 'box' these qualities...
```css
	div.box{
		height: 100px;
		width: 100px;
		border: 1px solid black;
		background-color: cyan;
	}
```

- Have each of these 4 different boxes that we made do 4 separate transforms that we've learned on Tuesday.  

e.g.
```html
<div class="box" id="box1"></div>
```

```css
div.box#box1:hover{
	background-color: magenta;
	transition-duration: 3s;
}
```

<ol>
	<li>transform: scale(x,y)</li>
	<li>transform: translate(x,y)</li>
	<li>transform: rotate(_deg)</li>
	<li>transform: skewX(_deg) skewY(_deg)</li>
</ol>

p.s. you might want to use a 
`transition-duration: 3s`
