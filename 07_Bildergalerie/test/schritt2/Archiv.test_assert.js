describe('bilder.js', function () {

	describe('Implementierung', function () {
		it('bildWechseln()', function () {
			chai.assert.exists(bildWechseln, "bildWechseln existiert nicht!");
			chai.assert.isFunction(bildWechseln, "bildWechseln ist keine Funktion!");
		});
	});
});