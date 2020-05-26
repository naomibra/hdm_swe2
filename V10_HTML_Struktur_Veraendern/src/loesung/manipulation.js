//Zeilen zählen
function zeilenZaehlen(){
    let zeilen =document.getElementsByClassName("row");
    //console.log(zeilen.length);
    let ausgabe= document.createElement("h2");
    let text=document.createTextNode("Es gibt "+zeilen.length+" Zeilen");
    ausgabe.appendChild(text);
    let tabelle=document.getElementById("table") ;
    tabelle.appendChild(ausgabe);
}
//Elemente löschen
 
 let counter=0;
function zellenLoeschen(){
    counter++; 
    let zeile=document.getElementsByClassName("row");
    if(counter<zeile.length){
    for(let i=0;i<zeile.length;i++){
        let spalte2 =zeile[i].children[1];  
        zeile[i].removeChild(spalte2);
    }
   
   }
}

//Tablenenzeilen einfärben
function zebraMuster(){
    let farben = ["green","yellow","red","blue"];
    let farbe=farben[Math.floor(Math.random() * (farben.length-0)+0 )]
    console.log(farbe);
    let zeile =document.getElementsByClassName("row");
    
    for(let i=0;i<zeile.length;i=i+2){
    zeile[i].style.background=farbe; 
}
    
}


