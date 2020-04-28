function eingabeAuswerten() {
	let eingabe1 = document.forms.formular.elements.formularfeld1.value;
	
	let eingabe2 = document.forms[0].elements[1].value;
	
	let div1 = document.createElement("div");
	div1.innerHTML = eingabe1;
	
	let div2 = document.createElement("div");
	div2.innerHTML = eingabe2;
	
	let body = document.getElementsByTagName("body")[0];
	body.appendChild(div1);
	body.appendChild(div2);
}