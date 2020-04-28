describe('Eigene Punkte erzeugen und die Punktemenge analysieren', function () {
	it('punktHinzufuegen', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.punktHinzufuegen, "Die Funktion 'punktHinzufuegen' ist nicht vorhanden!");
		chai.assert.isFunction(pm.punktHinzufuegen, "'this.punktHinzufuegen' ist keine Funktion!");
		pm.punktHinzufuegen(1,2);
		chai.assert.lengthOf(pm.punkteArray, 1, "Es wird nicht genau 1 Punktelement zum PunkteArray hinzugefügt!")
		chai.assert.equal(pm.punkteArray[0].x, 1, "Der übergebene x-Wert wird nicht richtig gespeichert!")
		chai.assert.equal(pm.punkteArray[0].y, 2, "Der übergebene y-Wert wird nicht richtig gespeichert!")
	});
	it('aktuelleAnzahl', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.aktuelleAnzahl, "Die Funktion 'aktuelleAnzahl' ist nicht vorhanden!");
		chai.assert.isFunction(pm.aktuelleAnzahl, "'this.aktuelleAnzahl' ist keine Funktion!");
		pm.punktHinzufuegen(1,2);
		chai.assert.equal(pm.punkteArray.length, pm.aktuelleAnzahl(), "aktuelleAnzahl entspricht nicht der Länge des punkteArrays!")
	});
	it('entfernungBerechnen', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.entfernungBerechnen, "Die Funktion 'entfernungBerechnen' ist nicht vorhanden!");
		chai.assert.isFunction(pm.entfernungBerechnen, "'this.entfernungBerechnen' ist keine Funktion!");
		pm.punktHinzufuegen(1,2);
		pm.punktHinzufuegen(1,-2);
		chai.assert.isNumber(pm.entfernungBerechnen(pm.punkteArray[0], pm.punkteArray[1]), "'entfernungBerechnen' gibt kein Element vom Typ Number zurück!");
		chai.assert.equal(pm.entfernungBerechnen(pm.punkteArray[0], pm.punkteArray[1]), 4, "'entfernungBerechnen' gibt falsche Werte zurück!");
	});
	it('maximaleEntfernungBerechnen', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.maximaleEntfernungBerechnen, "Die Funktion 'maximaleEntfernungBerechnen' ist nicht vorhanden!");
		chai.assert.isFunction(pm.maximaleEntfernungBerechnen, "'maximaleEntfernungBerechnen' ist keine Funktion!");
		pm.punktHinzufuegen(1,2);
		chai.assert.equal(pm.maximaleEntfernungBerechnen(), 0, "Bei weniger als zwei Punkten im Array wird nicht 0 zurückgegeben");
		chai.assert.isNumber(pm.maximaleEntfernungBerechnen(), "Bei weniger als zwei Punkten im Array wird kein Element vom Typ Number zurückgegeben");
		pm.punktHinzufuegen(1,3);
		chai.assert.equal(pm.maximaleEntfernungBerechnen(), 1, "Die maximale Entfernung im Array mit den Punkten (1, 2) und (1, 3) ist nicht " + pm.maximaleEntfernungBerechnen() + " sondern 1.");
		chai.assert.isNumber(pm.maximaleEntfernungBerechnen(), "Bei genau zwei Punkten im Array wird kein Element vom Typ Number zurückgegeben");
		pm.punktHinzufuegen(1,-2);
		chai.assert.equal(pm.maximaleEntfernungBerechnen(), 5, "Die maximale Entfernung im Array ist 5, zwischen den Punkten (1,3) und (1,-2). Nicht " + pm.maximaleEntfernungBerechnen() + " !");
		chai.assert.isNumber(pm.maximaleEntfernungBerechnen(), "Es wird wird kein Element vom Typ Number zurückgegeben");
	});
	it('maximalEntferntePunkteBestimmen', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.maximalEntferntePunkteBestimmen, "Die Funktion 'maximalEntferntePunkteBestimmen' ist nicht vorhanden!");
		chai.assert.isFunction(pm.maximalEntferntePunkteBestimmen, "'maximalEntferntePunkteBestimmen' ist keine Funktion!");
		pm.punktHinzufuegen(1,2);
		chai.assert.equal(pm.maximalEntferntePunkteBestimmen(), null, "Bei weniger als zwei Punkten im Array wird nicht null zurückgegeben");
		pm.punktHinzufuegen(1,3);
		pm.punktHinzufuegen(1,-2);
		chai.assert.isArray(pm.maximalEntferntePunkteBestimmen(), "maximalEntferntePunkteBestimmen gibt kein Array zurück!");
		chai.assert.include(pm.maximalEntferntePunkteBestimmen(), pm.punkteArray[1], "maximalEntferntePunkteBestimmen gibt nicht die am weitesten voneinander entfernten Punkte zurück!");
		chai.assert.include(pm.maximalEntferntePunkteBestimmen(), pm.punkteArray[2], "maximalEntferntePunkteBestimmen gibt nicht die am weitesten voneinander entfernten Punkte zurück!");
	});
});
