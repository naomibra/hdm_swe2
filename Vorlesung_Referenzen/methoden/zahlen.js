let a = 5;
let b = -5;

let z = betraegeAddieren(a, b);

console.log("a: " + a);
console.log("b: " + b);
console.log("z: " + z);


function betraegeAddieren(a, b) {
	let z;
	if (a < 0) {
		a = -1 * a;
	}
	if (b < 0) {
		b = -1 * b;
	}
	z = a + b;
	return z;
}