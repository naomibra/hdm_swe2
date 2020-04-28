describe('Klasse Punkt', function () {
	it('Attribute', function () {
		let p = new Punkt();
		p.x = 1;
		p.y = 2;
		chai.assert.exists(p.x, "Attribut 'x' ist nicht vorhanden!");
		chai.assert.exists(p.y, "Attribut 'y' ist nicht vorhanden!");
		chai.assert.equal(p.x, 1, "Attribut 'x' lässt sich nicht überschreiben!");
		chai.assert.equal(p.y, 2, "Attribut 'y' lässt sich nicht überschreiben!");
	});
	it('constructor mit Standardwerten', function () {
		let p = new Punkt();
		chai.assert.exists(p.x, "Attribut 'x' ist nicht vorhanden!");
		chai.assert.exists(p.y, "Attribut 'y' ist nicht vorhanden!");
		chai.assert.equal(p.x, 0, "Attribut 'x' ist nicht vorhanden!");
		chai.assert.equal(p.y, 0, "Attribut 'y' ist nicht vorhanden!");
	});
	it('toString', function () {
		let p = new Punkt();
		p.x = 1;
		p.y = 2;
		chai.assert.exists(p.toString, "Die Funktion 'toString' ist nicht vorhanden!");
		chai.assert.isFunction(p.toString, "'toString' ist keine Funktion!");
		chai.assert.isString(p.toString(), "toString gibt keinen String zurück!");
		chai.assert.equal(p.toString(), "(1, 2)", "toString gibt die Koordinaten nicht in der richtigen schreibweise zurück!");
	});
});
