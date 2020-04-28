describe('Jüngere Person bestimmen', function () {
	it('juengerePerson - erste Person ist jünger', function () {
		let personA = new Person();
		personA.alter = 17;
		let personB = new Person();
		personB.alter = 45;

		chai.assert.exists(juengerePerson, "juengerePerson ist nicht vorhanden!");
		chai.assert.isFunction(juengerePerson, "juengerePerson ist keine Funktion!");

		let ergebnis = juengerePerson(personA, personB);

		chai.assert.equal(ergebnis, personA, "juengerePerson liefert nicht die jüngere der beiden Personen "
			+ personA.toString() + ", " + personB.toString() + " zurück.");
	});

	it('juengerePerson - zweite Person ist jünger', function () {
		let personA = new Person();
		personA.alter = 30;
		let personB = new Person();
		personB.alter = 23;

		chai.assert.exists(juengerePerson, "juengerePerson ist nicht vorhanden!");
		chai.assert.isFunction(juengerePerson, "juengerePerson ist keine Funktion!");

		let ergebnis = juengerePerson(personA, personB);

		chai.assert.equal(ergebnis, personB, "juengerePerson liefert nicht die jüngere der beiden Personen "
			+ personA.toString() + ", " + personB.toString() + " zurück.");
	});

	it('juengerePerson - Personen sind gleich alt', function () {
		let personA = new Person();
		personA.alter = 27;
		personA.name = "nameA"
		let personB = new Person();
		personB.name = "nameB"
		personB.alter = 27;

		chai.assert.exists(juengerePerson, "juengerePerson ist nicht vorhanden!");
		chai.assert.isFunction(juengerePerson, "juengerePerson ist keine Funktion!");

		let ergebnis = juengerePerson(personA, personB);

		chai.assert.deepEqual(ergebnis, personB, "juengerePerson liefert nicht die zweite der beiden Personen "
			+ personA.toString() + ", " + personB.toString() + " zurück.");
	});
});