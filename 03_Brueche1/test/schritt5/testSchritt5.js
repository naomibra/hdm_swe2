describe("Addiren und Multiplizieren", function() {

    describe("Addieren", function() {
        
        it("Addieren zweier positiver Brüche mit gleichem Nenner soll korrekt funktioniert", function() {
            let p1 = new Bruch(2, 5);
            let p2 = new Bruch(3, 5);

            let p3 = new Bruch(1, 1);

            p1.addieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });

        it("Addieren zweier positiver Brüche mit gleichem Nenner soll korrekt funktioniert", function() {
            let p1 = new Bruch(2, 5);
            let p2 = new Bruch(3, 5);

            let p3 = new Bruch(1, 1);

            p1.addieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });

        it("Addieren zweier positiver Brüche mit unterschiedlichen Nenner soll korrekt ausgeführt werden", function() {
            let p1 = new Bruch(2, 5);
            let p2 = new Bruch(3, 4);

            let p3 = new Bruch(23, 20);

            p1.addieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });

        it("Addieren zweier positiver Brüche mit unterschiedlichen Nenner soll korrekt ausgeführt werden", function() {
            let p1 = new Bruch(2, 5);
            let p2 = new Bruch(3, 2);

            let p3 = new Bruch(19, 10);

            p1.addieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });

        it("Addieren zweier positiver Brüche mit unterschiedlichen Nenner soll korrekt ausgeführt werden", function() {
            let p1 = new Bruch(2, 4);
            let p2 = new Bruch(3, 2);

            let p3 = new Bruch(2, 1);

            p1.addieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });
    });
    
    describe("Multiplizieren", function() {
        
        it("Multiplizieren zweier positiver Brüche mit gleichem Nenner soll korrekt ausgeführt werden", function() {
            let p1 = new Bruch(2, 5);
            let p2 = new Bruch(3, 5);

            let p3 = new Bruch(6, 25);

            p1.multiplizieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });
        
        it("Multiplizieren zweier positiver Brüche mit gleichem Nenner soll korrekt ausgeführt werden", function() {
            let p1 = new Bruch(2, 5);
            let p2 = new Bruch(10, 5);

            let p3 = new Bruch(4, 5);

            p1.multiplizieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });
        
        it("Multiplizieren zweier positiver Brüche mit gleichem Nenner soll korrekt ausgeführt werden", function() {
            let p1 = new Bruch(2, 4);
            let p2 = new Bruch(3, 2);

            let p3 = new Bruch(3, 4);

            p1.multiplizieren(p2);
            
            chai.assert.equal(p3.ausgabe(), p1.ausgabe(), "Das Ergebnis der Addition ist nicht " + p3.ausgabe());
        });

    });
});
