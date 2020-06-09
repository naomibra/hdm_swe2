function auswahl(){
    let liste= document.forms.formular.liste1;
    let index=liste.selectedIndex;
    let div= document.createElement("div");
    div.innerHTML="Ausgewähltes Reiseziel ist: "+liste.options[index].innerHTML;
    let body=document.getElementsByTagName("body") [0];
    body.appendChild(div)
    
}