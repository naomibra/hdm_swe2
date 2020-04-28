function check(text) {
	if(text == null || text.length == 0 || !isNaN(text[0])) {
		return false;
	}
	return true;
}

function checkName(text) {
    var label = document.getElementById("nameLabel");
    if (check(text)) {
        label.style.color = "blue";
    } else {
        label.style.color = "red";
    }
}