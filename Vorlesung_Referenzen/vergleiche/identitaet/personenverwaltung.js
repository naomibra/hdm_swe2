let ute = new Person("Ute", 31);
let x = new Person("Hans", 28);
let y = new Person("Ute", 31);
let z = new Person("Ute", 28);
let a = new Person("Ute", 31);
let b = "Ute";

console.log("Sind ute (" + ute.toString() + ") und x (" 
    + x.toString() + ") identisch? " + (ute == x));
console.log("Sind ute (" + ute.toString() + ") und y (" 
    + y.toString() + ") identisch? " + (ute == y));
console.log("Sind ute (" + ute.toString() + ") und z (" 
    + z.toString() + ") identisch? " + (ute == z));
console.log("Sind ute (" + ute.toString() + ") und a (" 
    + a.toString() + ") identisch? " + (ute == a));
console.log("Sind ute (" + ute.toString() + ") und b (" 
    + b.toString() + ") identisch? " + (ute == b));