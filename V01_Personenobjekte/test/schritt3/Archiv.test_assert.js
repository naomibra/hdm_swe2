describe('Personen vergleichen (3)', function () {
	it('sindGleich', function () {
		let person = new Person();
		person.name = "Name";
		person.alter = 20;
		let person1 = new Person();
		person1.name = "Name2";
		person1.alter = 25;
		chai.assert.exists(sindGleich, "sindGleich ist nicht vorhanden!");
		chai.assert.isFunction(sindGleich, "sindGleich ist keine Funktion!");
		chai.assert.isBoolean(sindGleich(person, person1), "sindGleich liefert kein Boolean zurück!");
		chai.assert.equal(sindGleich(person, person), true, "sindGleich gibt falsches Ergebnis aus!");
		chai.assert.equal(sindGleich(person, person1), false, "sindGleich gibt falsches Ergebnis aus!");
	});
});