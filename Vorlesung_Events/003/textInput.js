function checkText(absatz) { 
	let text = absatz.innerHTML;
	let index = text.indexOf("absatz");
	if(index > -1) {
		absatz.style.background = "tomato";
	} else {
		absatz.style.background = "lightgreen";
	}
}

function reset(absatz) {
	absatz.style.background = "white";
}






function checkText2() { 
	let absatz = event.target;
	let text = absatz.innerHTML;
	let index = text.indexOf("absatz");
	if(index > -1) {
		absatz.style.background = "tomato";
	} else {
		absatz.style.background = "lightgreen";
	}
}

function reset2() {
	let absatz = event.target;
	absatz.style.background = "white";
}

function containsElement(array, inhalt) {
	let i = 0;
	let found = false;
	while(i < array.length && !found) {
		if(array[i].tagName == inhalt) {
			found = true;
		}
	}
	return found;
}





let word = "absatz";
let wordReplaced = '<span class="error">' + word + '</span>'; 

function checkText3() {
	let absatz = event.target;

	if(!containsElement(absatz.children, "SPAN")) {
		let text = absatz.innerHTML;
		let index = text.indexOf(word);
		if(index > -1) {
			let substring1 = text.substring(0, index);
			let substring2 = wordReplaced;
			let substring3 = text.substring(index + word.length, 
				text.length);

			absatz.innerHTML = substring1 + substring2 + substring3;
		}
	}
}

function reset3() {
	let absatz = event.target;
	if(containsElement(absatz.children, "SPAN")) {
		let text = absatz.innerHTML;
		let index = text.indexOf(wordReplaced);
		if(index > -1) {
			let substring1 = text.substring(0, index);
			let substring2 = word;
			let substring3 = text.substring(index + wordReplaced.length, text.length);
			absatz.innerHTML = substring1 + substring2 + substring3;
		}
	}

}

