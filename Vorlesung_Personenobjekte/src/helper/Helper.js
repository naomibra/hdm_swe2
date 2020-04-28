//Funktion wird benötigt, um die Werte der "Zufallszahlen" zu Testzwecken selbst zu deifnieren
//hier definierte Reihenfolge: 
//71, 98, 20, 98, 76, 85, 87, 58, 18, 79, 9, 27, 67, 7, 88, 97, 2, 12, 77, 45, 56, 49, 80, 21, 48, 59, 
//76, 5, 66, 69, 62, 26, 11, 83, 17, 21, 62, 69, 96, 13, 78, 79, 25, 1, 3, 89, 73, 45, 47, 25, 29, 27, 
//25, 11, 45, 49, 65, 73, 38, 90, 83, 19, 56, 26, 28, 49, 80, 73, 15, 91, 55, 23, 28, 54, 18, 7, 20, 79, 
//88, 11, 12, 29, 65, 91, 24, 41, 82, 99, 70, 97, 88, 34, 18, 48, 62, 88, 7, 18, 94, 34, 26, 27, 89, 78, 
//65, 58, 82, 18, 43, 57, 49, 4, 18, 81, 35, 62, 2, 48, 96, 11, 15, 13, 97, 13, 60, 91, 30, 38, 26, 94, 
//97, 84, 66, 25, 69, 67, 86, 48, 80, 40, 72, 5, 55, 79, 45, 69, 44, 67, 51, 23, 50, 20, 0, 80, 88, 15, 
//51, 24, 19, 25, 93, 50, 90, 33, 98, 92, 50, 26, 0, 49, 91, 59, 90, 38, 66, 52, 90, 76, 22, 47, 49, 19, 
//81, 85, 21, 76, 29, 77, 18, 100, 8, 62, 43, 13, 55, 30, 5, 21, 1, 2, 9

var seed = 1;
function random() {
	var x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}

const names = [ "Michael", "Laura", "Elias", "Julia", "Kevin", "Emma", "Luca",
		"Anna", "Alexander", "Lena", "Liam", "Lisa", "Marcel", "Vanessa",
		"Lea", "Leo", "Michael", "Daniel", "Mila" ];

function getRandomNumber(min, max) {
	return Math.floor(random() * (max - min + 1)) + min;
}

function getNextName() {
	let index = getRandomNumber(0, 100);
	index = index % (names.length-1);
	return names[index];
}