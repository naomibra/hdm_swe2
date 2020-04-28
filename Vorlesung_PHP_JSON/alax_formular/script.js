function datenVersenden() {
	let ajax = new XMLHttpRequest();
	if(ajax!=null) {
		ajax.open("POST","personSpeichern.php");
		ajax.onreadystatechange = function(){
			if(this.readyState == 4){
				if(this.status == 200){
					anzeige(this.responseText);
				}
			}
		}
		let eingaben = new FormData(document.forms.formular);
		ajax.send(eingaben);
		
		// let eingegebenerName = document.forms.formular.name.value;
		// let eingegebenesAlter = document.forms.formular.alter.value;
		// let eingaben = new FormData();
   		// eingaben.append("name", eingegebenerName);
  		// eingaben.append("alter", eingegebenesAlter);
		// ajax.send(eingaben);
	}
}

function anzeige(text) {
	let jsonObjekt = JSON.parse(text);
	let body = document.getElementsByTagName("body")[0];
	let div = document.createElement("div");
	body.appendChild(div);
	div.innerHTML = "Antwort vom Server:" + jsonObjekt.antwort;
}