// let assert = chai.assert;

describe("Funktion Test", function() {

    describe("sindDuplikate", function() {

        it("Symmetrie der Funktion", function() {
            // Test1
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);
            let a3 = new Autor("Friedrich", "Dürrenmatt", 1921, 1990);

            assert.isTrue(sindDuplikate(a1, a2) == sindDuplikate(a2, a1), "die Funktion sindDuplikate() ist nicht symmetrisch!");
            assert.isTrue(sindDuplikate(a1, a3) == sindDuplikate(a3, a1), "die Funktion sindDuplikate() ist nicht symmetrisch!");
        });

        it("Vergleich zweier gleicher Autoren", function() {

            // Test1
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);

            assert.isTrue(sindDuplikate(a1, a2), "Fälschlicherweise nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
            assert.isTrue(sindDuplikate(a2, a1), "Fälschlicherweise nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier unterschiedlicher Autoren", function() {
            // Test2
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = new Autor("Friedrich", "Dürrenmatt", 1911, 1991);

            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier identischer Autoren", function() {    
            // Test3
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = a1;

            assert.isFalse(sindDuplikate(a1, a2), "Identische Autoren als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, , unterschiedliche Geburtsjahre", function() {    
            // Test4
            let a1 = new Autor("Max", "Frisch", 191, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);

            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, , unterschiedliche Sterbejahre", function() {    
            // Test5
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1992);
            
            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren", function() {    
            // Test6
            let a1 = new Autor(null, "Frisch", 1911, 1991);
            let a2 = new Autor(null, "Frisch", 1911, 1991);
            
            assert.isTrue(sindDuplikate(a1, a2), "Fälschlicherweise nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren", function() {    
            // Test7
            let a1 = new Autor("", "Frisch", 1911, 1991);
            let a2 = new Autor("", "Frisch", 1911, 1991);
            
            assert.isTrue(sindDuplikate(a1, a2), "Fälschlicherweise nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, unterschiedliche Vornamen", function() {
            // Test8
            let a1 = new Autor(null, "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1992);

            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, unterschiedliche Vornamen", function() {    
            // Test9
            let a1 = new Autor("", "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1992);
            
            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren", function() {    
            // Test10
            let a1 = new Autor("Max", null, 1911, 1991);
            let a2 = new Autor("Max", null, 1911, 1991);
            
            assert.isTrue(sindDuplikate(a1, a2), "Nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren", function() {   
            // Test11
            let a1 = new Autor("Max", "", 1911, 1991);
            let a2 = new Autor("Max", "", 1911, 1991);
            
            assert.isTrue(sindDuplikate(a1, a2), "Nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, unterschiedliche Nachnamen", function() {   
            // Test12
            let a1 = new Autor("Max", null, 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);
            
            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, unterschiedliche Nachnamen", function() {    
            // Test13
            let a1 = new Autor("Max", "", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);
            
            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren", function() {    
            // Test14
            let a1 = new Autor("Max", "Frisch", -1, 1991);
            let a2 = new Autor("Max", "Frisch", -1, 1991);

            assert.isTrue(sindDuplikate(a1, a2), "Nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, unterschiedliche Geburtsjahre", function() {
            // Test15
            let a1 = new Autor("Max", "Frisch", -1, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);

            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren", function() {
            // Test16
            let a1 = new Autor("Max", "Frisch", 1911, -1);
            let a2 = new Autor("Max", "Frisch", 1911, -1);

            assert.isTrue(sindDuplikate(a1, a2), "Nicht als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier Autoren, unterschiedliche Sterbejahre", function() {
            // Test17
            let a1 = new Autor("Max", "Frisch", 1911, -1);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);

            assert.isFalse(sindDuplikate(a1, a2), "Fälschlicherweise als Duplikate erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });
    });
});