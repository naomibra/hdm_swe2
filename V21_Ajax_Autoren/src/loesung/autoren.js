function tabellenInhalt(autoren) {
	let inhalt = JSON.parse(autoren);
	let autorenArray = inhalt.autoren;
	let tabelle = document.getElementsByClassName("table")[0];
	let body = document.getElementsByTagName("body")[0];



	for (let i = 0; i < autorenArray.length; i++) {

		let zeile = document.createElement("div");
		zeile.classList.add("row");
		tabelle.appendChild(zeile);


		let divname = document.createElement("div");
		let divvor = document.createElement("div");
		let divgeb = document.createElement("div");
		let divtod = document.createElement("div");
		divname.innerHTML = autorenArray[i].name;
		divvor.innerHTML = autorenArray[i].vor;
		divgeb.innerHTML = autorenArray[i].geb;
		divtod.innerHTML = autorenArray[i].tod;
		divname.classList.add("column");
		divvor.classList.add("column")
		divgeb.classList.add("column");
		divtod.classList.add("column");
		zeile.appendChild(divname);
		zeile.appendChild(divvor);
		zeile.appendChild(divgeb);
		zeile.appendChild(divtod);

		body.appendChild(zeile);

	}

}

let ajax = new XMLHttpRequest();
if (ajax != null) {
	ajax.open("POST", "src/loesung/autoren.json");
	ajax.onreadystatechange = function () {
		if (this.readyState == 4) {
			if (this.status == 200) {
				tabellenInhalt(this.responseText);
			}
			else {
				alert(this.statusText);
			}
		}
	}
	ajax.send(null);
}
else {
	alert("Ihr Browser unterstützt kein Ajax!");
}
