class BachelorThesis {
	
	constructor() {
		this.buch = new Buch();
		
		this.buch.kapitelHinzufuegen("Problemstellung", 8);
		this.buch.kapitel[0].unterkapitelHinzufuegen("Ziel der Arbeit", 9);
		this.buch.kapitel[0].unterkapitelHinzufuegen("Bedeutung der Benutzerfreundlichkeit in dieser Arbeit", 9);
		
		this.buch.kapitelHinzufuegen("Einführung in das Thema", 11);
		this.buch.kapitel[1].unterkapitelHinzufuegen("Gestaltpsychologie", 11);		
		this.buch.kapitel[1].unterkapitelHinzufuegen("Navigation", 14);
		this.buch.kapitel[1].unterkapitelHinzufuegen("Konventionen", 15);
		this.buch.kapitel[1].unterkapitelHinzufuegen("Lesbarkeit", 15);
		this.buch.kapitel[1].unterkapitelHinzufuegen("Aufmerksamkeit steuern und Reizüberflutung vermeiden", 16);
		this.buch.kapitel[1].unterkapitelHinzufuegen("Farbwahrnehmung", 16);
		this.buch.kapitel[1].unterkapitelHinzufuegen("Bilder und Grafiken", 16);
		this.buch.kapitel[1].unterkapitelHinzufuegen("Proportionen / Aufteilung einer Fläche", 17);
		
		this.buch.kapitelHinzufuegen("Technische Anforderungen", 18);
		this.buch.kapitel[2].unterkapitelHinzufuegen("Viewport 480 x 320 Pixel", 18);
		this.buch.kapitel[2].unterkapitelHinzufuegen("Viewport 1200 x 800 Pixel", 19);
		
		this.buch.kapitelHinzufuegen("Vorausblick des Realisierungswegs", 20);
		
		this.buch.kapitelHinzufuegen("Spezielle Anforderungen der Zielgruppe", 21);
		this.buch.kapitel[4].unterkapitelHinzufuegen("Sprache, Lese-und Schreibrichtung", 21);
		this.buch.kapitel[4].unterkapitelHinzufuegen("Farbenbedeutung", 22);
		this.buch.kapitel[4].unterkapitelHinzufuegen("Vermehrte Nutzung von mobilen Endgeräten", 22);
		
		this.buch.kapitelHinzufuegen("Webnutzung", 23);
		
		this.buch.kapitelHinzufuegen("Anforderungen", 24);
		this.buch.kapitel[6].unterkapitelHinzufuegen("Argumente für einen Mehrwert", 24);
		this.buch.kapitel[6].unterkapitelHinzufuegen("Werte und Einstellungen des Unternehmens zeigen und dabei Emotionen ansprechen", 29);
		this.buch.kapitel[6].unterkapitelHinzufuegen("Ausführliche Information bieten", 30);
		this.buch.kapitel[6].unterkapitelHinzufuegen("Verlässlichkeit und Glaubwürdigkeit des Unternehmens zeigen", 32);
		this.buch.kapitel[6].unterkapitelHinzufuegen("Flüchtige Betrachtung ermöglichen", 35);
		this.buch.kapitel[6].unterkapitelHinzufuegen("Auflistung aller Anforderungen", 41);
		
		this.buch.kapitelHinzufuegen("Struktur", 46);
		this.buch.kapitel[7].unterkapitelHinzufuegen("Inhalt und Navigation", 46);
		this.buch.kapitel[7].unterkapitelHinzufuegen("Navigation und Tests", 49);
		this.buch.kapitel[7].unterkapitelHinzufuegen("Konzept 'Mobil First'", 52);
		
		this.buch.kapitelHinzufuegen("Konkrete Realisierung des Projektes", 58);
		this.buch.kapitel[8].unterkapitelHinzufuegen("Farbkonzept", 58);
		this.buch.kapitel[8].unterkapitelHinzufuegen("Formkonzept", 60);
		this.buch.kapitel[8].unterkapitelHinzufuegen("Gestaltung der Webseite nach dem 'Mobil First' Konzept", 60);
		this.buch.kapitel[8].unterkapitelHinzufuegen("Anpassung der Webseite auf große Displaygrößen", 63);

		this.buch.kapitelHinzufuegen("Überprüfung der Anforderungen", 65);
		this.buch.kapitelHinzufuegen("Zusammenfassung und Ausblick", 71);
		
	}
	
	liefereAlleKapitel() {
		return this.buch.kapitel;
	}
	liefereAnzahlKapitel() {
		return this.buch.index;
	}
}