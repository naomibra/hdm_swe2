let autoren = '{"autoren": [{"name": "Dürrenmatt", "vor": "Friedrich", "geb": 1921, "tod": 1990}, ' +
	'{"name": "Frisch", "vor": "Max", "geb": 1911, "tod": 1991},' + 
' {"name": "Suter", "vor": "Martin", "geb": 1948, "tod": "-"}]}';



let autorenListe = JSON.parse(autoren).autoren;
let parent = document.getElementsByClassName("table")[0]; 

for(let i = 0; i < autorenListe.length; i++) {
	let autor = autorenListe[i];

	let div = document.createElement("div");
	div.setAttribute("class", "row");
	parent.appendChild(div);

	createColumn(div, autor.name);
	createColumn(div, autor.vor);
	createColumn(div, autor.geb);
	createColumn(div, autor.tod);
}

function createColumn(parent, text) {
	let div = document.createElement("div");
	div.setAttribute("class", "column");
	div.innerHTML = text;
	parent.appendChild(div);
}