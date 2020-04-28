describe("Addieren und Multiplizieren von Brüchen", function() {
    
    /**
     * Test, ob die Addition zweier positiver Brüche korrekt ist
     */
    describe("Zwei Positive Brüche addieren", function() {
        let bruch1 = new Bruch(2, 5);
        let bruch2 = new Bruch(3, 5);
        let bruch3 = new Bruch(5, 5);
        bruch1.addieren(bruch2);
        
        it("Brüche mit positivem Zähler und gleichem Nenner sollen addiert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Addition ist nicht " + bruch3.ausgabe() + "!");
        });
        
    });
    
    /**
     * Test, ob die Addition mit einem positiven und einem negativen Bruch korrekt ist
     */
    describe("Addition von einem positiven mit einem negativen Bruch", function() {
        let bruch1 = new Bruch(-2, 5);
        let bruch2 = new Bruch(3, 5);
        let bruch3 = new Bruch(1, 5);
        bruch1.addieren(bruch2);
        
        it("ein negativer und ein positiver Bruch sollen addiert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Addition ist nicht " + bruch3.ausgabe() + "!");
        });
    });
  
    /**
     * Test, ob die Addition mit zwei negativen Brüchen korrekt ist
     */
    describe("Zwei negative Brüche addieren", function() {
        let bruch1 = new Bruch(-2, 5);
        let bruch2 = new Bruch(-3, 5);
        let bruch3 = new Bruch(-5, 5);
        bruch1.addieren(bruch2);
        
        it("Zwei Brüche mit negativen Zähler sollen addiert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Addition ist nicht " + bruch3.ausgabe() + "!");
        });
    });
    
    /**
     * Test, ob die Addition bei unterschiedlichen Nenner nicht ausgeführt wird
     */
    describe("Brüche mit unterschiedlichem Nenner addieren", function() {
        let bruch1 = new Bruch(2, 3);
        let bruch2 = new Bruch(3, 5);
        let bruch3 = new Bruch(2, 3);
        bruch1.addieren(bruch2);
        
        it("Brüche mit unterschiedlichen Nennern sollen nicht addiert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Addition ist nicht " + bruch3.ausgabe() + "!");
        });
    });

    /**
     * Test, ob die Addition bei negativen Brüchen mit unterschiedlichen Nenner nicht ausgeführt wird
     */
    describe("Negative Brüche mit unterschiedlichen Nennern addieren", function() {
        let bruch1 = new Bruch(-2, 3);
        let bruch2 = new Bruch(3, 5);
        let bruch3 = new Bruch(-2, 3);
        bruch1.addieren(bruch2);
        
        it("Brüche mit unterschiedlichen Nennern sollen nicht addiert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Addition ist nicht " + bruch3.ausgabe() + "!");
        });
    });

    /**
     * Test, ob das Multiplizieren zweier positiver Brüche korrekt funktioniert
     */
    describe("Zwei positive Brüche multiplizieren", function() {
        let bruch1 = new Bruch(2, 5);
        let bruch2 = new Bruch(1, 2);
        let bruch3 = new Bruch(2, 10);
        bruch1.multiplizieren(bruch2);

        it("Zwei positive Brüche sollen multipliziert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Multiplikation ist nicht " + bruch3.ausgabe() + "!");
        });
    });

    /**
     * Test, ob das Multiplizieren eines positiven und eines negativen Bruchs korrekt funktioniert
     */
    describe("Einen positiven und einen negativen Bruch multiplizieren", function() {
        let bruch1 = new Bruch(2, 5);
        let bruch2 = new Bruch(-1, 2);
        let bruch3 = new Bruch(-2, 10);
        bruch1.multiplizieren(bruch2);

        it("Ein positiver und ein negativer Bruch sollen multipliziert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Multiplikation ist nicht " + bruch3.ausgabe() + "!");
        });
    });

    /**
     * Test, ob das Multiplizieren zweier negativen Brüche korrekt funktioniert
     */
    describe("Zwei negative Brüche multiplizieren", function() {
        let bruch1 = new Bruch(-3, 4);
        let bruch2 = new Bruch(-2, 1);
        let bruch3 = new Bruch(6, 4);
        bruch1.multiplizieren(bruch2);

        it("Zwei negative Brüche sollen multipliziert werden", function() {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis der Multiplikation ist nicht " + bruch3.ausgabe() + "!");
        });
    });
});
// });

