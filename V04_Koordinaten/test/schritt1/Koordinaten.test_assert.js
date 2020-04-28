describe('Klassendefinition - Koordinaten', function () {

	describe('Klasse Punkt', function () {
		it('Klasse Punkt existiert', function () {
			let p = new Punkt();
			chai.assert.exists(p, "Klasse Punkt existiert nicht!");
		});

		it('Attribute', function () {
			let p = new Punkt();
			chai.assert.exists(p.x, "attribut 'x' existiert nicht oder wurde nicht initialisiert!");
			chai.assert.typeOf(p.x, "number", "Das Attribut 'x' ist keine Zahl.");
			p.x = 1;
			chai.assert.equal(p.x, 1, "Attribut 'x' lässt sich nicht überschreiben.");
			chai.assert.exists(p.y, "attribut 'y' existiert nicht oder wurde nicht initialisiert!");
			chai.assert.typeOf(p.y, "number", "Das Attribut 'y' ist keine Zahl.");
			p.y = 1;
			chai.assert.equal(p.y, 1, "Attribut 'y' lässt sich nicht überschreiben.");
		});

		it('(optional) Constructor mit Parametern', function () {
			let p1 = new Punkt(1, 2);
			chai.assert.equal(p1.x, 1, "Beim Aufruf übergebener Parameter für das Attribut 'x' wird nicht im Attribut 'x' gespeichert.");
			chai.assert.equal(p1.y, 2, "Beim Aufruf übergebener Parameter für das Attribut 'y' wird nicht im Attribut 'y' gespeichert.");
		});
		describe('Methoden', function () {

			it('quadrant()', function () {
				let p1 = new Punkt(24, 18);
				let p2 = new Punkt(-16, 12);
				let p3 = new Punkt(-3, -4);
				let p4 = new Punkt(8, -6);
				chai.assert.exists(p1.quadrant, "Funktion quadrant existiert nicht!");
				chai.assert.isFunction(p1.quadrant, "quadrant ist keine Funktion!");
				chai.assert.equal(p1.quadrant(), 1, "quadrant() sollte bei Punkten im 1. Quadrant '1' zurückgeben, nicht " + p1.quadrant() + "!");
				chai.assert.isNumber(p1.quadrant(), "quadrant() sollte ein Wert vom Typ 'number' zurückgeben, nicht vom Typ " + typeof p1.quadrant() + "!");
				
				chai.assert.equal(p2.quadrant(), 2, "quadrant() sollte bei Punkten im 2. Quadrant '2' zurückgeben, nicht " + p2.quadrant() + "!");
				chai.assert.isNumber(p2.quadrant(), "quadrant() sollte ein Wert vom Typ 'number' zurückgeben, nicht vom Typ " + typeof p2.quadrant() + "!");
				
				chai.assert.equal(p3.quadrant(), 3, "quadrant() sollte bei Punkten im 3. Quadrant '3' zurückgeben, nicht " + p3.quadrant() + "!");
				chai.assert.isNumber(p3.quadrant(), "quadrant() sollte ein Wert vom Typ 'number' zurückgeben, nicht vom Typ " + typeof p3.quadrant() + "!");
				
				chai.assert.equal(p4.quadrant(), 4, "quadrant() sollte bei Punkten im 4. Quadrant '4' zurückgeben, nicht " + p4.quadrant() + "!");
				chai.assert.isNumber(p4.quadrant(), "quadrant() sollte ein Wert vom Typ 'number' zurückgeben, nicht vom Typ " + typeof p4.quadrant() + "!");
			});
			it('entfernungVomUrsprung()', function () {
				let p1 = new Punkt(24, 18);
				let p2 = new Punkt(-16, 12);
				let p3 = new Punkt(-3, -4);
				let p4 = new Punkt(8, -6);
				chai.assert.exists(p1.entfernungVomUrsprung, "Funktion entfernungVomUrsprung existiert nicht!");
				chai.assert.isFunction(p1.entfernungVomUrsprung, "entfernungVomUrsprung ist keine Funktion!");
				chai.assert.isNumber(p1.entfernungVomUrsprung(), "entfernungVomUrsprung() sollte ein Wert vom Typ 'number' zurückgeben, nicht vom Typ " + typeof p1.entfernungVomUrsprung() + "!");
				chai.assert.equal(p1.entfernungVomUrsprung(), 30, "entfernungVomUrsprung() rechnet falsch. Der Abstand des Punktes (24/18) beträgt 30, nicht " + p1.entfernungVomUrsprung() + "!");
				chai.assert.equal(p2.entfernungVomUrsprung(), 20, "entfernungVomUrsprung() rechnet falsch. Der Abstand des Punktes (-16, 12) beträgt 20, nicht " + p2.entfernungVomUrsprung() + "!");
				chai.assert.equal(p3.entfernungVomUrsprung(), 5, "entfernungVomUrsprung() rechnet falsch. Der Abstand des Punktes (-3, -4) beträgt 5, nicht " + p3.entfernungVomUrsprung() + "!");
				chai.assert.equal(p4.entfernungVomUrsprung(), 10, "entfernungVomUrsprung() rechnet falsch. Der Abstand des Punktes (8, -6) beträgt 10, nicht " + p4.entfernungVomUrsprung() + "!");
			});
		});
	});
});