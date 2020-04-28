//var autoren = '{"autoren": [{"name": "Dürrenmatt", "vor": "Friedrich", "geb": 1921, "tod": 1990, "buecher": [{"titel": "Die Physiker"}, {"titel": "Der Besuch der alten Dame"}, {"titel": "Der Richter und sein Henker"}]}, {"name": "Frisch", "vor": "Max", "geb": 1911, "tod": 1991, "buecher": [{"titel": "Andorra"}, {"titel": "Stiller"}, {"titel": "Homo Faber"}]}, {"name": "Suter", "vor": "Martin", "geb": 1948, "tod": "-", "buecher": [{"titel": "Die Zeit, die Zeit"}, {"titel": "Die dunkle Seite des Mondes"}, {"titel": "Montechristo"}]}]}';


function autorenEinlesen() {
	let ajax = new XMLHttpRequest();
	if(ajax!=null) {
		ajax.open("POST","autoren.php");
		ajax.onreadystatechange = function(){
			if(this.readyState == 4){
				if(this.status == 200){
					anzeige(this.responseText);
				}
			}
		}
		ajax.send();
	}
}

function anzeigen(data) {
    var object = JSON.parse(data);

    var autorenArray = object.autoren;

    var table = document.getElementsByClassName("table")[0];
    for(var i=0; i < autorenArray.length; i++) {
        var autor = autorenArray[i];
        var buecher = autor.buecher;
        var row = document.createElement("div");
        table.appendChild(row);
        row.classList.add("row");
        var td = document.createElement("div");
        row.appendChild(td);
        td.classList.add("column");
        td.innerHTML = autor.name;
        td_vorname = document.createElement("div");
        row.appendChild(td_vorname);
        td_vorname.classList.add("column");
        td_vorname.innerHTML = autor.vor;
        td = document.createElement("div");
        td.classList.add("column");
        row.appendChild(td);
        td.innerHTML = autor.geb;
        td = document.createElement("div");
        td.classList.add("column");
        row.appendChild(td);
        td.innerHTML = autor.tod;
        

        for(var j=0; j < buecher.length; j++) {
            var row = document.createElement("div");
            td_vorname.appendChild(row);
            row.classList.add("row");
            var td = document.createElement("div");
            td.classList.add("column2");
            row.appendChild(td);
            // td = document.createElement("div");
            // td.classList.add("column2");
            // row.appendChild(td);
            td.colSpan = 3;
            td.innerHTML = buecher[j].titel;
        }
    }
}