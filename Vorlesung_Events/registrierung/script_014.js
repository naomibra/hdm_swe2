function markRed() {
	event.target.style.backgroundColor = "red";	
	event.target.removeEventListener("click", markRed);
	event.target.addEventListener("click", markBlue);
}

function markBlue() {
	event.target.style.backgroundColor = "blue";	
	event.target.removeEventListener("click", markBlue);
	event.target.addEventListener("click", markRed);
}
