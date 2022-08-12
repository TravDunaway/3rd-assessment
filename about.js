console.log("hello world");


let duckCompliment = document.querySelector('#duck')
function mouseOverDuck(event){
	event.preventDefault();
	alert("Dang User! You are one smart Duck!"
	)
	console.log("mouseover event worked")
}
duckCompliment.addEventListener('mouseover', mouseOverDuck)

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Congrats! Your form has been submitted successfully!!!")
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);