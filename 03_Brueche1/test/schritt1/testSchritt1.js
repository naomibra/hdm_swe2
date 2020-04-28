describe('Bruch anlegen', () => {

    /**
     * Test ob das Erzeugen eines Bruchs funktioniert
     * Ohne Parameter soll der Nenner 1 und der Zähler 0 sein
     */
    describe('Bruch ohne Parameter anlegen', () => {
        let bruch = new Bruch();

        it('Bruch sollte existieren', () => {
            chai.assert.exists(bruch, 'Der Bruch wurde nicht initialisiert!');
        });

        it('Zähler sollte 0 sein', () => {
            chai.assert.equal(0, bruch.zaehler, 'Der Zähler ist nicht 0!');
        });

        it('Nenner sollte 1 sein', () => {
            chai.assert.equal(1, bruch.nenner, 'Der Nenner ist nicht 1!');
        });
    });


    describe('Bruch mit Parameter anlegen', () => {
        let z = 5;
        let n = 2
        let bruch = new Bruch(z, n);

        it('Bruch sollte existieren', () => {
            chai.assert.exists(bruch, 'Der Bruch wurde nicht initialisiert!');
        });

        it('Zähler sollte 3 sein', () => {
            chai.assert.equal(z, bruch.zaehler, 'Der Zähler ist nicht ' + z + '!');
        });

        it('Nenner sollte 5 sein', () => {
            chai.assert.equal(n, bruch.nenner, 'Der Nenner ist nicht ' + n + '!');
        });
    });
});

describe('Bruch ausgeben', () => {
    describe('Ausgabe für einen Bruch ohne Parameter', () => {

        let bruch = new Bruch();
        let erg = bruch.ausgabe();

        let indexZ = erg.indexOf(0);
        let indexN = erg.indexOf(1);
        let indexS = erg.indexOf('/');

        it('Bruch sollte als String ausgegeben werden', () => {
            chai.assert.isTrue(indexZ >= 0, 'Im Bruch ist die Zahl 0 nicht enthalten, sie sollte im Zähler stehen: ' + erg + '!');
            chai.assert.isTrue(indexN >= 0, 'Im Bruch ist die Zahl 1 nicht enthalten, sie sollte im Nenner stehen: ' + erg + '!');
            chai.assert.isTrue(indexS >= 0, 'Im Bruch ist der / nicht enthalten: ' + erg + '!');

            chai.assert.isTrue(indexZ < indexS, 'Die Zahl 0 steht nicht im Zähler!');
            chai.assert.isTrue(indexN > indexS, 'Die Zahl 1 steht nicht im Nenner!');
        });
    });

    describe('Ausgabe für einen Bruch mit Werten', () => {
        let z = 4;
        let n = 5;
        let bruch = new Bruch(z, n);
        let erg = bruch.ausgabe();

        let indexZ = erg.indexOf(z);
        let indexN = erg.indexOf(n);
        let indexS = erg.indexOf('/');

        it('Bruch sollte als String ausgegeben werden', () => {
            chai.assert.isTrue(indexZ >= 0, 'Im Bruch ist die Zahl ' + z + ' nicht enthalten, sie sollte im Zähler stehen: ' + erg + '!');
            chai.assert.isTrue(indexN >= 0, 'Im Bruch ist die Zahl ' + n + ' nicht enthalten, sie sollte im Nenner stehen: ' + erg + '!');
            chai.assert.isTrue(indexS >= 0, 'Im Bruch ist der / nicht enthalten: ' + erg + '!');

            chai.assert.isTrue(indexZ < indexS, 'Die Zahl ' + z + ' steht nicht im Zähler!');
            chai.assert.isTrue(indexN > indexS, 'Die Zahl ' + n + ' steht nicht im Nenner!');
        });
    });
});
