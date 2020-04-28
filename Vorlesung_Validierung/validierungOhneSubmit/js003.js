function check(text) {
	if(text == null || text.length == 0 || !isNaN(text[0])) {
		return false;
	}
	return true;
}

function checkName(text) {
    //var input = document.getElementsByName("eingabeText")[0];
    var input = document.forms[0].eingabeText;
    if (check(text)) {
        input.style.background = "blue";
    } else {
        input.style.background = "red";
    }
}