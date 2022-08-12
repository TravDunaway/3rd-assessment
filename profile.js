console.log("hello world! right right")

function handleSubmits(evt) {
	evt.preventDefault();
	alert("is my favorite color!")
}


let form = document.querySelector('#color');
form.addEventListener('click', handleSubmits);

function handleSubmited(evet) {
	evet.preventDefault();
	alert("is my favorite place !")
}


let forms = document.querySelector('#place');
forms.addEventListener('click', handleSubmited);

function handleSubmiting(evt) {
	evt.preventDefault();
	alert("is my favorite ritual!")
}


let formed = document.querySelector('#ritual');
formed.addEventListener('click', handleSubmiting);