console.log('hello');

const button = document.getElementById('button');
const enterName = document.getElementById('enter-name');
const displaySentence = document.getElementById('display-sentence');

button.addEventListener('click', function(){
    console.log('clicked');
    const name = document.getElementById('input').value;
    console.log(name);
    display(name);

});

const display = function(name){
	enterName.style.display = 'none';
	displaySentence.innerHTML = "<h2>"+name+" is a brat!</h2>"
}
