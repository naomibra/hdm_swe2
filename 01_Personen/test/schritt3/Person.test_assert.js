describe('Jüngste Person suchen', function() {

	describe('testJuengstePerson_Laenge10', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 10;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = juengstePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Jüngste Person finden', function() {
			chai.assert.isNotNull(result, "Keine jüngste Person gefunden!");
			chai.assert.equal("Marcel", result.name,  "Die gefundene jüngste Person hat den falschen Namen!");
			chai.assert.equal(2, result.alter,  "Die gefundene jüngste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testJuengstePerson_Laenge6', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 6;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = juengstePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Jüngste Person finden', function() {
			chai.assert.isNotNull(result, "Keine jüngste Person gefunden!");
			chai.assert.equal("Lena", result.name,  "Die gefundene jüngste Person hat den falschen Namen!");
			chai.assert.equal(9, result.alter,  "Die gefundene jüngste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testJuengstePerson_Laenge1', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 1;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = juengstePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Jüngste Person finden', function() {
			chai.assert.isNotNull(result, "Keine jüngste Person gefunden!");
			chai.assert.equal("Alexander", result.name,  "Die gefundene jüngste Person hat den falschen Namen!");
			chai.assert.equal(71, result.alter,  "Die gefundene jüngste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testJuengstePerson_Laenge3', function() {
		seed = 3; /*Zufallsgenerator zurücksetzen */
		let x = 3;
		//1. Schritt: Vorbedingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = juengstePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Jüngste Person finden', function() {
			chai.assert.isNotNull(result, "Keine jüngste Person gefunden!");
			chai.assert.equal("Alexander", result.name,  "Die gefundene jüngste Person hat den falschen Namen!");
			chai.assert.equal(20, result.alter,  "Die gefundene jüngste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});
	
});