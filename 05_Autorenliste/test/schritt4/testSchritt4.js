// let assert = chai.assert;
// TODO: einheitliche Vorgehensweise definieren
//Tests müssen unabhängig voneinander, aber auch alle zusammen ausgeführt werden können
describe("Methoden Test", function() {

    describe("equals", function() {

        it("Vergleich zweier gleicher Autoren", function() {

            // Test1
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);

            assert.isTrue(a1.equals(a2), "Nicht als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier identischer Autoren", function() {
            // Test2
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = a1;
            
            assert.isTrue(a1.equals(a2), "Nicht als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren ohne Vornamen", function() {
            // Test3
            let a1 = new Autor(null, "Frisch", 1911, 1991);
            let a2 = new Autor(null, "Frisch", 1911, 1991);
            
            assert.isTrue(a1.equals(a2), "Nicht als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier gleicher Autoren ohne Nachnamen", function() {    
            // Test4
            let a1 = new Autor("Max", null, 1911, 1991);
            let a2 = new Autor("Max", null, 1911, 1991);
            
            assert.isTrue(a1.equals(a2), "Nicht als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });
        
        it("Vergleich zweier  Autoren mit unterschiedlichen Vornamen", function() {

            // Test1
            let a1 = new Autor(null, "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);

            assert.isFalse(a1.equals(a2), "Als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier  Autoren mit unterschiedlichen Nachnamen", function() {    
            // Test2
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = new Autor("Max", null, 1911, 1991);
            
            assert.isFalse(a1.equals(a2), "Als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier  Autoren mit unterschiedlichen Geburtsjahren", function() {    
            // Test3
            let a1 = new Autor("Max", "Frisch", -1, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);
            
            assert.isFalse(a1.equals(a2), "Als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier  Autoren mit unterschiedlichen Sterbejahren", function() {    
            // Test4
            let a1 = new Autor("Max", "Frisch", 1911, -1);
            let a2 = new Autor("Max", "Frisch", 1911, 1991);
            
            assert.isFalse(a1.equals(a2), "Als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        });

        it("Vergleich zweier  Autoren mit unterschiedlichen Sterbejahren", function() {    
            // Test5
            let a1 = new Autor("Max", "Frisch", 1911, 1991);
            let a2 = new Autor("Max", "Frisch", 1911, -1);
            
            assert.isFalse(a1.equals(a2), "Als gleich erkannt: " + a1.toString() + ", " + a2.toString() + "!");
        
        });
        
    });


});