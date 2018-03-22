console.log('hello');
let counter = 0;
const button = document.getElementById('button');
	button.addEventListener('click', function(){
    toggler();
});
	
const h1 = document.getElementById('header');
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');
const list4 = document.getElementById('list4');
const body = document.getElementsByTagName('body')[0];

header.innerHTML = "Do you dare to click me?";

const toggler = function(){
	// console.log('clicked');
	counter++
	if(counter%2==0){
		toggleLove();
	} else{
		toggleHate();
	}
};

const toggleLove = function(){
	console.log('love');
	body.id = "light";
	h1.id = "lovey";
	list1.classList.remove('dark');
	list2.classList.remove('dark');
	list3.classList.remove('dark');
	list4.classList.remove('dark');
	h1.innerHTML = "Things I love";	
	list1.innerHTML = "Game of Thrones";
	list2.innerHTML = "Pats football";
	list3.innerHTML = "Las Vegas";
	list4.innerHTML = "#naptime"
}

const toggleHate = function(){
	console.log('hate');
	body.id = "dark";
	h1.id = "hatey";
	list1.classList.add('dark');
	list2.classList.add('dark');
	list3.classList.add('dark');
	list4.classList.add('dark');
	h1.innerHTML = "Things I hate";
	list1.innerHTML = "Cilantro";
	list2.innerHTML = "Being late";
	list3.innerHTML = "Donald Trump";
	list4.innerHTML = "Waiting in line";
}
