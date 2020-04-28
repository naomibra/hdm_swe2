class Bild {
	constructor(src, text) {
		this.src = src;
		this.text = text;
	}
	
	get title() {
		return this.text;
	}
}