class Archiv {
	constructor() {
		this.images = new Array(
				new Bild("img_01.jpg", "Schönegg"),
				new Bild("img_02.jpg", "Rechensee"),
				new Bild("img_03.jpg", "Montenegro"),
				new Bild("img_04.jpg", "Jungfrau"),
				new Bild("img_05.jpg", "Birgg"),
				new Bild("img_06.jpg", "Eiger"),
				new Bild("img_07.jpg", "Wegweiser"),
				new Bild("img_08.jpg", "Enzian"),
				new Bild("img_09.jpg", "Como"),
				new Bild("img_10.jpg", "Allgäu"),
				new Bild("img_11.jpg", "Jungfrau"),
				new Bild("img_12.jpg", "Tara")
		);
		this.index = 0;
	}
	
	indexErhoehen() {
		this.index++;
		if(this.index >= this.images.length) {
			this.index = 0;
		}
	}

	naechstesBild() {
		this.indexErhoehen();
		return this.images[this.index];
	}
}