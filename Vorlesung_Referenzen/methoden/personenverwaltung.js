let x = new Person("Ute", 31);
let y = new Person("Hans", 28);

alterSetzen(x);
alterSetzen(y);



console.log(x.toString());
console.log(y.toString());

function alterSetzen(x) {
	x.setAlter(100);
}