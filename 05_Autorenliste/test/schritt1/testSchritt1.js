describe("Klasse Name", function() {

    describe("Name erstellen", function() {
        let name1 = new Name("Max", "Frisch");
        let name2 = new Name("Max");
        let name3 = new Name();
        
        it("Name mit 2 Parametern soll angelegt werden", function() {
            chai.assert.equal("Max", name1.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal("Frisch", name1.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
        });

        it("Name mit 1 Parameter soll angelegt werden", function() {
            chai.assert.equal("Max", name2.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal(null, name2.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
        });

        it("Name ohne Parameter soll angelegt werden", function() {
            chai.assert.equal(null, name3.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal(null, name3.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
        });
    });

    describe("Namen vergleichen", function() {
        let name1 = new Name("Max", "Frisch");
        let name2 = new Name("Max");
        let name4 = new Name ("Moritz", "Frisch");

        it("Identische Namen vergleichen", function() {
            chai.assert.isTrue(name1.equals(name1), "Nicht als gleich erkannt: " + name1.toString() + " und " + name1.toString());
        });

        it("Unterschiedliche Nachnamen vergleichen", function() {
            chai.assert.isFalse(name1.equals(name2), "Fälschlicherweise als gleich erkannt: " + name1.toString() + " und " + name2.toString());
        });

        it("Unterschiedliche Vornamen vergleichen", function() {
            chai.assert.isFalse(name1.equals(name4), "Fälschlicherweise als gleich erkannt: " + name1.toString() + " und " + name4.toString());
        });
    });
});