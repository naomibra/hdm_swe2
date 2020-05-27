let panzahl=0;
//Absatz am Ende
function absatzAmEnde (){
   panzahl++
    let absaetze = document.getElementById("absaetze");
    let p = document.createElement("p");
    p.classList.add("rot");
    p.innerHTML= "Absatz Nr "+panzahl;
    absaetze.appendChild(p);
}


//Absatz am Anfang
function absatzAmAnfang(){
    panzahl++
    let absaetze = document.getElementById("absaetze");
    let bp= document.getElementsByTagName("p")[0];
    let p = document.createElement("p"); 
    p.classList.add("blau");
    
   absaetze.insertBefore(p,bp);
   
   p.innerHTML="Absatz Nr "+panzahl;
 
    
    if(bp==true){
    absaetze.appendChild(p);
    p.innerHTML="Absatz Nr"+1;
   }

}

function absatzInDerMitte(){
    panzahl++
    let bp=Math.round(panzahl/2)-1;
    console.log(bp);
    let absaetze = document.getElementById("absaetze");
    
    let p = document.createElement("p");
    
    if(absaetze.children[bp]==null){
    
    p.classList.add("gruen");
}
else{
    
    p.classList.add("rot");
}
p.innerHTML="Absatz Nr "+panzahl;
    
    absaetze.insertBefore(p,absaetze.children[bp]);
    
}
