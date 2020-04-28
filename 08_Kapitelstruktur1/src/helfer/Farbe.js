class Farbe {
	
	constructor(i) {
		let farbPalette = [["rgb(172, 15, 38)", "rgb(247, 159, 172)", "rgb(251, 207, 213)"], 
			["rgb(49, 133, 156)", "rgb(147, 205, 221)", "rgb(219, 238, 244)"], 
			["rgb(119, 147, 60)", "rgb(195, 214, 155)", "rgb(235, 241, 222)"]];
		
		i = i % farbPalette.length;
		this.farbeH2 = farbPalette[i][0];
		this.farbeH3 = farbPalette[i][1];
		this.farbeP = farbPalette[i][2];
	}
}