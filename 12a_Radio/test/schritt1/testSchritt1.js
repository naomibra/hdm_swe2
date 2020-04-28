describe('Radio anlegen', () => {

    /**
     * Test, ob ein Objekt Radio mit den übergebenen Parametern angelegt wird
     */
    describe("Radio erstellen", () => {
        let f1 = 100;
        let l1 = 5;
        let radio1 = new Radio(l1, f1);

        let f2 = 85;
        let l2 = 0;
        let radio2 = new Radio(l2, f2);

        let f3 = 110;
        let l3 = 10;
        let radio3 = new Radio(l3, f3);
        
        let radio4 = new Radio();
        
        let l5 = 12;
        let f5 = 40;
        let radio5 = new Radio(l5, f5);

        let l6 = -4;
        let f6 = 180;
        let radio6 = new Radio(l6, f6);
        
        it("Ein Objekt Radio (Frequenz = 100, Lautstärke = 5) sollte existieren", () => {
            chai.assert.exists(radio1, "Das Objekt Radio wurde initialisiert")
            chai.assert.equal(f1, radio1.frequenz, "Das Radio hat nicht die Frequenz " + f1 + "!");
            chai.assert.equal(l1, radio1.lautstaerke, "Das Radio hat nicht die Lautstärke " + l1 + "!");
            chai.assert.equal(false, radio1.eingeschaltet, "Das Radio ist an!");
        });

        it("Ein Objekt Radio (Frequenz = 85, Lautstärke = 0) sollte existieren", () => {
            chai.assert.exists(radio2, "Das Objekt Radio wurde initialisiert")
            chai.assert.equal(f2, radio2.frequenz, "Das Radio hat nicht die Frequenz " + f2 + "!");
            chai.assert.equal(l2, radio2.lautstaerke, "Das Radio hat nicht die Lautstärke " + l2 + "!");
            chai.assert.equal(false, radio2.eingeschaltet, "Das Radio ist an!");
        });

        it("Ein Objekt Radio (Frequenz = 110, Lautstärke = 10) sollte existieren", () => {
            chai.assert.exists(radio3, "Das Objekt Radio wurde initialisiert")
            chai.assert.equal(f3, radio3.frequenz, "Das Radio hat nicht die Frequenz " + f3 + "!");
            chai.assert.equal(l3, radio3.lautstaerke, "Das Radio hat nicht die Lautstärke " + l3 + "!");
            chai.assert.equal(false, radio3.eingeschaltet, "Das Radio ist an!");
        });


        it("ein Objekt Radio (Frequenz = 85, Lautstärke = 0) sollte existieren", () => {
            chai.assert.exists(radio4, "Das Objekt Radio wurde initialisiert")
            chai.assert.equal(85, radio4.frequenz, "Das Radio hat nicht die Frequenz 85!");
            chai.assert.equal(0, radio4.lautstaerke, "Das Radio hat nicht die Lautstärke 0!");
            chai.assert.equal(false, radio4.eingeschaltet, "Das Radio ist aus!");
        });

        it("ein Objekt Radio (Frequenz = 40, Lautstärke = 12) sollte mit korrigierten Attributen existieren", () => {
            chai.assert.exists(radio5, "Das Objekt Radio wurde initialisiert")
            chai.assert.equal(85, radio5.frequenz, "Das Radio hat nicht die Frequenz 85!");
            chai.assert.equal(10, radio5.lautstaerke, "Das Radio hat nicht die Lautstärke 10!");
            chai.assert.equal(false, radio5.eingeschaltet, "Das Radio ist an!");
        });

        it("ein Objekt Radio (Frequenz = 180, Lautstärke = -4) sollte mit korrigierten Attributen existieren", () => {
            chai.assert.exists(radio6, "Das Objekt Radio wurde initialisiert")
            chai.assert.equal(110, radio6.frequenz, "Das Radio hat nicht die Frequenz 110!");
            chai.assert.equal(0, radio6.lautstaerke, "Das Radio hat nicht die Lautstärke 0!");
            chai.assert.equal(false, radio6.eingeschaltet, "Das Radio ist an!");
        });
    });
});

describe("Methoden Test", () => {

    /**
     * Test, ob die funktion aus() korrekt funktioniert
     */
    describe("Radio ausschalten", () => {
        let f1 = 100;
        let l1 = 5;
        let radio1 = new Radio(l1, f1);

        let f2 = 85;
        let l2 = 0;
        let radio2 = new Radio(l2, f2);
        
        let radio3 = new Radio();

        radio1.an();
        radio2.an();
        radio3.an();
        radio1.aus();
        radio2.aus();
        radio3.aus();

        it("Radio sollte aus sein", () => {
            chai.assert.equal(false, radio1.eingeschaltet, "Das Radio ist nicht ausgeschaltet");
            chai.assert.equal(l1, radio1.lautstaerke, "Das Radio hat die falsche Lautstärke");
            chai.assert.equal(f1, radio1.frequenz, "Das Radio hat die falsche Frequenz");
        });

        it("Radio sollte aus sein", () => {
            chai.assert.equal(false, radio2.eingeschaltet, "Das Radio ist nicht ausgeschaltet");
            chai.assert.equal(l2, radio2.lautstaerke, "Das Radio hat die falsche Lautstärke");
            chai.assert.equal(f2, radio2.frequenz, "Das Radio hat die falsche Frequenz");
        });

        it("Radio sollte aus sein", () => {
            chai.assert.equal(false, radio3.eingeschaltet, "Das Radio ist nicht ausgeschaltet");
            chai.assert.equal(0, radio3.lautstaerke, "Das Radio hat die falsche Lautstärke");
            chai.assert.equal(85, radio3.frequenz, "Das Radio hat die falsche Frequenz");
        })
    });


    /**
     * Test, ob die funktion an() korrekt funktioniert
     */
    describe("Radio anschalten", () => {
        let radio1 = new Radio();

        let f2 = 100;
        let l2 = 5;
        let radio2 = new Radio(l2, f2);
        
        radio1.an();
        radio2.an();

        it("Radio sollte an sein", () => {
            chai.assert.equal(true, radio1.eingeschaltet, "Das Radio ist nicht angeschaltet");
            chai.assert.equal(0, radio1.lautstaerke, "Das Radio hat die falsche Lautstärke");
            chai.assert.equal(85, radio1.frequenz, "Das Radio hat die falsche Frequenz");
        });
  
        it("Radio sollte an sein", () => {
            chai.assert.equal(true, radio2.eingeschaltet, "Das Radio ist nicht angeschaltet");
            chai.assert.equal(l2, radio2.lautstaerke, "Das Radio hat die falsche Lautstärke");
            chai.assert.equal(f2, radio2.frequenz, "Das Radio hat die falsche Frequenz");
        });
    });


    /**
     * Test, ob die Funktion lauter() korrekt funktioniert
     */
    describe("Lautstärke erhöhen", () => {
        let f1 = 100;
        let l1 = 5;
        let radio1 = new Radio(l1, f1);

        let f2 = 100;
        let l2 = 0;
        let radio2 = new Radio(l2, f2);

        let f3 = 100;
        let l3 = 10;
        let radio3 = new Radio(l3, f3);

        radio1.an();
        radio2.an();
        radio3.an();

        radio1.lauter();
        radio2.lauter();
        radio3.lauter();

        it("Radio sollte lauter sein", () => {
            chai.assert.equal(l1 + 1, radio1.lautstaerke, "Das Radio sollte die Lautstärke " + l1 + 1 + " haben!");
            chai.assert.equal(f1, radio1.frequenz, "Das Radio hat die falsche Frequenz");
        });

        it("Radio sollte lauter sein", () => {
            chai.assert.equal(l2 + 1, radio2.lautstaerke, "Das Radio sollte die Lautstärke " + l2 + 1 + " haben!");
            chai.assert.equal(f2, radio2.frequenz, "Das Radio hat die falsche Frequenz");
        });

        it("Die Lautstärke sollte gleich bleiben", () => {
            chai.assert.equal(l3 , radio3.lautstaerke, "Das Radio sollte die Lautstärke " + l3 + " haben!");
            chai.assert.equal(f3, radio3.frequenz, "Das Radio hat die falsche Frequenz");
        });
    });


    /**
     * Test. ob die Funktion leiser() korrekt funktioniert
     */
    describe("Lautstärke verringern", () => {
        let f1 = 100;
        let l1 = 5;
        let radio1 = new Radio(l1, f1);
        
        let f2 = 100;
        let l2 = 10;
        let radio2 = new Radio(l2, f2);

        let f3 = 100;
        let l3 = 0;
        let radio3 = new Radio(l3, f3);

        let f4 = 100;
        let l4 = 5;
        let radio4 = new Radio(l4, f4);
        
        radio1.an();
        radio2.an();
        radio3.an();
        radio4.an();

        radio1.leiser();
        radio2.leiser();
        radio3.leiser();
        radio4.aus();
        radio4.leiser();

        it("Radio sollte leiser sein", () => {
            chai.assert.equal(l1-1, radio1.lautstaerke, "Das Radio sollte die Lautstärke " + l1 - 1 + " haben!");
            chai.assert.equal(f1, radio1.frequenz, "Das Radio hat die falsche Frequenz");
        });

        it("Radio sollte leiser sein", () => {
            chai.assert.equal(l2 - 1, radio2.lautstaerke, "Das Radio sollte die Lautstärke " + l2 - 1 + " haben!");
            chai.assert.equal(f2, radio2.frequenz, "Das Radio hat die falsche Frequenz");
        });

        it("Die Lautstärke sollte gleich bleiben", () => {
            chai.assert.equal(l3, radio3.lautstaerke, "Das Radio sollte die Lautstärke " + l3 + " haben!");
            chai.assert.equal(f3, radio3.frequenz, "Das Radio hat die falsche Frequenz");
        });

        it("Die Lautstärke sollte gleich bleiben", () => {
            chai.assert.equal(l4, radio4.lautstaerke, "Das Radio sollte die Lautstärke " + l4 + " haben!");
            chai.assert.equal(f4, radio4.frequenz, "Das Radio hat die falsche Frequenz");
        });
    });


    /**
     * Test, ob die Funktion setFrequenz() korrekt funktioniert
     */
    describe("Frequenz ändern", () => {
        let radio1 = new Radio(5, 100);
        let radio2 = new Radio(3, 90);
        let radio3 = new Radio(4, 90);
        let radio4 = new Radio(8, 110);
        
        radio1.an();
        radio2.an();
        radio3.an();
        radio4.an();

        radio1.frequenzSetzen(90);
        radio2.frequenzSetzen(110);
        radio3.frequenzSetzen(70);
        radio4.frequenzSetzen(111);

        it("Die Frequenz soll auf 90 gesetzt werden", () => {
            chai.assert.equal(90, radio1.frequenz, "Das Radio hat die falsche Frequenz!");
            chai.assert.equal(5, radio1.lautstaerke, "Das Radio hat die falsche Lautstärke!");
        });
        
        it("Die Frequenz soll auf 110 gesetzt werden", () => {
            chai.assert.equal(110, radio2.frequenz, "Das Radio hat die falsche Frequenz!")
            chai.assert.equal(3, radio2.lautstaerke, "Das Radio hat die falsche Lautstärke!");
        });
        
        it("Die Frequenz soll auf den minimalen Wert gesetzt werden", () => {
            chai.assert.equal(85, radio3.frequenz, "Das Radio hat die falsche Frequenz!");
            chai.assert.equal(4, radio3.lautstaerke, "Das Radio hat die falsche Lautstärke!");
        });
        
        it("Die Frequenz soll auf den maximalen Wert gesetzt werden", () => {
            chai.assert.equal(110, radio4.frequenz, "Das Radio hat die falsche Frequenz!");
            chai.assert.equal(8, radio4.lautstaerke, "Das Radio hat die falsche Lautstärke!");
        });

    })

});