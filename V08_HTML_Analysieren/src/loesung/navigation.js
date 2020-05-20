//Ausgabe einer Überschrift
function ueberschriftAusgeben() {
    let schrift=document.getElementById("ersteueberschrift");
   console.log(schrift.innerHTML);

}
//Ausgabe des kursiven Textes
function kursivAusgeben(){
let kursiv= document.getElementById("kursiv");
let kind= kursiv.children;
console.log(kind[0].innerHTML);

}
//Ändern des Textes der Überschrift
function ueberschriftAendern(){
   
    let neu=document.getElementById("ersteueberschrift");
  
     neu.innerHTML="Neue Überschrift";

}
//Ausgabe der Absätze
function absaetzeAusgeben(){
    let absatz =document.getElementsByTagName("p");
    let ausgabe="";
    for(let i=0;i<absatz.length;i++){
        ausgabe= ausgabe+absatz[i].innerHTML;
    }
    console.log(ausgabe);
}


//Ausgabe der Anzahl der Absätze
function anzahlAusgeben() {
    let absatz= document.getElementsByTagName("p");
    console.log(absatz.length);
}

//Texte einfärben
function texteEinfaerben(){
let texte=document.getElementsByTagName("p");
for(let i=0;i<texte.length;i++){
texte[i].style.color="blue";

}
}