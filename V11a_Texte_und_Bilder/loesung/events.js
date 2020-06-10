// Neues Bild

 function neuesBild(){
    let body= document.getElementsByTagName("body") [0]
    let bildanzahl= document.getElementsByTagName("figure");
    let aktuellebildzahl= bildanzahl.length+1;
    let nfigure= document.createElement("figure");
    let bild =document.createElement("img");
    bild.alt= "Bild 0"+(aktuellebildzahl);
    let caption =document.createElement("figcaption");
    caption.innerHTML=bild.alt;
    bild.src="../img/img_0"+aktuellebildzahl+".jpg";    
    if(aktuellebildzahl<10){
           
    nfigure.appendChild(bild);
    nfigure.appendChild(caption);
    body.appendChild(nfigure);
 }
 }
//Bildentfernen
 function bildEntfernen(){
     let body= document.getElementsByTagName("body")[0];
     let figure=document.getElementsByTagName("figure");
     if(figure.length>2){
         body.removeChild(figure[figure.length-1]);
     }
 }
 //Übeschrift rot
 function einfaerben(){
     let figcaption= document.getElementsByTagName("figcaption");
     for(let i=0;i<figcaption.length;i++){
         figcaption[i].style.color="red";
     }
 }
 //Überschrift abwechselnd
 function abwechselndEinfaerben(){
    let figcaption= document.getElementsByTagName("figcaption");
    for(let i=0;i<figcaption.length;i++){
        if(i==0||i==3||i==6||i==9){
        figcaption[i].style.color="red";
        }
        if(i==1||i==4||i==7){
            figcaption[i].style.color="green";
            }
        if(i==2||i==5||i==8){
            figcaption[i].style.color="blue";
            }
    }

 }
