describe("Kürzen und Erweitern von Brüchen", () => {

    /**
     * Test, ob das Kürzen eines Bruchs mit einem erlaubten Faktor funktioniert
     */
    describe("Bruch durch erlaubten Faktor kürzen", () => {
        let bruch1 = new Bruch(4, 6);
        let faktor = 2;
        let bruch3 = new Bruch(2, 3);
        bruch1.kuerzen(faktor);

        it("Bruch soll durch Faktor gekürzt werden", () => {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis des Kürzens ist nicht " + bruch3.ausgabe() + "!");
        });

    });


    /**
     * Test, ob das Kürzen eines Bruchs mit einem erlaubten Faktor funktioniert
     */
    describe("Bruch durch erlaubten Faktor kürzen", () => {
        let bruch1 = new Bruch(20, 40);
        let faktor = 4;
        let bruch3 = new Bruch(5, 10);
        bruch1.kuerzen(faktor);

        it("Bruch soll durch Faktor gekürzt werden", () => {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis des Kürzens ist nicht " + bruch3.ausgabe() + "!");
        });

    });


    /**
     * Test, ob das Kürzen eines Bruchs mit einem nicht erlaubten Faktor funktioniert
     */
    describe("Bruch durch nicht erlaubten Faktor kürzen", () => {
        let bruch1 = new Bruch(20, 40);
        let faktor = 3;
        let bruch3 = new Bruch(20, 40);
        bruch1.kuerzen(faktor);

        it("Bruch soll durch Faktor gekürzt werden", () => {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis des Kürzens ist nicht " + bruch3.ausgabe() + "!");
        });

    });

     /**
     * Test, ob das Kürzen eines Bruchs mit dem nicht erlaubten Faktor 0 funktioniert
     */
    describe("Bruch durch nicht erlaubten Faktor kürzen", () => {
        let bruch1 = new Bruch(20, 40);
        let faktor = 0;
        let bruch3 = new Bruch(20, 40);
        bruch1.kuerzen(faktor);

        it("Bruch soll durch Faktor gekürzt werden", () => {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis des Kürzens ist nicht " + bruch3.ausgabe() + "!");
        });

    });


    /**
     * Test, ob das Erweitern eines Bruchs mit einem erlaubten Faktor funktioniert
     */
    describe("Bruch mit einem positiven Faktor erweitern", () => {
        let bruch1 = new Bruch(2, 5);
        let faktor = 5;
        let bruch3 = new Bruch(10, 25);
        bruch1.erweitern(faktor);

        it("Bruch soll mit Faktor erweitert werden", () => {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis des Erweiterns ist nicht " + bruch3.ausgabe() + "!");
        });

    });


    /**
     * Test, ob das Erweitern eines Bruchs mit einem erlaubten Faktor funktioniert
     */
    describe("Bruch mit einem positiven Faktor erweitern", () => {
        let bruch1 = new Bruch(2, 3);
        let faktor = 2;
        let bruch3 = new Bruch(4, 6);
        bruch1.erweitern(faktor);

        it("Bruch soll mit Faktor erweitert werden", () => {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis des Erweiterns ist nicht " + bruch3.ausgabe() + "!");
        });

    });


    /**
     * Test, ob das Erweitern eines Bruchs mit einem erlaubten Faktor funktioniert
     */
    describe("Bruch mit einem positiven Faktor erweitern", () => {
        let bruch1 = new Bruch(6, 40);
        let faktor = 3;
        let bruch3 = new Bruch(18, 120);
        bruch1.erweitern(faktor);

        it("Bruch soll mit Faktor erweitert werden", () => {
            chai.assert.equal(bruch3.ausgabe(), bruch1.ausgabe(), "Das Ergebnis des Erweiterns ist nicht " + bruch3.ausgabe() + "!");
        });

    });


});
