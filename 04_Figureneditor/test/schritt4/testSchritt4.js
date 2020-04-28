describe("Rechteck Funktion testen", function() {

    describe("Rechteck verschieben", function() {
        let x1 = 2;
        let y1 = 2;
        let b1 = 4;
        let h1 = 4;
        let r1 = new Rechteck(x1, y1, b1, h1);

        let x2 = 0;
        let y2 = 0;
        let b2 = 6;
        let h2 = 5;
        let r2 = new Rechteck(x2, y2, b2, h2);

        let x3 = 20;
        let y3 = 30;
        let b3 = 7;
        let h3 = 2;
        let r3 = new Rechteck(x3, y3, b3, h3);

        let x4 = 25;
        let y4 = 26;
        let b4 = 0;
        let h4 = 0;
        let r4 = new Rechteck(x4, y4, b4, h4);

        r1.verschieben(5,3);
        r2.verschieben(0, 7);
        r3.verschieben(0, 0);
        r4.verschieben(-5, -2);        

        it("Recheck soll um positive Werte verschoben werden", function () {
            chai.assert.equal(x1 + 5, r1.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y1 + 3, r1.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b1, r1.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h1, r1.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });
        
        it("Rechteck soll um 0 und positive Werte verschoben werden", function() {
            chai.assert.equal(x2 + 0, r2.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y2 + 7, r2.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b2, r2.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h2, r2.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });
        
        it("Rechteck soll um den Werte 0 verschoben werden", function() {
            chai.assert.equal(x3, r3.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y3, r3.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b3, r3.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h3, r3.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });
        
        it("Rechteck soll um negative Werte verschoben werden", function() {
            chai.assert.equal(x4 + -5, r4.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y4 + -2, r4.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b4, r4.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h4, r4.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });
    });

    describe("Rechteck skalieren", function() {
        let x1 = 3;
        let y1 = 3;
        let b1 = 4;
        let h1 = 4;
        let r1 = new Rechteck(x1, y1, b1, h1);

        let x2 = 0;
        let y2 = 0;
        let b2 = 6;
        let h2 = 5;
        let r2 = new Rechteck(x2, y2, b2, h2);

        let x3 = 20;
        let y3 = 30;
        let b3 = 7;
        let h3 = 3;
        let r3 = new Rechteck(x3, y3, b3, h3);

        let x4 = 25;
        let y4 = 26;
        let b4 = 0;
        let h4 = 0;
        let r4 = new Rechteck(x4, y4, b4, h4);

        r1.skalieren(1.5);
        r2.skalieren(0.3);
        r3.skalieren(1);
        r4.skalieren(0);

        it("Recheck soll um einen Wert >1 skaliert werden", function() {
            chai.assert.equal(x1, r1.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y1, r1.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b1 * 1.5, r1.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h1 * 1.5, r1.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });
        
        it("Recheck soll um einen Wert <1 skaliert werden", function() {
            chai.assert.equal(x2, r2.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y2, r2.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b2 * 0.3, r2.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h2 * 0.3, r2.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });
        
        it("Recheck soll um den Wert 1 skaliert werden", function() {
            chai.assert.equal(x3, r3.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y3, r3.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b3, r3.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h3, r3.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });

        it("Recheck soll um den Wert 0 skaliert werden", function() {
            chai.assert.equal(x4, r4.zentrumX, "Das Rechteck hat nicht den richtigen Wert für zentrumX!");
            chai.assert.equal(y4, r4.zentrumY, "Das Rechteck hat nicht den richtigen Wert für zentrumY!");
            chai.assert.equal(b4 * 0, r4.breite, "Das Rechteck hat nicht die richtige Breite!");
            chai.assert.equal(h4 * 0, r4.hoehe, "Das Rechteck hat nicht die richtige Höhe");
        });
    });
});