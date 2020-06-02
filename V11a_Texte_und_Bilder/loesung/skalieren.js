//Bild 1 vergrößern
function vergroessern(bild1){
    bild1.style.width="80%";
}
//Bild 1 normal
function normalzustand(bild1){
bild1.style.width="30%";
}

//Bild 2 zoom
function zoom(bild2){
   bild2.style.width="150%";
   bild2.style.top="25%";
   bild2.style.botton="25%";
   bild2.parentNode.style.overflow="hidden";
}
//Bild 2 normal
function standard(bild2){
   bild2.style.width="100%";
   bild2.style.top="0%";
   bild2.style.botton="0%";
   bild2.parentNode.style.overflow="visible";
}