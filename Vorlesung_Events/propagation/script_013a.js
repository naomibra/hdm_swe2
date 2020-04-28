function bodyKlick() {
	console.log("Klick auf den Body");
}

function h1Klick() {
	console.log("Klick auf die h1-Überschrift");
}

function pKlick() {
	console.log("Klick auf einen Absatz");
	event.stopPropagation();
}

function markKlick() {
	if(event.target.tagName == "EM") {
		console.log("Klick auf ein em-Element");
	} else {
		console.log("Klick auf ein strong-Element");
	}
	
}