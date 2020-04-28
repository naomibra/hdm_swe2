function filterColumn(term, id, cellNr) {
	var searchText = term.toLowerCase();
	var table = document.getElementById(id);
	var element;
	for (var r = 0; r < table.rows.length; r++) {
		element = table.rows[r].cells[cellNr].innerHTML;
		if (element.toLowerCase().indexOf(searchText) >= 0)
			table.rows[r].style.display = '';
		else
			table.rows[r].style.display = 'none';
	}
}

function filterColumnIgnoreHeader(term, id, cellNr) {
	var searchText = term.toLowerCase();
	var table = document.getElementById(id);
	var element;
	for (var r = 1; r < table.rows.length; r++) {
		element = table.rows[r].cells[cellNr].innerHTML;
		if (element.toLowerCase().indexOf(searchText) >= 0)
			table.rows[r].style.display = '';
		else
			table.rows[r].style.display = 'none';
	}
}


function filterANDAllCoumnsIgnoreHeader(terms, id) {
	var words = terms.toLowerCase().split(" ");
	var table = document.getElementById(id);
	var element;
	for (var r = 1; r < table.rows.length; r++) {
		element = table.rows[r].innerHTML;
		var displayStyle = 'none';
		var all = true;
		var i = 0;
		
		while(all && i < words.length) {
			if (element.toLowerCase().indexOf(words[i]) >= 0) {
				displayStyle = '';
			}
			else {
				displayStyle = 'none';
				all = false;
			}
			i++;
		}
		table.rows[r].style.display = displayStyle;
	}
}

function filterORAllCoumnsIgnoreHeader(terms, id) {
	var words = terms.toLowerCase().split(" ");
	var table = document.getElementById(id);
	var element;
	for (var r = 1; r < table.rows.length; r++) {
		element = table.rows[r].innerHTML;
		var displayStyle = 'none';
		var noOne = true;
		var i = 0;
		
		while(noOne && i < words.length) {
			if (element.toLowerCase().indexOf(words[i]) >= 0) {
				displayStyle = '';
				noOne = false;
			}
			else {
				displayStyle = 'none';
			}
			i++;
		}
		table.rows[r].style.display = displayStyle;
	}
}




