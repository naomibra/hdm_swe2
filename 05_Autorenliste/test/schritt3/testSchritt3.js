let assert = chai.assert;

describe("Methoden Test", function() {

    describe("toString", function() {
        it("für Autor('Max', 'Frisch', 1911, 1991) sollte korrekt zurückgegeben werden", function() {
            let autor = new Autor("Max", "Frisch", 1911, 1991);
            let res = autor.toString();

            assert.isFalse(res.includes("*"), "* kommt in der Ausgabe vor!");
            assert.isTrue(res.includes("Max"), "Vorname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("Frisch"), "Nachname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("1911"), "Geburtsjahr wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("1991"), "Sterbejahr wird nicht korrekt ausgegeben!");
        });
        
        it("für Autor() sollte korrekt zurückgegeben werden", function() {
            let autor = new Autor();
            let res = autor.toString();
            
            assert.isTrue(res.includes("*"), "* kommt in der Ausgabe nicht vor!");
            assert.isTrue(res.indexOf("*") != res.lastIndexOf("*"), "* kommt in der Ausgabe nur einmal vor!");
            assert.isFalse(res.includes("null"), "Vorname oder Nachname werden nicht korrekt ausgegeben!");
        });
        
        it("für Autor('Max') sollte korrekt zurückgegeben werden", function() {
            let autor = new Autor("Max");
            let res = autor.toString();
            
            assert.isTrue(res.includes("Max"), "Vorname wird nicht korrekt ausgegeben!");
            assert.isFalse(res.includes("null"), "Nachname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("*"), "* kommt in der Ausgabe nicht vor!");
            assert.isTrue(res.indexOf("*") != res.lastIndexOf("*"), "* kommt in der Ausgabe nur einmal vor!");
        });
        
        it("für Autor('Max', 'Frisch') sollte korrekt zurückgegeben werden", function() {
            let autor = new Autor("Max", "Frisch");
            let res = autor.toString();
            
            assert.isTrue(res.includes("Max"), "Vorname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("Frisch"), "Nachname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("*"), "* kommt in der Ausgabe nicht vor!");
            assert.isTrue(res.indexOf("*") != res.lastIndexOf("*"), "* kommt in der Ausgabe nur einmal vor!");
        });

        it("für Autor(null, 'Frisch') sollte korrekt zurückgegeben werden", function() {
            let autor = new Autor(null, "Frisch");
            let res = autor.toString();
            console.log(res);
            
            assert.isFalse(res.includes("null"), "Vorname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("Frisch"), "Nachname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("*"), "* kommt in der Ausgabe nicht vor!");
            assert.isTrue(res.indexOf("*") != res.lastIndexOf("*"), "* kommt in der Ausgabe nur einmal vor!");
        });

        it("für Autor('Max', 'Frisch', 1911) sollte korrekt zurückgegeben werden", function() {
            let autor = new Autor("Max", "Frisch", 1911);
            let res = autor.toString();
            console.log(res);
            
            assert.isTrue(res.includes("Max"), "Vorname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("Frisch"), "Nachname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("1911"), "Geburtsjahr wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("*"), "* kommt in der Ausgabe nicht vor!");
            assert.isFalse(res.indexOf("*") != res.lastIndexOf("*"), "* kommt in der Ausgabe mehrmals vor!");
        });

        it("für Autor('Max', 'Frisch', -1, 1991) sollte korrekt zurückgegeben werden", function() {
            let autor = new Autor("Max", "Frisch", -1, 1991);
            let res = autor.toString();
            console.log(res);
            
            assert.isTrue(res.includes("Max"), "Vorname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("Frisch"), "Nachname wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("1991"), "Sterbejahr wird nicht korrekt ausgegeben!");
            assert.isTrue(res.includes("*"), "* kommt in der Ausgabe nicht vor!");
            assert.isFalse(res.indexOf("*") != res.lastIndexOf("*"), "* kommt in der Ausgabe mehrmals vor!");
        });
    });
});