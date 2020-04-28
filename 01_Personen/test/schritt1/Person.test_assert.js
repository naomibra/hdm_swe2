describe('Array fuellen', function() {

	describe('testArrayFuellen_Laenge10', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 10;
		//1. Schritt: Vorbeingung: Array anlegen
		let personen = arrayAnlegen();
		
		//2. Schritt: zu testende Funktion aufrufen
		arrayFuellen(personen, x);
		

		//3. Schritt: Ergebnisse prüfen
		it('Array sollte existieren', function() {
			chai.assert.exists(personen, "Das Array personen wurde nicht initialisiert!");
			chai.assert.equal(x, personen.length,  "Das Array personen hat nicht die Länge " + x + "!");
			for(let i = 0; i < personen.length; i++) {
				chai.assert.exists(personen[i], "Das Array personen ist an Stelle " + i + "leer!");
				let p = personen[i];
				chai.assert.isTrue(p instanceof Person_Zufallsname_Zufallsalter, "An Stelle " + i + "steht im Array personen kein Objekt vom Typ Person!");
			}
		});
		
		//4. Schritt: Aufräumen
	});
	
	
	describe('testArrayFuellen_Laenge5', function() {
		seed = 1; /*Zufallsgenerator zurücksetzen */
		let x = 5;
		//1. Schritt: Vorbeingung: Array anlegen
		let personen = arrayAnlegen();
		
		//2. Schritt: zu testende Funktion aufrufen
		arrayFuellen(personen, x);
		

		//3. Schritt: Ergebnisse prüfen
		it('Array sollte existieren', function() {
			chai.assert.exists(personen, "Das Array personen wurde nicht initialisiert!");
			chai.assert.equal(x, personen.length,  "Das Array personen hat nicht die Länge " + x + "!");
			for(let i = 0; i < personen.length; i++) {
				chai.assert.exists(personen[i], "Das Array personen ist an Stelle " + i + "leer!");
				let p = personen[i];
				chai.assert.isTrue(p instanceof Person_Zufallsname_Zufallsalter, "An Stelle " + i + "steht im Array personen kein Objekt vom Typ Person!");
			}
		});
		
		//4. Schritt: Aufräumen
	});
});