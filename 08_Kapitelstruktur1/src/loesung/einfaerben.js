function h1Dekoration() {
	let h1 = document.getElementsByTagName("h1")[0];
	h1.style.fontSize = "50px";
	h1.style.textDecoration = "underline";
} 

function kapitelBearbeiten() {
	
	let divs = document.getElementsByTagName("div");
	let fm = new FarbManagement(divs.length);
	for (let index = 0; index < divs.length; index++) {
		let div = divs[index];
		let h2 = div.getElementsByTagName("h2")[0];
		h2.style.backgroundColor = fm.bestimmeFarbe(h2, index);

		let h3s = div.getElementsByTagName("h3");
		for (let index2 = 0; index2 < h3s.length; index2++) {
			let h3 = h3s[index2];
			h3.style.backgroundColor = fm.bestimmeFarbe(h3, index);

			h3.innerHTML = (index + 1) + "." + (index2  + 1)  + 
				". " + h3.innerHTML + " " + (index  + 1) + "." + (index2  + 1);
		}

		let ps = div.getElementsByTagName("p");
		for (let index3 = 0; index3 < ps.length; index3++) {
			let p = ps[index3];
			p.style.backgroundColor = fm.bestimmeFarbe(p, index);
		}

		h2.innerHTML = (index  + 1) + ". " + h2.innerHTML + " " + (index  + 1);

	}
}

h1Dekoration();

kapitelBearbeiten();