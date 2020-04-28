let i1 = 17;
let i2 = 4;
console.log("i1: " + i1 + "\t");
console.log("i2: " + i2 + "\t");
if(i1 == i2) {
	console.log("i1 == i2");
} else {
	console.log("i1 != i2");
}
console.log();

let t1 = new String("Text");
let t2 = new String("Text");
console.log("t1: " + t1 + "\t");
console.log("t2: " + t2 + "\t");
if(t1 == t2) {
	console.log("t1 == t2");
} else {
	console.log("t1 != t2");
}
console.log();

let t3 = "Text";
let t4 = "Text";
console.log("t3: " + t3 + "\t");
console.log("t4: " + t4 + "\t");
if(t3 == t4) {
	console.log("t3 == t4");
} else {
	console.log("t3 != t4");
}
console.log();

let o1 = new Person("Ute", 31);
let o2 = new Person("Ute", 31);
console.log("o1: " + o1 + "\t");
console.log("o2: " + o2 + "\t");
if(o1 == o2) {
	console.log("o1 == o2"); 
} else {
	console.log("o1 != o2");
}
console.log();