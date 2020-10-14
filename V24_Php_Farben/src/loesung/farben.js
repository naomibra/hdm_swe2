
function farbenAendern(text){
let daten=JSON.parse(text);
let color=daten.konfig
let h1= document.getElementsByTagName("h1") [0];
let body= document.getElementsByTagName("body") [0];
body.style.background=color.farbe;
h1.style.color=color.schrift;

}

function farbenZufaelligAendern(){
    ajax = new XMLHttpRequest();
    if(ajax!=null) {
    ajax.open("POST","farben.php");
    ajax.onreadystatechange = function(){
    if(this.readyState == 4){
    if(this.status == 200){
    farbenAendern(this.responseText);
    }
    }
    }
    ajax.send(null);
    }
    else {
    alert("Ihr Browser unterstützt kein Ajax!");
    }

}