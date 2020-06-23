
let autoren = '{"autoren": [{"name": "Dürrenmatt", "vor": "Friedrich", "geb": 1921, "tod": 1990}, ' +
	'{"name": "Frisch", "vor": "Max", "geb": 1911, "tod": 1991},' +
	' {"name": "Suter", "vor": "Martin", "geb": 1948, "tod": "-"}]}';

let inhalt=JSON.parse(autoren);
let autorenArray=inhalt.autoren;
let tabelle= document.getElementsByClassName("table")[0];
let body= document.getElementsByTagName("body")[0];



for(let i=0;i<autorenArray.length;i++){
	
	let zeile=document.createElement("div");
	zeile.classList.add("row");
	tabelle.appendChild(zeile);
	
	
	let divname=document.createElement("div");
	let divvor=document.createElement("div");
	let divgeb=document.createElement("div");
	let divtod=document.createElement("div");
	divname.innerHTML=autorenArray[i].name;
	divvor.innerHTML=autorenArray[i].vor;
	divgeb.innerHTML=autorenArray[i].geb;
	divtod.innerHTML=autorenArray[i].tod;
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


