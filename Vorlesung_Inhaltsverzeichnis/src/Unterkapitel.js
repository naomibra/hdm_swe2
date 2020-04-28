class Unterkapitel {
	
	constructor(text, s) {
		this.titel = text;
		this.seite = s;
	}
	
	liefereUeberschrift() {
		return this.titel;
	}
	
	liefereSeitennummer() {
		return this.seite;
	}
}