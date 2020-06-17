function check(){
    //radiobuttons
    let allradio=document.getElementsByName("radio");
    let rbutton=radioCheck(allradio);
    console.log(rbutton);
    let spanradio=document.getElementById("errorradio");
    spanradio.innerHTML="";
    if(rbutton==null){
        spanradio.innerHTML="Bitte Bedingung wählen!"
        spanradio.style.color="red";
    }
    //options
    let auswahl=document.getElementsByName("liste")[0].value;
    let spanauswahl=document.getElementById("erroroption");
    spanauswahl.innerHTML="";
    if(auswahl=="keineauswahl"){
        spanauswahl.innerHTML="Bitte eine Zahl auswählen";
        spanauswahl.style.color="red";
    }
    //match?
    let spanwrong=document.getElementById("allwrong");
    spanwrong.innerHTML="";
    if(rbutton!=null){
    if(rbutton.value=="gerade"&& (auswahl=="11"||auswahl=="13")){
    spanwrong.innerHTML=auswahl+" ist nicht "+rbutton.value+"! Try again!";
    spanwrong.style.color="red";
    }
    if(rbutton.value=="ungerade"&& (auswahl=="12"||auswahl=="14")){
    spanwrong.innerHTML=auswahl+" ist nicht "+rbutton.value+"! Try again!";
    spanwrong.style.color="red";
    }
}
}

//radio check
function radioCheck(array){
    let clicked=null;
    let i=0;
    while(i<array.length){
    if(array[i].checked==true){
        clicked=array[i];
    }
    i++
    }
    return clicked;
    }