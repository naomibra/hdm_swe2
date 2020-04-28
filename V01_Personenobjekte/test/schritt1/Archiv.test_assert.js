describe('Ältere Person bestimmen', function () {
	it('aelterePerson - erste Person ist älter', function () {
		let personA = new Person();
		personA.alter = 45;
		let personB = new Person();
		personB.alter = 17;

		chai.assert.exists(aelterePerson, "aelterePerson ist nicht vorhanden!");
		chai.assert.isFunction(aelterePerson, "aelterePerson ist keine Funktion!");

		let ergebnis = aelterePerson(personA, personB);

		chai.assert.equal(ergebnis, personA, "aelterePerson liefert nicht die ältere der beiden Personen " 
			+ personA.toString() + ", "  + personB.toString() + " zurück.");
	});

	it('aelterePerson - zweite Person ist älter', function () {
		let personA = new Person();
		personA.alter = 23;
		let personB = new Person();
		personB.alter = 30;

		chai.assert.exists(aelterePerson, "aelterePerson ist nicht vorhanden!");
		chai.assert.isFunction(aelterePerson, "aelterePerson ist keine Funktion!");

		let ergebnis = aelterePerson(personA, personB);

		chai.assert.equal(ergebnis, personB, "aelterePerson liefert nicht die ältere der beiden Personen " 
			+ personA.toString() + ", "  + personB.toString() + " zurück.");
	});

	it('aelterePerson - Personen sind gleich alt', function () {
		let personA = new Person();
		personA.alter = 27;
		let personB = new Person();
		personB.alter = 27;

		chai.assert.exists(aelterePerson, "aelterePerson ist nicht vorhanden!");
		chai.assert.isFunction(aelterePerson, "aelterePerson ist keine Funktion!");

		let ergebnis = aelterePerson(personA, personB);

		chai.assert.equal(ergebnis, personB, "aelterePerson liefert nicht die zweite der beiden Personen " 
			+ personA.toString() + ", "  + personB.toString() + " zurück.");
	});
});