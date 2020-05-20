//Ausgabe einer Überschrift
function ueberschriftAusgeben() {
    let schrift=document.getElementById("ersteueberschrift");
   console.log(schrift.innerHTML);

}
//Ausgabe des kursiven Textes
function kursivAusgeben(){
let kursiv= document.getElementById("kursiv");
let kind= kursiv.children;
for(let i=0;i<kind.length;i++){
console.log(kind[i].innerHTML);
}
}
//Ändern des Textes der Überschrift
function ueberschriftAendern(){
   
    let neu=document.getElementById("ersteueberschrift");
  
     neu.innerHTML="Neue Überschrift";

}
//Ausgabe der Absätze
/*function absaetzeAusgeben(){
    let absatz =document.getElementsByTagName("p");
    for(let i=0;i<absatz.length;i++){
        console.log(absatz[i].innerHTML);
    }
}*/
//This works :)
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
    let count=1;
    let absatz= document.getElementsByTagName("p");
    for(let i=0;i<absatz.length;i++){
        count=count+i;
    }
    console.log(count);
}