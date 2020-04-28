describe('Zufällige Punkte in einem Array speichern', function () {
	it('Klasse PunkteMenge', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.punkteArray, "Das Array für die Punkte ist nicht im Konstruktor deklariert");
		chai.assert.isArray(pm.punkteArray, "'this.punkteArray' ist kein Array!");
	});
	it('zufaelligeZahlErzeugen', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.zufaelligeZahlErzeugen, "Die Funktion 'zufaelligeZahlErzeugen' ist nicht vorhanden!");
		chai.assert.isFunction(pm.zufaelligeZahlErzeugen, "'zufaelligeZahlErzeugen' ist keine Funktion!");
		chai.assert.isNumber(pm.zufaelligeZahlErzeugen(), "'zufaelligeZahlErzeugen' liefert keine Zahl zurück!");
		for (let i = 0; i < 100; i++) {
			chai.assert.isBelow(pm.zufaelligeZahlErzeugen(), 20, "'zufaelligeZahlErzeugen' Kann Zahlen über 20 zurückgeben!");
			chai.assert.isAbove(pm.zufaelligeZahlErzeugen(), -21, "'zufaelligeZahlErzeugen' Kann Zahlen unter -20 zurückgeben!");
		}
	});
	it('zufaelligePunkteErzeugen', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.zufaelligePunkteErzeugen, "Die Funktion 'zufaelligePunkteErzeugen' ist nicht vorhanden!");
		chai.assert.isFunction(pm.zufaelligePunkteErzeugen, "'zufaelligePunkteErzeugen' ist keine Funktion!");
		pm.zufaelligePunkteErzeugen();
		chai.assert.lengthOf(pm.punkteArray, 20, "'zufaelligePunkteErzeugen' erzeugt nicht genau 20 Punkte!");
	});
	it('allePunkteAusgeben', function () {
		let pm = new PunkteMenge();
		chai.assert.exists(pm.allePunkteAusgeben, "Die Funktion 'allePunkteAusgeben' ist nicht vorhanden!");
		chai.assert.isFunction(pm.allePunkteAusgeben, "'allePunkteAusgeben' ist keine Funktion!");
	});
});
