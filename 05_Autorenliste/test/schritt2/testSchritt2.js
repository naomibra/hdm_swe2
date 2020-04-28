describe("Autor erstellen", function() {

    describe("Autor erstellen", function() {
        let autor1 = new Autor("Max", "Frisch", 1911, 1991);
        let autor2 = new Autor();
        let autor3 = new Autor("Max");
        let autor4 = new Autor("Max", "Frisch");
        let autor5 = new Autor(null, "Frisch");
        let autor6 = new Autor("Max", "Frisch", 1911);
        let autor7 = new Autor("Max", "Frisch", -1, 1991);
        
        it("Autor soll vollständig erstellt werden", function() {
            chai.assert.equal("Max", autor1.name.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal("Frisch", autor1.name.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
            chai.assert.equal(1911, autor1.geburtsjahr, "Das Geburtsjahr wurde nicht korrekt gesetzt!");
            chai.assert.equal(1991, autor1.sterbejahr, "Das Sterbejahr wurde nicht korrekt gesetzt!");
        });

        it("Autor soll nur mit Standardwerten erstellt werden", function() {
            chai.assert.equal(null, autor2.name.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal(null, autor2.name.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor2.geburtsjahr, "Das Geburtsjahr wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor2.sterbejahr, "Das Sterbejahr wurde nicht korrekt gesetzt!");
        });

        it("Autor soll nur mit dem Vornamen erstellt werden", function() {
            chai.assert.equal("Max", autor3.name.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal(null, autor3.name.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor3.geburtsjahr, "Das Geburtsjahr wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor3.sterbejahr, "Das Sterbejahr wurde nicht korrekt gesetzt!");
        });

        it("Autor soll nur mit dem Namen erstellt werden", function() {
            chai.assert.equal("Max", autor4.name.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal("Frisch", autor4.name.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor4.geburtsjahr, "Das Geburtsjahr wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor4.sterbejahr, "Das Sterbejahr wurde nicht korrekt gesetzt!");
        });

        it("Autor soll nur mit dem Nachnamen erstellt werden", function() {
            chai.assert.equal(null, autor5.name.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal("Frisch", autor5.name.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor5.geburtsjahr, "Das Geburtsjahr wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor5.sterbejahr, "Das Sterbejahr wurde nicht korrekt gesetzt!");
        });

        it("Autor soll ohne Sterbedatum erstellt werden", function() {
            chai.assert.equal("Max", autor6.name.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal("Frisch", autor6.name.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
            chai.assert.equal(1911, autor6.geburtsjahr, "Das Geburtsjahr wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor6.sterbejahr, "Das Sterbejahr wurde nicht korrekt gesetzt!");
        });

        it("Autor soll ohne Geburtsdatum erstellt werden", function() {
            chai.assert.equal("Max", autor7.name.vorname, "Der Vorname wurde nicht korrekt gesetzt!");
            chai.assert.equal("Frisch", autor7.name.nachname, "Der Nachname wurde nicht korrekt gesetzt!");
            chai.assert.equal(-1, autor7.geburtsjahr, "Das Geburtsjahr wurde nicht korrekt gesetzt!");
            chai.assert.equal(1991, autor7.sterbejahr, "Das Sterbejahr wurde nicht korrekt gesetzt!");
        });
    });
});