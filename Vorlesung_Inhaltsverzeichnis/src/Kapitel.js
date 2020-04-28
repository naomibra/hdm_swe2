class Kapitel {
	
	constructor(text, s) {
		this.titel = text;
		this.seite = s;
		this.uk = new Array();
		this.uIndex = 0;
	}
	
	unterkapitelHinzufuegen(text, s) {
		if(uIndex < uk.length) {
			this.uk.push(new Unterkapitel(text, s));
			this.uIndex++;
		}
	}
	
	liefereUeberschrift() {
		return this.titel;
	}
	
	liefereSeitennummer() {
		return this.seite;
	}
	
	liefereAlleUnterkapitel() {
		return this.uk;
	}
	
	liefereAnzahlUnterkapitel() {
		return this.uIndex;
	}
}