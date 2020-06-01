//Schriftfarbe ändern (1)
function farbeAendern1(){
    let absaetze =document.getElementsByTagName("p");
    for(let i=0;i<absaetze.length;i++){
    absaetze[i].style.color="red";
}
}

//Schriftfarbe ändern (2)
function farbeAendern2(){
    let absaetze =document.getElementsByTagName("p");
    for(let i=0;i<absaetze.length;i++){
       if(absaetze[i]==absaetze[0]||absaetze[i]==absaetze[3]||absaetze[i]==absaetze[6]||absaetze[i]==absaetze[9]){
           absaetze[i].style.color="red";
        }
        if(absaetze[i]==absaetze[1]||absaetze[i]==absaetze[4]||absaetze[i]==absaetze[7]){
            absaetze[i].style.color="green";
         }
         if(absaetze[i]==absaetze[2]||absaetze[i]==absaetze[5]||absaetze[i]==absaetze[8]){
            absaetze[i].style.color="blue";
         }
         
    }
}

//Absätze löschen
function absatzLoeschen(){
    let body= document.getElementsByTagName("body")[0];
    let absaetze= document.getElementsByTagName("p");
    console.log(absaetze.length);
    if(absaetze.length>0){
    body.removeChild(absaetze[absaetze.length-1]);
   }
    
}
