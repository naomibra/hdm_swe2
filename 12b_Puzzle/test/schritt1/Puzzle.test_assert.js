describe('Das Spiel vorbereiten: Klasse Game', function () {

	describe('Implementierung', function () {
		it('constructor / Setter', function () {
			let game = new Game();
			game.startRow = -1;
			game.startColumn = -1;
			game.endRow = -1;
			game.endColumn = -1;
			game.startElement = -1;
			game.endElement = -1;
			chai.assert.exists(game._startRow, "Private Attribut 'this._startRow' fehlt!");
			chai.assert.exists(game._startColumn, "Private Attribut 'this._startColumn' fehlt!");
			chai.assert.exists(game._endRow, "Private Attribut 'this._endRow' fehlt!");
			chai.assert.exists(game._endColumn, "Private Attribut 'this._endColumn' fehlt!");
			chai.assert.exists(game._startElement, "Private Attribut 'this._startElement' fehlt!");
			chai.assert.exists(game._endElement, "Private Attribut 'this._endElement' fehlt!");
		});
		it('Methoden', function () {
			let game = new Game();
			chai.assert.exists(game.move, "Funktion move() fehlt!");
			chai.assert.isFunction(game.move, "move ist keine Funktion!");
			chai.assert.exists(game.change, "Funktion change() fehlt!");
			chai.assert.isFunction(game.change, "change ist keine Funktion!");
			chai.assert.exists(game.moveIsAllowed, "Funktion moveIsAllowed() fehlt!");
			chai.assert.isFunction(game.moveIsAllowed, "moveIsAllowed ist keine Funktion!");
			chai.assert.exists(game.endIsEmpty, "Funktion endIsEmpty() fehlt!");
			chai.assert.isFunction(game.endIsEmpty, "endIsEmpty ist keine Funktion!");
			chai.assert.exists(game.correctPosition, "Funktion correctPosition() fehlt!");
			chai.assert.isFunction(game.correctPosition, "correctPosition ist keine Funktion!");
			chai.assert.exists(game.endIsAbove, "Funktion endIsAbove() fehlt!");
			chai.assert.isFunction(game.endIsAbove, "endIsAbove ist keine Funktion!");
			chai.assert.exists(game.endIsBelow, "Funktion endIsBelow() fehlt!");
			chai.assert.isFunction(game.endIsBelow, "endIsBelow ist keine Funktion!");
			chai.assert.exists(game.endIsRight, "Funktion endIsRight() fehlt!");
			chai.assert.isFunction(game.endIsRight, "endIsRight ist keine Funktion!");
			chai.assert.exists(game.endIsLeft, "Funktion endIsLeft() fehlt!");
			chai.assert.isFunction(game.endIsLeft, "endIsLeft ist keine Funktion!");
		});
		describe('Test der Methoden', function () {
			let game = new Game();
			it('returns Boolean', function () {
				game._endElement = "test";
				chai.assert.isBoolean(game.moveIsAllowed(), "moveIsAllowed gibt keinen Boolean zurück!");
				chai.assert.isBoolean(game.endIsEmpty(), "endIsEmpty gibt keinen Boolean zurück!");
				chai.assert.isBoolean(game.correctPosition(), "correctPosition gibt keinen Boolean zurück!");
				chai.assert.isBoolean(game.endIsAbove(), "endIsAbove gibt keinen Boolean zurück!");
				chai.assert.isBoolean(game.endIsBelow(), "endIsBelow gibt keinen Boolean zurück!");
				chai.assert.isBoolean(game.endIsRight(), "endIsRight gibt keinen Boolean zurück!");
				chai.assert.isBoolean(game.endIsLeft(), "endIsLeft gibt keinen Boolean zurück!");
			});

			it('Position des leeren Feldes', function () {

				game._startColumn = 1;
				game._startRow = 1;
				game._endColumn = 1;
				game._endRow = 2;
				chai.assert.equal(game.endIsAbove(), false, "endIsAbove() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsBelow(), true, "endIsBelow() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsLeft(), false, "endIsLeft() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsRight(), false, "endIsRight() gibt falschen Boolean zurück!");
				chai.assert.equal(game.correctPosition(), true, "correctPosition() gibt falschen Boolean zurück!");

				game._startColumn = 1;
				game._startRow = 1;
				game._endColumn = 0;
				game._endRow = 1;
				chai.assert.equal(game.endIsAbove(), false, "endIsAbove() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsBelow(), false, "endIsBelow() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsLeft(), true, "endIsLeft() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsRight(), false, "endIsRight() gibt falschen Boolean zurück!");
				chai.assert.equal(game.correctPosition(), true, "correctPosition() gibt falschen Boolean zurück!");

				game._startColumn = 1;
				game._startRow = 1;
				game._endColumn = 1;
				game._endRow = 0;
				chai.assert.equal(game.endIsAbove(), true, "endIsAbove() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsBelow(), false, "endIsBelow() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsLeft(), false, "endIsLeft() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsRight(), false, "endIsRight() gibt falschen Boolean zurück!");
				chai.assert.equal(game.correctPosition(), true, "correctPosition() gibt falschen Boolean zurück!");

				game._startColumn = 1;
				game._startRow = 1;
				game._endColumn = 2;
				game._endRow = 1;
				chai.assert.equal(game.endIsAbove(), false, "endIsAbove() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsBelow(), false, "endIsBelow() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsLeft(), false, "endIsLeft() gibt falschen Boolean zurück!");
				chai.assert.equal(game.endIsRight(), true, "endIsRight() gibt falschen Boolean zurück!");
				chai.assert.equal(game.correctPosition(), true, "correctPosition() gibt falschen Boolean zurück!");

			});
			it('change Funktion', function () {
				game._startElement = {};
				game._startElement.innerHTML = "start";
				game._endElement = {};
				game._endElement.innerHTML = "end";
				game.change();
				chai.assert.equal(game._startElement.innerHTML, "end", "Tausch der innerHTML Values funktioniert nicht!")
				chai.assert.equal(game._endElement.innerHTML, "start", "Tausch der innerHTML Values funktioniert nicht!")

			});
		});

	});
});