let farben = '{"konfig": {"farbe" : "rgb(0, 0, 255)", "schrift": "rgb(255, 0, 0)"}}';

function farbenAendern(){
let h1= document.getElementsByTagName("h1") [0];
let daten=JSON.parse(farben);
let color=daten.konfig
let body= document.getElementsByTagName("body") [0];
body.style.background=color.farbe;
h1.style.color=color.schrift;

}
