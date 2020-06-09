function bestellen(){
    let body= document.getElementsByTagName("body")[0];
    let vs=document.forms.formular1.elements.vorspeise.checked;
    let hs=document.forms.formular1.elements.hauptspeise.checked;
    let d=document.forms.formular1.elements.dessert.checked;
    
    
    let h2=document.createElement("h2");
    h2.innerHTML="Zusammenfassung der Bestellung:";
    body.appendChild(h2);
    
    let divvs=document.createElement("div");
    if(vs){
        divvs.innerHTML="Vorspeise";
        
    }
    else{
        divvs.innerHTML="Keine Vorspeise";
    }
    

    let divhs=document.createElement("div");
    if(hs){
        divhs.innerHTML="Hauptspeise";
    }
    else{
        divhs.innerHTML="Keine Hauptspeise";
    }
    
    
    let divd=document.createElement("div");
    if(d){
        divd.innerHTML="Dessert";
    }
    else{
        divd.innerHTML="Kein Dessert";
    }
    let hauptspeisen=document.getElementsByName("haupt");
    let gewaehlt=auswahl(hauptspeisen);
    if(gewaehlt!=null && hs){
        if(gewaehlt.value=="fleisch"){
            divhs.innerHTML="Hauptspeise mit Fleisch"
        }
        if(gewaehlt.value=="fisch"){
            divhs.innerHTML="Hauptspeise mit Fisch"
        }
        if(gewaehlt.value=="vegetarisch"){
            divhs.innerHTML="Hauptspeise vegetarisch"
        }
    }
    
    body.appendChild(divvs);
    body.appendChild(divhs);
    body.appendChild(divd);


console.log(vs);
console.log(hs);
console.log(d);

}

//Hilfsfunktion
function auswahl(a){
    let ergebnis=null;
    let i=0;
    while(i<a.length && ergebnis==null){
        if(a[i].checked==true){
            ergebnis=a[i];
        }
        i++
    }
    return ergebnis;
}