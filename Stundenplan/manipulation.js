function alleAnfangszeiten() {
	let zeiten = new Array();
	zeiten.push("8:15");
	zeiten.push("10:00");
	zeiten.push("11:45");
	zeiten.push("13:15");
	zeiten.push("14:15");
	zeiten.push("16:00");
	return zeiten;
}

//Spalte 1
let tabelle= document.getElementsByTagName("table")[0]
//let z0=document.getElementsByTagName("tr")[0]
let z1=document.createElement("tr");
let mo1=document.createElement("th");
mo1.innerHTML="hallo";
//let text1=document.createTextNode("8:15")
for(let i=0;i<6;i++){
tabelle.appendChild[i](z1);

}