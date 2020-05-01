let b1 = new Buch(
    "Max Frisch",
    "Andorra",
    200,
    9.99
);
let b2 = new Buch(
    "Max Frisch",
    "Homo Faber",
    300,
    12.99
);
let b3 = new Buch(
    "Max Frisch",
    "Stiller",
    500,
    19.99
);
let b4 = new Buch(
    "Matin Suter",
    "Elefant",
    200,
    9.99
);
let b5 = new Buch(
    "Friedrich Dürrenmatt",
    "Die Physiker",
    250,
    9.95
);
let b6 = new Buch(
    "John Irving",
    "Owen Meany",
    800,
    29.99
);
let b7 = new Buch(
    "Martin Sutter",
    "Small World",
    350,
    15.99
);

//Ausgabe als String
let s1 = b1.toString();
console.log(s1);
console.log(b2.toString());
console.log(b3.toString());
console.log(b4.toString());
console.log(b5.toString());
console.log(b6.toString());
console.log(b7.toString());

//Warenkorb

let warenkorb = new Array();

warenkorb[0]=b1;
warenkorb[1]=b3;
warenkorb[2]=b5;

console.log(warenkorb);

//Preisberechnung
function gesamtPreis(warenkorb){
 let gesamt = 0;
for (let i=0;i<warenkorb.length;i++){
gesamt= gesamt+warenkorb[i].preis ;

}
return gesamt.toFixed(2);

}
//Günstigste
function guenstigstesBuch(warenkorb){
let indexmin= warenkorb[0];
let max =warenkorb[0].preis;
for (let i=0;i<warenkorb.length;i++){
    if(warenkorb[i].preis<max){
        indexmin=warenkorb[i];
    }
    return indexmin;

}

}
//dickste Buch
function dickstesBuch(warenkorb){
let dicke=warenkorb[0].seitenAnzahl;
let index =0;
for( let i=0; i<warenkorb.length;i++){
    if(warenkorb[i].seitenAnzahl>dicke){
        dicke= warenkorb[i].seitenAnzahl;
        index= warenkorb[i];
    }
}
return index;

}
//Test

let Preis=gesamtPreis(warenkorb);
console.log("Gesamtpreis aller Bücher im Warenkorb: "+Preis);
let billigstesBuch=guenstigstesBuch(warenkorb);
console.log("Günstigstes Buch im Warenkorb:"+billigstesBuch);
let dickste=dickstesBuch(warenkorb);
console.log("Dickstes Buch im Warenkorb:"+dickste);