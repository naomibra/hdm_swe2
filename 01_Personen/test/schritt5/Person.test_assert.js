describe('Duplikate suchen', function() {

	describe('testDuplikateVorhanden', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 100;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = alleDuplikate(personen);

		console.log(result);
		

		//3. Schritt: Ergebnisse prüfen
		it('Alle Duplikate finden', function() {
			chai.assert.isNotNull(result, "Keine Duplikate gefunden!");
			chai.assert.equal(6, result.length, "Die Anzahl Duplikate stimmt nicht!");
			let name = "Anna";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Duplikaten enthält keine Person mit dem Namen " + name);
			name = "Marcel";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Duplikaten enthält keine Person mit dem Namen " + name);
			name = "Laura";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Duplikaten enthält keine Person mit dem Namen " + name);
		
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testDuplikateNichtVorhanden', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 10;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = alleDuplikate(personen);

		console.log(result);
		

		//3. Schritt: Ergebnisse prüfen
		it('Alle Duplikate finden', function() {
			chai.assert.isNotNull(result, "Kein leeres Ergebnisarray erzeugt!");
			chai.assert.equal(0, result.length, "Die Anzahl Duplikate stimmt nicht!");
		});
		
		//4. Schritt: Aufräumen
	});
	
});

	
function arrayEnthaeltName(p, name) {
	let result = false;
	let i = 0;
	while(!result && i < p.length) {
		if(p[i].name == name) {
			result = true;
		}
		i++;
	}
	return result;
}