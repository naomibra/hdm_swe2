let x = new Person("Ute", 31);
let y = new Person("Hans", 28);
	
y = x;
x.setAlter(47);
console.log(x.alter);
console.log(y.alter);