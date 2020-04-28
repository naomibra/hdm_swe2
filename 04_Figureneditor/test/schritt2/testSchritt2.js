describe("Rechteck Funktion testen", function() {

    describe("Funktion enthaeltPunkt testen", function() {
        let rechteck = new Rechteck(2, 2, 4, 4);
        let x1 = 2;
        let y1 = 3;

        let x2 = 4;
        let y2 = 4;

        let x3 = 0;
        let y3 = 0;
        
        let x4 = 3;
        let y4 = 6;

        let x5 = -3;
        let y5 = 3;

        let x6 = 0;
        let y6 = -1;

        let x7 = 7;
        let y7 = -1;

        it("Punkt sollte im Rechteck " + rechteck.toString() + " enthalten sein", function() {
            chai.assert.isFunction(rechteck.enthaeltPunkt, "Die funkton enthaeltPunkt() existiert nicht");
            chai.assert.isTrue(rechteck.enthaeltPunkt(x1, y1), 
                "Das Ergebnis bei einem Punkt mit (x: " + x1 + ", y: " + y1 + ") sollte true sein!");
            chai.assert.isTrue(rechteck.enthaeltPunkt(x2, y2), 
                "Das Ergebnis bei einem Punkt mit (x: " + x2 + ", y: " + y2 + ") sollte true sein!");
            chai.assert.isTrue(rechteck.enthaeltPunkt(x3, y3), 
                "Das Ergebnis bei einem Punkt mit (x: " + x3 + ", y: " + y3 + ") sollte true sein!");
        })
        
        it("Punkt sollte nicht im Rechteck (zentrumX: 2, zentrumY: 2, breite: 4, höhe: 4) enthalten sein", function() {
            chai.assert.isFunction(rechteck.enthaeltPunkt, "Die funkton enthaeltPunkt() existiert nicht");
            chai.assert.isFalse(rechteck.enthaeltPunkt(x4, y4), "Das Ergebnis bei einem Punkt mit (x: " + x4 + ", y: " + y4 + ") sollte false sein!");
            chai.assert.isFalse(rechteck.enthaeltPunkt(x5, y5), "Das Ergebnis bei einem Punkt mit (x: " + x5 + ", y: " + y5 + ") sollte false sein!");
            chai.assert.isFalse(rechteck.enthaeltPunkt(x6, y6), "Das Ergebnis bei einem Punkt mit (x: " + x6 + ", y: " + y6 + ") sollte false sein!");
            chai.assert.isFalse(rechteck.enthaeltPunkt(x7, y7), "Das Ergebnis bei einem Punkt mit (x: " + x7 + ", y: " + y7 + ") sollte false sein!");
        })
    });
});