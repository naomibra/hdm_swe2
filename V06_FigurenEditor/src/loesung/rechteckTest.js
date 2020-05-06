//Rechtecke
let r1= new Rechteck(10,5,12,21);
console.log(r1.toString());

let r2= new Rechteck(34,5,92,40);
console.log(r2.toString());

let r3= new Rechteck(11,9,9,2);
console.log(r3.toString());

//array
let figuren =new Array();
figuren[0]=r1;
figuren[1]=r2;
figuren[2]=r3;
console.log(figuren);

//alle Figuren
 function alleFigurenAnzeigen(a){
     let text="Das sind alle Figuren: "+"\n";
    for(let i=0;i<a.length;i++){
        text =text+a[i].toString()+"\n";
        
    }
return text;
 }

 //Ausgabe aller Figuren
let ansicht=alleFigurenAnzeigen(figuren);
 console.log(ansicht);