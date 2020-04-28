describe('Spiel implementieren', function () {

	describe('Implementierung', function () {
		it('variable', function () {			
			chai.assert.exists(game, "Variable 'game' fehlt!");
			chai.assert.isObject(game, "'game' Ist kein Objekt");			
		});
		it('Methoden', function () {
			chai.assert.exists(start, "Funktion move() fehlt!");
			chai.assert.isFunction(start, "move ist keine Funktion!");
			chai.assert.exists(stop, "Funktion change() fehlt!");
			chai.assert.isFunction(stop, "change ist keine Funktion!");
		});
	});
});