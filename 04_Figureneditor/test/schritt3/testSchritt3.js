describe("Rechteck Funktion testen", function() {

    describe("Funktion flaeche() testen", function() {
        let b1 = 4;
        let h1 = 4;
        let r1 = new Rechteck(2, 2, b1, h1);
        
        let b2 = 5;
        let h2 = 40;
        let r2 = new Rechteck(2, 2, b2, h2);

        let b3 = 0;
        let h3 = 2;
        let r3 = new Rechteck(2, 2, b3, h3);

        let b4 = 0;
        let h4 = 2;
        let r4 = new Rechteck(2, 2, b4, h4);

        let f1 = r1.flaeche();
        let f2 = r2.flaeche();
        let f3 = r3.flaeche();
        let f4 = r4.flaeche();

        it("Fläche sollte korrekt berechnet werden", function() {
            chai.assert.equal(b1 * h1, f1, "Die berechnete Fläche ist nicht korrekt!");
            chai.assert.equal(b2 * h2, f2, "Die berechnete Fläche ist nicht korrekt!");
            chai.assert.equal(b3 * h3, f3, "Die berechnete Fläche ist nicht korrekt!");
            chai.assert.equal(b4 * h4, f4, "Die berechnete Fläche ist nicht korrekt!");
        });
    });
});