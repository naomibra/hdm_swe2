let p1 = new Person();
p1.name = "Ute";
p1.alter = 31;
let p2 = new Person();
p2.name = "Hans";
p2.alter = 28;

let s = p1.toString();
console.log(s); 

s = p2.toString();
console.log(s); 

p1.erhoeheAlter();
s = p1.toString();
console.log(s); 

let g = p1.equals(p2);
console.log("Sind p1 und p2 gleich?:" + g);

