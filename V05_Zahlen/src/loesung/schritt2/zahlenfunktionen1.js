function zahlenAddieren1(zahl1, zahl2) {
    zahl1.addieren(zahl2);
    return zahl1;
}

let zahl1 = new Zahl(10);
let zahl2 = new Zahl(15);
let zahl3 = zahlenAddieren1(zahl1, zahl2);
console.log("Ergebnis nach der Addition von zahl1 und zahl2:");
console.log("zahl1 ist: " + zahl1.toString());
console.log("zahl2 ist: " + zahl2.toString());
console.log("zahl3 ist: " + zahl3.toString());

