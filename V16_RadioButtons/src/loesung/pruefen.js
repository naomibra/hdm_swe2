//Prüfen 
function pruefen(){
    let ausgabe="";
    let body=document.getElementsByTagName("body") [0];
    //Zypern
    let z=document.getElementsByName("zypern");
    let geklicktz= clicked(z);
    if(geklicktz !=null){
        if(geklicktz.value=="ni1"){
            let divz=document.createElement("div");
            ausgabe="Richtig, die Hauptstadt von Zypern ist Nikosia";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);
        }
        else{
            let divz=document.createElement("div");
            ausgabe="Falsch, die Hauptstadt von Zypern ist Nikosia";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);

        }
    }
    if(geklicktz==null){
        let divz=document.createElement("div");
            ausgabe="Falsch, in Zeile 1 wurde nichts Ausgewählt ";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);

    }
    //Ungarn
    let u=document.getElementsByName("ungarn");
    let geklicktu= clicked(u);
    if(geklicktu !=null){
        if(geklicktu.value=="b2"){
            let divz=document.createElement("div");
            ausgabe="Richtig, die Hauptstadt von Ungarn ist Budapest";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);
        }
        else{
            let divz=document.createElement("div");
            ausgabe="Falsch, die Hauptstadt von Ungarn ist Budapest";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);

        }
    }
    if(geklicktu==null){
        let divu=document.createElement("div");
            ausgabe="Falsch, in Zeile 2 wurde nichts Ausgewählt ";
            divu.innerHTML=ausgabe;
            body.appendChild(divu);

    }
    //Rumänien
    let r=document.getElementsByName("rumaenien");
    let geklicktr= clicked(r);
    if(geklicktr !=null){
        if(geklicktr.value=="bu3"){
            let divz=document.createElement("div");
            ausgabe="Richtig, die Hauptstadt von Rumänien ist Bukarest";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);
        }
        else{
            let divz=document.createElement("div");
            ausgabe="Falsch, die Hauptstadt von Rumänien ist Bukarest";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);

        }
    }
    if(geklicktr==null){
        let divr=document.createElement("div");
            ausgabe="Falsch, in Zeile 3 wurde nichts Ausgewählt ";
            divr.innerHTML=ausgabe;
            body.appendChild(divr);

    }
    //Lettland
    let l=document.getElementsByName("lettland");
    let geklicktl= clicked(l);
    if(geklicktl !=null){
        if(geklicktl.value=="ri4"){
            let divz=document.createElement("div");
            ausgabe="Richtig, die Hauptstadt von Lettland ist Riga";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);
        }
        else{
            let divz=document.createElement("div");
            ausgabe="Falsch, die Hauptstadt von Lettland ist Riga";
            divz.innerHTML=ausgabe;
            body.appendChild(divz);

        }
    }
    if(geklicktl==null){
        let divl=document.createElement("div");
            ausgabe="Falsch, in Zeile 4 wurde nichts Ausgewählt ";
            divl.innerHTML=ausgabe;
            body.appendChild(divl);

    }
}


//Hilfsfunktion 
function clicked(a){
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