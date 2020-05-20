function bildAuswechseln(){
    let bild1=document.getElementById("imgElement1");
    bild1.src="../../img/img_03.jpg";
}

function altSetzen() {
    let bild= document.getElementById("imgElement1");
    bild.alt="Das ist Bild 1";
    console.log(bild.alt);
}
function titleHinzufuegen(){
    let bild=document.getElementById("imgElement2");
    bild.setAttribute("title","Bild von einem See");
console.log(bild.title);
}
