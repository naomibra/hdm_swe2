class Buch {
	
	constructor() {
		this.kapitel = new Array();
		this.index = 0;
	}
	
	kapitelHinzufuegen(text, s) {
		this.kapitel.push(new Kapitel(text, s));
		this.index++;
	}
}
