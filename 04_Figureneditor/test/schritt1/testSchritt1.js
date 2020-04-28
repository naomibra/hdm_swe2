describe("Rechteck erstellen", function() {

    describe("Rechteck-Konstruktor testen", function() {
        let x1 = 0;
        let y1 = 0;
        let b1 = 0;
        let h1 = 0;
        

        let x2 = 100;
        let y2 = 100;
        let b2 = 100;
        let h2 = 100;
        

        let x3 = 10;
        let y3 = 10;
        let b3 = 100;
        let h3 = 200;
        
        let x4 = 10.5;
        let y4 = 1.7;
        let b4 = 4.8;
        let h4 = 2.5;
        

        let x5 = -5;
        let y5 = -10;
        let b5 = 40;
        let h5 = 60;
        

        

        it("Rechteck mit Parametern (" + x1 + ", " + y1 + ", " + b1 + ", " + h1 + ") soll angelegt werden", function () {
            let r1 = new Rechteck(x1, y1, b1, h1);
            chai.assert.exists(r1, "Es wurde kein Objekt Recheck initialisiert!");
            chai.assert.equal(x1, r1.zentrumX, "zentrumX hat nicht den richtigen Wert!");
            chai.assert.equal(y1, r1.zentrumY, "zentrumY hat nicht den richtigen Wert!");
            chai.assert.equal(b1, r1.breite, "breite hat nicht den richtigen Wert!");
            chai.assert.equal(h1, r1.hoehe, "hoehe hat nicht den richtigen Wert!");
        });
            
        it("Rechteck mit Parametern (" + x2 + ", " + y2 + ", " + b2 + ", " + h2 + ") soll angelegt werden", function () {
            let r2 = new Rechteck(x2, y2, b2, h2);
            chai.assert.exists(r2, "Es wurde kein Objekt Recheck initialisiert!");
            chai.assert.equal(x2, r2.zentrumX, "zentrumX hat nicht den richtigen Wert!");
            chai.assert.equal(y2, r2.zentrumY, "zentrumY hat nicht den richtigen Wert!");
            chai.assert.equal(b2, r2.breite, "breite hat nicht den richtigen Wert!");
            chai.assert.equal(h2, r2.hoehe, "hoehe hat nicht den richtigen Wert!");
        });

        it("Rechteck mit Parametern (" + x3 + ", " + y3 + ", " + b3 + ", " + h3 + ") soll angelegt werden", function () {
            let r3 = new Rechteck(x3, y3, b3, h3);
            chai.assert.exists(r3, "Es wurde kein Objekt Recheck initialisiert!");
            chai.assert.equal(x3, r3.zentrumX, "zentrumX hat nicht den richtigen Wert!");
            chai.assert.equal(y3, r3.zentrumY, "zentrumY hat nicht den richtigen Wert!");
            chai.assert.equal(b3, r3.breite, "breite hat nicht den richtigen Wert!");
            chai.assert.equal(h3, r3.hoehe, "hoehe hat nicht den richtigen Wert!");
        });

        it("Rechteck mit Parametern (" + x4 + ", " + y4 + ", " + b4 + ", " + h4 + ") soll angelegt werden", function () {
            let r4 = new Rechteck(x4, y4, b4, h4);
            chai.assert.exists(r4, "Es wurde kein Objekt Recheck initialisiert!");
            chai.assert.equal(x4, r4.zentrumX, "zentrumX hat nicht den richtigen Wert!");
            chai.assert.equal(y4, r4.zentrumY, "zentrumY hat nicht den richtigen Wert!");
            chai.assert.equal(b4, r4.breite, "breite hat nicht den richtigen Wert!");
            chai.assert.equal(h4, r4.hoehe, "hoehe hat nicht den richtigen Wert!");
        });

        it("Rechteck mit negativen Parametern (" + x5 + ", " + y5 + ", " + b5 + ", " + h5 + ") soll angelegt werden", function() {
            let r5 = new Rechteck(x5, y5, b5, h5);
            chai.assert.exists(r5, "Es wurde kein Objekt Recheck initialisiert!");
            chai.assert.equal(x5, r5.zentrumX, "zentrumX hat nicht den richtigen Wert!");
            chai.assert.equal(y5, r5.zentrumY, "zentrumY hat nicht den richtigen Wert!");
            chai.assert.equal(b5, r5.breite, "breite hat nicht den richtigen Wert!");
            chai.assert.equal(h5, r5.hoehe, "hoehe hat nicht den richtigen Wert!");
        });

        it("Rechteck ohne Parameter anlegen", function() {
            let r6 = new Rechteck();
            chai.assert.exists(r6, "Es wurde kein Objekt Recheck initialisiert!");
            chai.assert.equal(0, r6.zentrumX, "zentrumX hat nicht den richtigen Wert!");
            chai.assert.equal(0, r6.zentrumY, "zentrumY hat nicht den richtigen Wert!");
            chai.assert.equal(0, r6.breite, "breite hat nicht den richtigen Wert!");
            chai.assert.equal(0, r6.hoehe, "hoehe hat nicht den richtigen Wert!");
        })
    });

    describe("Boundingbox", function() {
        let x1 = 3;
        let y1 = 2;
        let b1 = 5;
        let h1 = 6;
        let r1 = new Rechteck(x1, y1, b1, h1);
        let a1 = r1.boundingBox();

        let x2 = 13;
        let y2 = 50;
        let b2 = 56;
        let h2 = 23;
        let r2 = new Rechteck(x2, y2, b2, h2);
        let a2 = r2.boundingBox();

        let r3 = new Rechteck();
        let a3 = r3.boundingBox();

        it("Boundingbox soll berechnet werden", function() {
            chai.assert.exists(r1, "Es wird kein Objekt Recheck initialisiert!");
            chai.assert.isTrue(Array.isArray(a1), "Es wurde kein Array zurückgegeben!");
            chai.assert.equal(4, a3.length, "Das Array hat nicht die richtige Länge!");
            chai.assert.equal(x1 - b1 / 2, a1[0], "Der x-Wert ist nicht korrekt!");
            chai.assert.equal(y1 - h1 / 2, a1[1], "Der y-Wert ist nicht korrekt!");
            chai.assert.equal(b1, a1[2], "Die Breite hat nicht den richtigen Wert!");
            chai.assert.equal(h1, a1[3], "Die Hoehe hat nicht den richtigen Wert!");
            
            chai.assert.exists(r1, "Es wird kein Objekt Recheck initialisiert!");
            chai.assert.isTrue(Array.isArray(a2), "Es wurde kein Array zurückgegeben!");
            chai.assert.equal(4, a3.length, "Das Array hat nicht die richtige Länge!");
            chai.assert.equal(x2 - b2 / 2, a2[0], "Der x-Wert ist nicht korrekt!");
            chai.assert.equal(y2 - h2 / 2, a2[1], "Der y-Wert ist nicht korrekt!");
            chai.assert.equal(b2, a2[2], "Die Breite hat nicht den richtigen Wert!");
            chai.assert.equal(h2, a2[3], "Die Hoehe hat nicht den richtigen Wert!");
        });
        
        it("Boundingbox für parameterloses Rechteck soll berechnet werden", function() {
            chai.assert.exists(r3, "Es wird kein Objekt Recheck initialisiert!");
            chai.assert.isTrue(Array.isArray(a3), "Es wurde kein Array zurückgegeben!");
            chai.assert.equal(4, a3.length, "Das Array hat nicht die richtige Länge!");
            chai.assert.equal(x1 - b1 / 2, a1[0], "Der x-Wert ist nicht korrekt!");
            chai.assert.equal(y1 - h1 / 2, a1[1], "Der y-Wert ist nicht korrekt!");
            chai.assert.equal(b1, a1[2], "Die Breite hat nicht den richtigen Wert!");
            chai.assert.equal(h1, a1[3], "Die Hoehe hat nicht den richtigen Wert!");
        });
    });
});