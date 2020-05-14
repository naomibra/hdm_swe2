//Namen
let p1= new Name ("Naomi","Braeuning");
let p2= new Name ("Pipi","Langstrumpf");
let p3= new Name ("Hulk");
let p4= new Name(null,"Macdonald")
let p5= new Name ("Naomi","Braeuning");

//Ausgabe Namen
console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());
console.log(p4.toString());
console.log(p5.toString());

//Vergleich
console.log(p1.equals(p2));
console.log(p1.equals(p5));


//Autoren

let a1= new Autor(p1.vorname,p1.nachname,1998);
let a2= new Autor(p2.vorname,p2.nachname,2010);
let a3= new Autor(p3.vorname,null,1970,1970); //??
let a4= new Autor(undefined,p4.nachname,undefined,1877);//??
let a5= new Autor("hanna","mueller",1009,2020);
let a6= new Autor(p5.vorname,p5.nachname,1998);

//Ausgabe Autoren
console.log(a1.toString());
console.log(a2.toString());
console.log(a3.toString());
console.log(a4.toString());
console.log(a5.toString());
console.log(a6.toString());

//Vergleich Autoren
console.log(a1.equals(a2));
console.log(a1.equals(a1));

//Duplikate Autoren
console.log(sindDuplikate(a1,a1));//muss false
console.log(sindDuplikate(a1,a2));
console.log(sindDuplikate(a1,a6));
