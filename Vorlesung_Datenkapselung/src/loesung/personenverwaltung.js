let a = new Person("Ute", 31);
console.log(a.toString());	//Ausgabe: Ute (31);

//erlaubt
a.alter = 35;
console.log(a.toString());	//Ausgabe: Ute (35);
	
//nicht erlaubt bzw. keine Auswikrung
a.alter = 28;
console.log(a.toString());	//Ausgabe: Ute (35);

//nicht erlaubt bzw. keine Auswirkung
a.name = "Anna";
console.log(a.toString());	//Ausgabe: Ute (35);
