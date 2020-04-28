describe('Aelteste Person suchen', function() {

	describe('testAeltestePerson_Laenge10', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 10;
		//1. Schritt: Vorbeingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = aeltestePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Älteste Person finden', function() {
			chai.assert.isNotNull(result, "Keine älteste Person gefunden!");
			chai.assert.equal("Anna", result.name,  "Die gefundene älteste Person hat den falschen Namen!");
			chai.assert.equal(88, result.alter,  "Die gefundene älteste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testAeltestePerson_Laenge2', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 2;
		//1. Schritt: Vorbeingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = aeltestePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Älteste Person finden', function() {
			chai.assert.isNotNull(result, "Keine älteste Person gefunden!");
			chai.assert.equal("Alexander", result.name,  "Die gefundene älteste Person hat den falschen Namen!");
			chai.assert.equal(71, result.alter,  "Die gefundene älteste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testAeltestePerson_Laenge1', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 1;
		//1. Schritt: Vorbeingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = aeltestePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Älteste Person finden', function() {
			chai.assert.isNotNull(result, "Keine älteste Person gefunden!");
			chai.assert.equal("Alexander", result.name,  "Die gefundene älteste Person hat den falschen Namen!");
			chai.assert.equal(71, result.alter,  "Die gefundene älteste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});

	describe('testAeltestePerson_Laenge4', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 4;
		//1. Schritt: Vorbeingung: Array anlegen
		let personen = arrayAnlegen();
		arrayFuellen(personen, x);
		
		//2. Schritt: zu testende Funktion aufrufen
		let result = aeltestePerson(personen);
		

		//3. Schritt: Ergebnisse prüfen
		it('Älteste Person finden', function() {
			chai.assert.isNotNull(result, "Keine älteste Person gefunden!");
			chai.assert.equal("Kevin", result.name,  "Die gefundene älteste Person hat den falschen Namen!");
			chai.assert.equal(87, result.alter,  "Die gefundene älteste Person hat das falsche Alter!");
		});
		
		//4. Schritt: Aufräumen
	});
	
});