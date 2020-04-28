describe('Klasse Archiv', function () {

	describe('Implementierung', function () {
		it('images', function () {
			let archiv = new Archiv();
			chai.assert.exists(archiv.images, "Es wurde kein BilderArray 'this.images' erstellt!");
			chai.assert.isArray(archiv.images, "'this.images' ist kein Array!");
			chai.assert.exists(archiv.index, "'this.index' existiert nicht!");
			chai.assert.equal(archiv.index, 0, "'this.index' ist nicht mit 0 initiiert!");
		});
		it('index', function () {
			let archiv = new Archiv();
			chai.assert.exists(archiv.index, "'this.index' existiert nicht!");
			chai.assert.equal(archiv.index, 0, "'this.index' ist nicht mit 0 initiiert!");
		});
		it('constructor', function () {
			let archiv = new Archiv();
			chai.assert.exists(archiv.constructor, "der constructor existiert nicht!");
		});
		it('naechstesBild()', function () {
			let archiv = new Archiv();
			for (let i = 1; i < archiv.images.length; i++) {
				let obj = archiv.naechstesBild();
				chai.assert.deepEqual(obj, archiv.images[i], "indexErhoehen() erhöht 'this.index' nicht mit jedem aufruf!");
				chai.assert.isObject(obj, "naechstesBild liefert kein Objekt zurück!");
			}
			chai.assert.exists(archiv.naechstesBild, "naechstesBild existiert nicht!");
			chai.assert.isFunction(archiv.naechstesBild, "naechstesBild ist keine Funktion!");
			archiv.naechstesBild();
			chai.assert.equal(archiv.index, 0, "naechstesBild() erhöht 'this.index' nicht mit jedem aufruf!");
		});
		it('indexErhoehen()', function () {
			let archiv = new Archiv();
			chai.assert.exists(archiv.indexErhoehen, "indexErhoehen() existiert nicht!");
			chai.assert.isFunction(archiv.indexErhoehen, "indexErhoehen() ist keine Funktion!");
			for (let i = 0; i < archiv.images.length; i++) {
				chai.assert.equal(archiv.index, i, "indexErhoehen() erhöht 'this.index' nicht mit jedem aufruf um 1!");
				archiv.indexErhoehen();
			}
			chai.assert.equal(archiv.index, 0, "indexErhoehen() wird bei erreichen der Länge des Bildarrays nicht zurückgesetzt!");
		});
	});
});