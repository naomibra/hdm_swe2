function ueberschriftAendern(){
    let ueberschrift=document.getElementsByTagName("h1");
   
        ueberschrift[0].innerHTML="Meine neue Überschrift"

}
function hintergrundEinfaerben(){
    let hg= document.getElementById("id1");
    hg.style.background="cyan"
}

function tabelleEinfaerben(){
    let spalte =document.getElementsByClassName("row");
    for(let i=0;i<spalte.length;i++)
    spalte[i].children[i].style.background="red";
}