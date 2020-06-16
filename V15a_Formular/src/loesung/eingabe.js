//button
function checkAll(){
   let nameinhalt=document.forms.formular1.elements.name.value;
    let namenspan=document.getElementById("errorname");
   namenspan.innerHTML=""
   if(nameinhalt==""){
      namenspan.innerHTML="Name bitte setzen";
      namenspan.style.color="red";
      
   }
   let mailinhalt=document.forms.formular1.elements.mail.value;
   let mailspan=document.getElementById("errormail");
   mailspan.innerHTML="";
   if(mailinhalt==""){
       mailspan.innerHTML="Bitte tragen sie eine eMail ein"
       mailspan.style.color="red";
   }
}


//Namen funktionen
function nameVaildieren(inhalt){

let namemin=minlaenge(inhalt,3);
let namemax=maxlaenge(inhalt,50);

let nspan= document.getElementById("errorname")
nspan.style.color="red";
nspan.innerHTML="";

if(namemin==false|| namemax==false){
nspan.innerHTML="Der Name muss zwischen 3 und 40 Zeichen lang sein."
}

}

function minlaenge(text,laenge){
    if(text==""|| text.length<laenge){
        return false;
        
    } 
    return true;
    
}

function maxlaenge(text,laenge){
    if(text !=""&& text.length>laenge){
        return false;
    }
    return true;
}

//Alter
function alterValidieren(inhalt){
let age=checkAlter(inhalt);
let aspan=document.getElementById("erroralter");

if(age){
    aspan.innerHTML="";
}
else{
    aspan.innerHTML="Das Alter muss zwischen 1 und 110 sein.";
    aspan.style.color="red";
}
}

function checkAlter(text){
    if(text<1||text>110){
        return false;
    }
    return true;
}

//email
function mailValidierung(inhalt){

    let maillaenge=minlaenge(inhalt,5);
    let mailsyntax=checkEmail(inhalt);
    let mspan=document.getElementById("errormail");
    mspan.innerHTML="";
    if(maillaenge && mailsyntax){
       
    }
    if(maillaenge==false||mailsyntax==false){
        
        mspan.innerHTML="Die Email ist ungültig. Bitte schreiben Sie eine andere Mail.";
        mspan.style.color="red";
    }
    

}
function checkEmail(text){
    let at="@";
    let indexat =0;
    for(let i=0; i<text.length;i++){
        if(text[i]==at){
            indexat=i;
        }
    }
    let punkt=".";
    let indexp=0;
    for(let j=0;j<text.length;j++){
        if(text[j]==punkt){
            indexp=j;
        }
    }
    if(indexat!=null && indexat<indexp){
        return true;

    }
    return false;
}