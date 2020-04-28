let ute = new Person("Ute", 31);
let x = new Person("Hans", 28);
let y = new Person("Ute", 31);
let z = new Person("Ute", 28);
let a = new Person("Ute", 31);
let b = "Ute";

console.log("Sind ute (" + ute.toString() + ") und x (" 
    + x.toString() + ") gleich? " + (ute.equals(x)));
console.log("Sind ute (" + ute.toString() + ") und y (" 
    + y.toString() + ") gleich? " + (ute.equals(y)));
console.log("Sind ute (" + ute.toString() + ") und z (" 
    + z.toString() + ") gleich? " + (ute.equals(z)));
console.log("Sind ute (" + ute.toString() + ") und a (" 
    + a.toString() + ") gleich? " + (ute.equals(a)));
console.log("Sind ute (" + ute.toString() + ") und b (" 
    + b.toString() + ") gleich? " + (ute.equals(b)));