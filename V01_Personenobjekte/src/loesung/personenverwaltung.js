//p1
let p1 = new Person();
p1.name= "Anna";
p1.alter= 38;
//p2
let p2 = new Person();
p2.name= "Tom";
p2.alter=15;
//p3
let p3 =new Person();
p3.name="Ute"
p3.alter=75;

console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());

//ältere Person

function aelterePerson(a, b){
    if(a.alter>b.alter){
        return a;
    }
    else if(b.alter>a.alter){
        return b;
    }
    else if(a.alter===b.alter){
        return b;
    }
    }

//jüngere Person
   function juengerePerson(a, b){
    if(a.alter<b.alter){
        return a;
    }
    else if(b.alter<a.alter){
        return b;
    }
    else if(a.alter===b.alter){
        return b;
    }
   }
//Gleiche Persona?
function sindGleich(a, b){
if(a.equals(b)== true){
return true;
}
return false;
}

//tests
let test= aelterePerson(p1,p2);
console.log(test.toString()+" ist die ältere Person");

let test2 =juengerePerson(p2,p3);
console.log(test2.toString()+" ist die jüngere Person")

let test3 =sindGleich(p1,p1);
console.log("Sind die personen gleich? "+test3);

let test4 =sindGleich(p1,p2);
console.log("Sind die personen gleich? "+test4);