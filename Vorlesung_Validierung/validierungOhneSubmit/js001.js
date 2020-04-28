function check(text) {
	if(text.length == 0 || !isNaN(text[0])) {
		return false;
	}
	return true;
}

function checkName(text) {
    if (check(text)) {
        alert("Eingabe OK");
    } else {
        alert("Bitte Eingabe korrigieren!");
    }
}