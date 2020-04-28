function sortColumn(tableData, colNumber, ascending, numeric) {
	
//	1. Array mit Spalteninhalten bauen
//	2. Array kopieren, um später die Reihenfolge des Indizes zu überprüfen
//	3. Array sortieren
//	4. Reihenfolge der alten Indizes festlegen
//	5. sortierete Zeilen zusammenbauen: neues Array anlegen, Daten in der Reihenfolge der Indizes kopieren
	
	var columnData = new Array(); //enthält alle Daten der Spalte mit Nr. colNumber; wird sortiert
	var compData = new Array();   //enthält alle Daten der Spalte mit Nr. colNumber in der Originalreihenfolge
	var sortIndex = new Array();  //speichert beim Sortieren die Reihenfolge der Zeilen
	
	var sortedData = new Array(); //enthält am Ende die sortierten Daten

	for (var i = 0; i < tableData.length; ++i) {
		columnData[i] = tableData[i][colNumber];
		compData[i] = tableData[i][colNumber];
	}

	if(!numeric) {
		columnData.sort();
	}
	else {
		columnData.sort(numeric);
	}
	if (!ascending) {
		columnData.reverse();
	}


	for (i = 0; i < tableData.length; ++i) {
		for (var j = 0; j < tableData.length; ++j) {
			if (columnData[i] == compData[j]) {
				sortIndex[i] = j;
			}
		}
	}
	
	for (i = 0; i < tableData.length; ++i) {
	    sortedData[i] = new Array();
	    var j = tableData[i].length;
	    for(var k = 0; k < j; k++) {
		    sortedData[i][k] = tableData[sortIndex[i]][k];
	    }
	}
	generateTable(sortedData);
}


function generateTable(data) {
    if(data != null) {
    	var content = "";
    	for (var i = 0; i < data.length; i++) {
    	    var j = data[i].length;
    		content = content + "<tr>";
    		for(var k = 0; k < j; k++) {
    		    content = content + "<td>" + data[i][k] + "<\/td>";
            }
    		content = content + "<\/tr>";
    	}
    	document.getElementById("tbody").innerHTML = content;
    }
}

function fillTable(jsonString) {
    var tableData = new Array();
    console.log(jsonString);
    var objects = JSON.parse(jsonString);
    for(var i = 0; i < objects.length; i++) {
        var personArray = objects[i];
        tableData[i] = new Array();
        tableData[i][0] = personArray[0];
        tableData[i][1] = personArray[1];
    }
    generateTable(tableData);
    return tableData;
}
