describe('Objekte - Warenkorb', function () {

	describe('Funktionen', function () {
		let bt1 = new Buch("Max Frisch", "Andorra", 200, 9.99);
		let bt2 = new Buch("Max Frisch", "Jomo Faber", 300, 12.99);
		let bt3 = new Buch("Max Frisch", "Stiller", 500, 19.99);
		let wk = [bt1, bt2, bt3];
		it('gesamtPreis', function () {
			chai.assert.exists(gesamtPreis, "Funktion 'gesamtPreis()' fehlt!");
			chai.assert.isFunction(gesamtPreis, "'gesamtPreis' ist keine Funktion!");			
			chai.assert.equal(gesamtPreis(wk), 42.97, "Preis wird nicht korrekt berechnet!");
		});
		it('guenstigstesBuch', function () {
			chai.assert.exists(guenstigstesBuch, "Funktion 'guenstigstesBuch()' fehlt!");
			chai.assert.isFunction(guenstigstesBuch, "'guenstigstesBuch' ist keine Funktion!");						
			chai.assert.isObject(guenstigstesBuch(wk), "Die Funktion guenstigstesBuch gibt kein Objekt zurück!");
			chai.assert.deepEqual(guenstigstesBuch(wk), bt1, "Es wird nicht das günstigste Buch ausgegeben!");
		});
		it('dickstesBuch', function () {
			chai.assert.exists(dickstesBuch, "Funktion 'dickstesBuch()' fehlt!");
			chai.assert.isFunction(dickstesBuch, "'dickstesBuch' ist keine Funktion!");			
			chai.assert.isObject(dickstesBuch(wk), "Die Funktion dickstesBuch gibt kein Objekt zurück!");
			chai.assert.deepEqual(dickstesBuch(wk), bt3, "Es wird nicht das dickste Buch ausgegeben!!");

		});
	});
});