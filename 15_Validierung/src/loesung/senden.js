function send(){
    let body=document.getElementsByTagName("body") [0];
    let div=document.getElementsByTagName("div");
    //Text vales
    let n=document.forms.kontaktformular.elements.name.value;
    let anschrift=document.forms.kontaktformular.elements.anschrift.value;
    let mail=document.forms.kontaktformular.elements.email.value;
   //Betreff value
    let wahl=document.forms.kontaktformular.auswahl.value;
    //   Newsletter values
    let gruppe=document.getElementsByName("news");
    let antwort=janein(gruppe); 
    //Nachricht value
    let text=document.forms.kontaktformular.text.value

    //alles neu
   if(body.children.length==1){
        let divn=document.createElement("div");
        divn.innerHTML=n;
        body.appendChild(divn);

        let diva=document.createElement("div");
        diva.innerHTML="Anschrift: "+anschrift;
        body.appendChild(diva);

        let divmail=document.createElement("div");
        divmail.innerHTML="eMail: "+mail;
        body.appendChild(divmail);
    //NEWSLETTER
   
    let divantwort=document.createElement("div");
    if(antwort!=null){
        if(antwort.value=="ja"){
            divantwort.innerHTML="Sie haben den Newsletter abonniert."
           body.appendChild(divantwort);
        }
        if(antwort.value=="nein"){
            divantwort.innerHTML="Sie haben den Newsletter nicht abonniert."
           body.appendChild(divantwort);
        }
    }
    else{
        divantwort.innerHTML="Sie haben die Newsletterangabe vergessen."
           body.appendChild(divantwort);

    }
//BETREFF
        
    
        let divw=document.createElement("div")
        if(wahl=="bittewählen"){
            divw.innerHTML="Es wurde kein Betreff gewählt."
            body.appendChild(divw);
        }
        if(wahl=="anfrage"){
            divw.innerHTML="Betreff: Anfrage ";
            body.appendChild(divw);
        }
        if(wahl=="bestellung"){
            divw.innerHTML="Betreff: Bestellung ";
            body.appendChild(divw);
        }
        if(wahl=="hinweis"){
            divw.innerHTML="Betreff: Hinweis ";
            body.appendChild(divw);
        }


//Nachricht
let divtext=document.createElement("div");
if(text!=null){
divtext.innerHTML="Ihre Nachricht: "+text;
body.appendChild(divtext);
}
if(text==""){
divtext.innerHTML="Sie haben keinen Text geschrieben";
body.appendChild(divtext);
}
}
//Bereits gefüllt
if(body.children.length>1){
body.children[1].innerHTML=n;
body.children[2].innerHTML=anschrift;
body.children[3].innerHTML=mail;
if(antwort!=null){
    if(antwort.value=="ja"){
        body.children[4].innerHTML="Sie haben den Newsletter abonniert."
       
    }
    if(antwort.value=="nein"){
        body.children[4].innerHTML="Sie haben den Newsletter nicht abonniert."
       
    }
}
else{
    body.children[4].innerHTML="Sie haben die Newsletterangabe vergessen."
       

}
if(wahl=="bittewählen"){
    body.children[5].innerHTML="Es wurde kein Betreff gewählt."
   
}
if(wahl=="anfrage"){
    body.children[5].innerHTML="Betreff: Anfrage ";
   
}
if(wahl=="bestellung"){
    body.children[5].innerHTML="Betreff: Bestellung ";
    
}
if(wahl=="hinweis"){
    body.children[5].innerHTML="Betreff: Hinweis ";
    
}
}

if(text!=null){
    body.children[6].innerHTML="Ihre Nachricht: "+text;
    body.appendChild(divtext);
    }
    if(text==""){
    body.children[6].innerHTML="Sie haben keinen Text geschrieben";
    
    }

}



//hilfsfunktion ja/nein
function janein(a){
    let picked=null;
    let i=0;
    while(i<a.length && picked==null){
        if(a[i].checked==true){
            picked=a[i]
        }
        i++;
    }
    return picked;
}

