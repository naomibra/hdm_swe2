describe('Person in einer Altersgruppe suchen', function() {

	describe('testAlleUnter_25', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 10;
		let limit = 25;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = alleUnter(personen, limit);
		

		//3. Schritt: Ergebnisse prüfen
		it('Alle unter " + limit +" finden', function() {
			chai.assert.isNotNull(result, "Keine Personen unter " + limit + " gefunden!");
			chai.assert.equal(4, result.length, "Die Anzahl der Personen unter " + limit + " stimmt nicht!");
			let name = "Marcel";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Personen unter " + limit + " enthält keine Person mit dem Namen " + name);
			name = "Lena";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Personen unter " + limit + " enthält keine Person mit dem Namen " + name);
			name = "Alexander";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Personen unter " + limit + " enthält keine Person mit dem Namen " + name);
			name = "Anna";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Personen unter " + limit + " enthält keine Person mit dem Namen " + name);
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testAlleUnter_20', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 3;
		let limit = 20;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = alleUnter(personen, limit);
		

		//3. Schritt: Ergebnisse prüfen
		it('Alle unter " + limit +" finden', function() {
			chai.assert.isNotNull(result, "Keine Personen unter " + limit + " gefunden!");
			chai.assert.equal(0, result.length, "Die Anzahl der Personen unter " + limit + " stimmt nicht!");
		});
		
		//4. Schritt: Aufräumen
	});


	describe('testAlleUnter_75', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 1;
		let limit = 75;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = alleUnter(personen, limit);
		

		//3. Schritt: Ergebnisse prüfen
		it('Alle unter " + limit +" finden', function() {
			chai.assert.isNotNull(result, "Keine Personen unter " + limit + " gefunden!");
			chai.assert.equal(1, result.length, "Die Anzahl der Personen unter " + limit + " stimmt nicht!");
			let name = "Alexander";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Personen unter " + limit + " enthält keine Person mit dem Namen " + name);
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testAlleUnter_20', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 5;
		let limit = 20;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = alleUnter(personen, limit);
		

		//3. Schritt: Ergebnisse prüfen
		it('Alle unter " + limit +" finden', function() {
			chai.assert.isNotNull(result, "Keine Personen unter " + limit + " gefunden!");
			chai.assert.equal(1, result.length, "Die Anzahl der Personen unter " + limit + " stimmt nicht!");
			let name = "Anna";
			chai.assert.isTrue(arrayEnthaeltName(result, name), "Das Array mit Personen unter " + limit + " enthält keine Person mit dem Namen " + name);
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