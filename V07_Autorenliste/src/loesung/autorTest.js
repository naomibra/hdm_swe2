let a1 = new Autor("Frisch",1911);
let a2 = new Autor ("Dürrenmatt",1921);
let a3 = new Autor(new String("Frisch"), 1911);
let a4 = new Autor(new String("Frisch"), 1911);

//toString
let s1=a1.toString();
let s2=a2.toString();
let s3=a3.toString();
let s4=a4.toString();
//console.log(s1,s2,s3,s4);

//zwischenfunktion true/false zu antwort
function gleichOdernicht(autor1,autor2){
    if(autor1.equals(autor2)==true){
        return "gleich";
    }
    return "nicht gleich";
}

//equals
console.log(s1+" und "+s2+"sind "+gleichOdernicht(a1,a2));
console.log(s1+" und "+s3+"sind "+gleichOdernicht(a1,a3));
console.log(s1+" und "+s4+"sind "+gleichOdernicht(a1,a4));
console.log(s2+" und "+s3+"sind "+gleichOdernicht(a2,a3));
console.log(s2+" und "+s4+"sind "+gleichOdernicht(a2,a4));
console.log(s3+" und "+s4+"sind "+gleichOdernicht(a3,a4));


