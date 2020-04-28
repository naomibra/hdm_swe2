	var sortedData = new Array(tableData.length);
	
	var sortierzeile = "";

//	function Erzeuge_Sortierzeile() {
//		sortierzeile = "<tr>";
//		sortierzeile = sortierzeile + "<th> <\/th>";
//
//		
//			sortierzeile = sortierzeile + "<th class = \"column0" + "\">";
//			sortierzeile = sortierzeile + 
//				"<a href=\"javascript:Sortiere_nach_Spalte(0, 'aufsteigend', false)\">" + IconAuf + "</a>";
//			sortierzeile = sortierzeile + 
//				"<a href=\"javascript:Sortiere_nach_Spalte(0, 'absteigend', false)\">" + IconAb + "</a>";
//			sortierzeile = sortierzeile + "<\/th>";
//			
//			sortierzeile = sortierzeile + "<th class = \"column1" + "\">";
//			sortierzeile = sortierzeile + 
//				"<a href=\"javascript:Sortiere_nach_Spalte(1, 'aufsteigend', true)\">" + IconAuf + "</a>";
//			sortierzeile = sortierzeile + 
//				"<a href=\"javascript:Sortiere_nach_Spalte(1, 'absteigend', true)\">" + IconAb + "</a>";
//			sortierzeile = sortierzeile + "<\/th>";
//
//		sortierzeile = sortierzeile+ "<tr>";
//	}
	
//	function Erzeuge_Headerzeile() {
//		var zeile = "";
//		zeile = zeile + "<tr><th " + "> <\/th>";
//		
//		zeile = zeile + "<th  class=\"theaderRight\">" + "Name"  + "<\/th>"
//		
//		zeile = zeile + "<th  class=\"theaderRight\">" + "Platz"  + "<\/th>"
//		
//		zeile = zeile + "<\/tr>";
//		
//		return zeile;
//	}

	function Sortiere_nach_Spalte(nummer, richtung, numeric) {
		var spaltendaten = new Array();
		var vergleichsdaten = new Array();
		var sortierIndex = new Array();
		
		for (var i = 0; i < rows; ++i) {
			spaltendaten[i] = tableData[i * columns + nummer];
			vergleichsdaten[i] = tableData[i * columns + nummer];
		}

			if (richtung == "absteigend") { 
				if(!numeric)
					spaltendaten.sort();
				else 
					spaltendaten.sort(Numsort);
				spaltendaten.reverse();
			}
			else {
				if(!numeric)
					spaltendaten.sort();
				else 
					spaltendaten.sort(Numsort);
			}
		

		for (i = 0; i < rows; ++i) {
			for (var j = 0; j < rows; ++j) {
				if (spaltendaten[i] == vergleichsdaten[j]) {
					sortierIndex[i] = j;
				}
			}
		}
		for (i = 0; i < rows; ++i) {
			for (j = 0; j < columns; ++j) {
				sortedData[i * columns + j] = tableData[sortierIndex[i] * columns + j]; 
			}
		}
		//Erzeuge_Sortierzeile();
		Schreibe_Tabelle(sortedData);
	}
	
	function Numsort (a, b) {
		  return a - b;
		}
	

	function Schreibe_Tabelle(daten) {
		var tabelleninhalt = "";
//		tabelleninhalt = tabelleninhalt + "<table>";
//		tabelleninhalt = tabelleninhalt + "<thead>";
//		
//		//tabelleninhalt = tabelleninhalt + Erzeuge_Headerzeile();
//		
//		
//		tabelleninhalt = tabelleninhalt + sortierzeile;
//		tabelleninhalt = tabelleninhalt +  "<\/thead>";
//		tabelleninhalt = tabelleninhalt +  "<tfoot><\/tfoot>";
//		tabelleninhalt = tabelleninhalt +  "<tbody>";
		for (var i = 0; i < rows; ++i) {
			tabelleninhalt = tabelleninhalt +  "<tr>";
				tabelleninhalt = tabelleninhalt +  "<td " + ">"
						+ (i + 1) + ".<\/td>";
			for (var j = 0; j < columns; ++j)
				tabelleninhalt = tabelleninhalt +  "<td class = \"column" + j + "\">" + daten[i * columns + j] + "<\/td>";
			tabelleninhalt = tabelleninhalt + "<\/tr>";
		}
//		tabelleninhalt = tabelleninhalt +  "<\/tbody>";
//		tabelleninhalt = tabelleninhalt +  "<\/table>";

		document.getElementById("tbody").innerHTML = tabelleninhalt;

	}
	