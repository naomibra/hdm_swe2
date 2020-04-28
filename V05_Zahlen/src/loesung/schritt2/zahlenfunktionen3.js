function zahlenAddieren3(zahl1, zahl2) {
    let zahl3 = new Zahl(zahl1.wert);
    zahl3.addieren(zahl2);
    return zahl3;
}


let zahl1 = new Zahl(10);
let zahl2 = new Zahl(15);
let zahl3 = zahlenAddieren3(zahl1, zahl2);
console.log("Ergebnis nach der Addition von zahl1 und zahl2:");
console.log("zahl1 ist: " + zahl1.toString());
console.log("zahl2 ist: " + zahl2.toString());
console.log("zahl3 ist: " + zahl3.toString());

