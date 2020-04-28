function check(text) {
	if(text == null || text.length == 0 || !isNaN(text[0])) {
		return false;
	}
	return true;
}

function checkName(text) {
    var span = document.getElementById("eingabeTextError");
    span.innerHTML="";
    span.style.color = "red";
    if (check(text)) {
       // nichts zu tun
    } else {
        let errorMsg = "Der Name muss gesetzt sein und darf nicht mit einer Ziffer anfangen.";
        span.innerHTML = errorMsg;
    }
}