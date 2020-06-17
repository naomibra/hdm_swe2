function check(){
//radiobuttons
let allradiobuttons=document.getElementsByName("radio")
let gewählt= radioCheck(allradiobuttons); 
let label=document.getElementById("label1");
let fehlerausgabe=document.getElementById("errorradio")
console.log(gewählt);
if(gewählt==null){
   label.style.color="red";
   fehlerausgabe.innerHTML="Bitte auswählen";
   fehlerausgabe.style.color="red";
}
else{
    label.style.color="initial";
    fehlerausgabe.innerHTML="";
    fehlerausgabe.style.color="initial";
}
//text
let benutzertext= document.getElementsByName("textfeld")[0].value;
let texttest=checkText(benutzertext)
console.log(benutzertext);
console.log(texttest);
let feld=document.getElementsByTagName("textarea")[0];
let textlable=document.getElementById("label2")
let fehlerhinweis=document.getElementById("erorrtext");
if(texttest==false){
    feld.style.background="red";
    textlable.style.color="red";
    fehlerhinweis.innerHTML="Bitte einen Text mit mind.10 Zeichen eingeben";
    fehlerhinweis.style.color="red";
}
else{
    feld.style.background="initial";
    textlable.style.color="initial";
    fehlerhinweis.innerHTML="";
    fehlerhinweis.style.color="inital";
}
//Auswahlliste
let liste= document.getElementsByName("liste")[0].value;
let span=document.getElementById("erroroption");
let auswahllabele=document.getElementById("label3");
let listenauswahl=document.getElementsByTagName("select")[0];
if(liste=="keineauswahl"){
    span.innerHTML="Bitte auswählen!";
    span.style.color="red";
    auswahllabele.style.color="red";
    listenauswahl.style.background="red";
   
    
}
if(liste=="option1"||liste=="option2"){
    span.innerHTML="";
    span.style.color="initial";
    auswahllabele.style.color="initial";
    listenauswahl.style.background="initial";

}
}

//radio check
function radioCheck(array){
let clicked=null;
let i=0;
while(i<array.length){
if(array[i].checked==true){
    clicked=array[i];
}
i++
}
return clicked;
}

// check text
function checkText(text){
    if(text=""||text.length<10){
        return false;
    }
    return true;
}