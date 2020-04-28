describe("Kürzen und Erweitern von Brüchen", () => {

    describe("Kleinstes gemeinsames Vielfaches finden", () => {
        it("Das kleinste gemeinsame Vielfache sollte korrekt berechnet werden", function() {
            let x = 5;
            let y = 3;

            let z = 15;

            let k = kgv(x, y);

            chai.assert.equal(z, k, "Das ERgebnis von kgv(" + x + ", " + y + ") ist nicht " + z);
        });

        it("Das kleinste gemeinsame Vielfache sollte korrekt berechnet werden", function() {
            let x = 6;
            let y = 3;

            let z = 6;

            let k = kgv(x, y);

            chai.assert.equal(z, k, "Das ERgebnis von kgv(" + x + ", " + y + ") ist nicht " + z);
        });

        it("Das kleinste gemeinsame Vielfache sollte korrekt berechnet werden", function() {
            let x = 8;
            let y = 6;

            let z = 24;

            let k = kgv(x, y);

            chai.assert.equal(z, k, "Das ERgebnis von kgv(" + x + ", " + y + ") ist nicht " + z);
        });

    });

    describe("Größten gemeinsament Teiler finden", function() {
        
        it("Der größte Gemeinsame Teiler sollte korrekt berechnet werden", function() {
            let x = 5;
            let y = 3;

            let z = 1;

            let k = ggt(x, y);

            chai.assert.equal(z, k, "Das Ergebnis von ggt(" + x + "," + y + ") ist nicht " + z);
        });
        
        it("Der größte Gemeinsame Teiler sollte korrekt berechnet werden", function() {
            let x = 15;
            let y = 6;

            let z = 3;

            let k = ggt(x, y);

            chai.assert.equal(z, k, "Das Ergebnis von ggt(" + x + "," + y + ") ist nicht " + z);
        });
        
        it("Der größte Gemeinsame Teiler sollte korrekt berechnet werden", function() {
            let x = 8;
            let y = 4;

            let z = 4;

            let k = ggt(x, y);

            chai.assert.equal(z, k, "Das Ergebnis von ggt(" + x + "," + y + ") ist nicht " + z);
        });
    });
});
