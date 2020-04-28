
let s1 = "Text";

let s2 = new String("Text");
let s3 = new String("Text");

console.log("S1 - Länge: " + s1.length);
console.log("S1 - x: " + s1.indexOf("x"));

console.log("S2 - Länge: " + s2.length);
console.log("S2 - x: " + s2.indexOf("x"));

if(s1 == s2)
    console.log("Vergleich s1 - s2: true");
else
    console.log("Vergleich s1 - s2: false");

if(s2 == s3)
    console.log("Vergleich s2 - s3: true");
else
    console.log("Vergleich s2 - s3: false");

if(s2.valueOf() == s3.valueOf())
    console.log("Vergleich der Werte s2 - s3: true");
else
    console.log("Vergleich der Werte s2 - s3: false");

