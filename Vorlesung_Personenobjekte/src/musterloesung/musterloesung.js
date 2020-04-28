let p1 = new Person();
p1.name = "Ute";
p1.alter = 31;
let p2 = new Person();
p2.name = "Hans";
p2.alter = 28;
let p3 = new Person();
p3.name = "Klaus";
p3.alter = 85;

console.log(p1.toString()); 
console.log(p2.toString());
console.log(p3.toString());

console.log("Sind gleich: ?" + p1.equals(p2));

console.log("ÄlterePerson: " + aelterePerson(p1, p2).toString());
console.log("JüngerePerson: " + juengerePerson(p1, p2).toString());
console.log("Sind p1 und p2 gleich?:" + sindGleich(p1,p2));

// // Fehlt in Aufgabenstellung
// p1.erhoeheAlter();
// console.log(p1.toString()); 

function aelterePerson(p1, p2) {
    if (p1.alter <= p2.alter) {
        return p2;
    } else {
        return p1;
    }
}

function juengerePerson(p1, p2) {
    if (p1.alter >= p2.alter) {
        return p2;
    } else {
        return p1;
    }
}

function sindGleich(p1, p2) {
    if (p1.equals(p2)) {
        return true;
    }
    return false;
}