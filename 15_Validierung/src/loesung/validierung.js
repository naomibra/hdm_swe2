function checkAll(){
//name
let name=document.getElementById("name").value;
let lname=document.getElementsByTagName("label")[0];
let fehlermeldungname=document.getElementById("errorname");
fehlermeldungname.innerHTML="";
fehlermeldungname.style.color="initial";
lname.style.color="initial";
if(exist(name)==false){
   lname.style.color="red"
   fehlermeldungname.innerHTML="Bitte Namen eintragen";
   fehlermeldungname.style.color="red";
}
//anschrift
let anschrift=document.getElementById("anschrift").value;
let lanschrift=document.getElementsByTagName("label")[1];
let fehlermeldunganschrift=document.getElementById("erroranschrift");
lanschrift.style.color="initial";
fehlermeldunganschrift.innerHTML="";
fehlermeldunganschrift.style.color="initial";
if(exist(anschrift)==false){
    lanschrift.style.color="red";
    fehlermeldunganschrift.innerHTML="Bitte Anschrift eintragen";
fehlermeldunganschrift.style.color="red";
}
//mail
let mail=document.getElementById("email").value;
let lmail= document.getElementsByTagName("label")[2];
let mailinput=document.getElementById("email");
let fehlermeldungmail=document.getElementById("erorrmail");
lmail.style.color="initial";
mailinput.style.background="initial";
fehlermeldungmail.innerHTML="";
fehlermeldungmail.style.color="initial";
if(maillaenge(mail)==false||checkmail(mail)==false||exist(mail)==false){
    lmail.style.color="red";
    mailinput.style.background="red";
    fehlermeldungmail.innerHTML="Das Emailfeld ist ein Pflichtfeld (Muss min.10 Zeichen lang sein und ein @ beinhalten)";
fehlermeldungmail.style.color="red";
}

//Betreff
let auswahl=document.forms.kontaktformular.auswahl.value;
let lauswahl=document.getElementById("betreff");
let liste=document.getElementsByTagName("select")[0];
let fehlermeldungbetreff=document.getElementById("errorbetreff");
lauswahl.style.color="initial";
liste.style.background="initial";
fehlermeldungbetreff.innerHTML="";
fehlermeldungbetreff.style.color="initial";

if(auswahl=="bittewählen"){
    lauswahl.style.color="red";
    liste.style.background="red";
    fehlermeldungbetreff.innerHTML="Bitte treffen Sie eine Auswahl";
    fehlermeldungbetreff.style.color="red";
}

//radiobuttons - Newsletter
let buttons= document.getElementsByName("news");
let lnews=document.getElementsByTagName("label")[4];
let fehlermeldungnewsletter=document.getElementById("errornews");
lnews.style.color="initial";
fehlermeldungnewsletter.innerHTML="";
fehlermeldungnewsletter.style.color="initial";
if(janein(buttons)==null){
    fehlermeldungnewsletter.innerHTML="Treffen sie eine Auswahl zum Newsletter";
    fehlermeldungnewsletter.style.color="red";
    lnews.style.color="red";
}
//textfeld
let textfeld=document.getElementById("text").value;
let ltext=document.getElementsByTagName("label")[5];
let tfeld=document.getElementsByTagName("textarea")[0];
ltext.style.color="initial";
tfeld.style.background="initial";

if(checklaenge(textfeld)==false){
    ltext.style.color="red";
    tfeld.style.background="red";
 
}

}

//Funktionen

//textfelder exestieren

function exist(inhalt){
    if(inhalt==""||inhalt==null){
        return false;
    }
    return true;
}




//radiobutton funktion

function janein(array){
    let gewaehlt= null;
    let i=0;
    while (i<array.length && gewaehlt==null){
        if(array[i].checked==true){
            gewaehlt= array[i];
        }
        i++
    }
    return gewaehlt;
}

// Textfeld funktion

function checklaenge(inhalt){
    if(inhalt.length<200){
        return false;
    }
    return true;
}

//email
function checkmail(mail){
    if (mail.indexOf("@") == -1) {
        return false;
        }
        return true;
}

function maillaenge(mail){
    if(mail.length<10){
        return false;
    }
    return true; 
}

//function keyuptext

function textkeyup(inhalt){
let ltext=document.getElementsByTagName("label")[5];
let tfeld=document.getElementsByTagName("textarea")[0];
ltext.style.color="initial";
tfeld.style.background="initial";
console.log(checklaenge(inhalt));
if(checklaenge(inhalt)==false){
    ltext.style.color="red";
    tfeld.style.background="red";
}
}