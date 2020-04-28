describe("FigurenEditor testen", function() {

    describe("Konstruktor", function() {

        let fe1 = new FigurenEditor();

        it("Konstruktor sollte das Attribut 'figuren' initialisieren", function() {
            chai.assert.isArray(fe1.figuren, "'figuren' ist kein Array!");
            chai.assert.equal(0, fe1.figuren.length, "'figuren' hat nicht die Länge 0!");
        });
    });

    describe("Funktionen", function() {

        let fe1 = new FigurenEditor();
        let r1 = new Rechteck(10, 20, 20, 20);
        fe1.figurHinzufuegen(r1);

        it("Mit der Funktion 'figurHinzufuegen' soll ein Rechteck hinzugefügt werden", function () {
            chai.assert.equal(1, fe1.figuren.length, "'figuren' hat nicht die Länge 1!");
            chai.assert.equal(r1, fe1.figuren[0], "Das Rechteck " + r2.toString() + " wurde nicht zum FigurenEditor hinzugefügt!");
        });


        let fe2 = new FigurenEditor();
        let r2 = new Rechteck(60, -5);
        fe2.figurHinzufuegen(r1);
        fe2.figurHinzufuegen(r2);        

        it("Mit der Funktion 'figurHinzufuegen' sollen zwei Rechtecke hinzugefügt werden", function () {
            chai.assert.equal(2, fe2.figuren.length, "'figuren' hat nicht die Länge 2!");
            chai.assert.equal(r1, fe2.figuren[0], "Das Rechteck wurde nicht zum FigurenEditor hinzugefügt oder steht an der falschen Stelle!");
            chai.assert.equal(r2, fe2.figuren[1], "Das Rechteck wurde nicht zum FigurenEditor hinzugefügt oder steht an der falschen Stelle!");
        });

        
        let fe3 = new FigurenEditor();
        let r3 = new Rechteck(5,5,5,5);
        fe3.figurHinzufuegen(r3);
        
        it("Mit der Funktion 'figurAnzeigen' soll ein Rechteck ausgegeben werden", function () {
            chai.assert.equal(1, fe3.figuren.length, "'figuren' hat nicht die Länge 1!");
            chai.assert.equal(r3.toString(), fe3.figurAnzeigen(0), "Die Ausgabe stimmt nicht!");
        });


        let fe4 = new FigurenEditor();
        let r4_1 = new Rechteck(40, 50, 10, 20);
        let r4_2 = new Rechteck(80, 90, 20, 30);
        fe4.figurHinzufuegen(r4_1);
        fe4.figurHinzufuegen(r4_2);
        let erg = fe4.alleFigurenAnzeigen();
        let str1 = r4_1.toString();
        let str2 = r4_2.toString();

        it("Mit der Funktion 'alleFigurenAnzeigen' sollen alle Rechteck ausgegeben werden", function () {
            chai.assert.equal(2, fe4.figuren.length, "'figuren' hat nicht die Länge 2!");
            chai.assert.isTrue(erg.includes(str1), "Rechteck 1: " + r4_1.toString + " nicht in der Ausgabe enthalten!");
            chai.assert.isTrue(erg.includes(str2), "Rechteck 2: " + r4_2.toString + " nicht in der Ausgabe enthalten!");
        });
    });
});
