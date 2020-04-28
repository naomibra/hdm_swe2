let archiv = new Archiv();

function bildWechseln() {
    let imgObject = archiv.naechstesBild();
    
    let p = document.getElementsByTagName("p")[0];
    p.innerHTML = imgObject.src;
    
    let img = document.getElementsByTagName("img")[0];
    img.src = "img/" + imgObject.src;
    img.alt = imgObject.text;
    img.title = imgObject.text;
}