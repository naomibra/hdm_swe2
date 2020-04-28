class BachelorThesis {

    constructor() {
        this._kapitel = new Array();
        this._kapitel.push(new Kapitel("Problemstellung", 8));
        this._kapitel[0]._unterkapitel.push(new Unterkapitel("Ziel der Arbeit", 8));
        this._kapitel[0]._unterkapitel.push(new Unterkapitel("Bedeutung der Benutzerfreundlichkeit in der Arbeit", 8));

        this._kapitel.push(new Kapitel("Einführung in das Thema", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Gestaltpsychologie", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Navigation", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Konventionen", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Lesbarkeit", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Aufmerksamkeit steuern und Reizüberflutung vermeiden", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Farbwahrnehmung", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Bilder und Grafiken", 11));
        this._kapitel[1]._unterkapitel.push(new Unterkapitel("Proportionen / Aufteilung einer Fläche", 11));

        this._kapitel.push(new Kapitel("Technische Anforderungen", 18));
        this._kapitel[2]._unterkapitel.push(new Unterkapitel("Viewport 480 x 320 Pixel", 18));
        this._kapitel[2]._unterkapitel.push(new Unterkapitel("Viewport 1200 x 800 Pixel", 18));
        
        this._kapitel.push(new Kapitel("Vorausblick des Realisierungswegs", 20));
        
        this._kapitel.push(new Kapitel("Spezielle Anforderungen der Zielgruppe", 21));
        this._kapitel[3]._unterkapitel.push(new Unterkapitel("Sprache, Lese- und Schreibrichtung", 21));
        this._kapitel[3]._unterkapitel.push(new Unterkapitel("Farbenbedeutung", 21));
        this._kapitel[3]._unterkapitel.push(new Unterkapitel("Vermehrte Nutzung von mobilen Endgeräten", 21));
        
        this._kapitel.push(new Kapitel("Webnutzung", 23));

        this._kapitel.push(new Kapitel("Anforderungen", 24));
        this._kapitel[4]._unterkapitel.push(new Unterkapitel("Argumente für einen Mehrwert", 24));
        this._kapitel[4]._unterkapitel.push(new Unterkapitel("Werte und Einstellungen des Unternehmens zeigen und dabei Emotionen ansprechen", 24));
        this._kapitel[4]._unterkapitel.push(new Unterkapitel("Ausführliche Information bieten", 24));
        this._kapitel[4]._unterkapitel.push(new Unterkapitel("Verlässlichkeit und Glaubwürdigkeit des Unternehmens zeigen", 24));
        this._kapitel[4]._unterkapitel.push(new Unterkapitel("Flüchtige Betrachtung ermöglichen", 24));
        this._kapitel[4]._unterkapitel.push(new Unterkapitel("Auflistung aller Anforderungen", 24));

        this._kapitel.push(new Kapitel("Struktur", 46));
        this._kapitel[5]._unterkapitel.push(new Unterkapitel("Inhalt und Navigation", 46));
        this._kapitel[5]._unterkapitel.push(new Unterkapitel("Navigation und Tests", 46));
        this._kapitel[5]._unterkapitel.push(new Unterkapitel("Konzept 'Mobile First'", 46));
        
        this._kapitel.push(new Kapitel("Konkrete Realisierung des Projektes", 58));
        this._kapitel[6]._unterkapitel.push(new Unterkapitel("Farbkonzept", 58));
        this._kapitel[6]._unterkapitel.push(new Unterkapitel("Formkonzept", 58));
        this._kapitel[6]._unterkapitel.push(new Unterkapitel("Gestaltung der Webseite nach dem 'Mobil First' Konzept", 58));
        this._kapitel[6]._unterkapitel.push(new Unterkapitel("Anpassung der Webseite auf großen Displaygrößen", 58));
        
        this._kapitel.push(new Kapitel("Überprüfung der Anforderungen", 65));
        
        this._kapitel.push(new Kapitel("Zusammenfassung und Ausblick", 71));
    }

    liefereAlleKapitel() {
        return this._kapitel;
    }

    liefereAnzahlKapitel() {
        return this._kapitel.length;
    }
}


class Kapitel {

    constructor(ueberschrift, seitennummer) {
        this._ueberschrift = ueberschrift;
        this._seitennummer = seitennummer;
        this._unterkapitel = new Array();
    }

    liefereUeberschrift() {
        return this._ueberschrift;
    }

    liefereSeitennummer() {
        return this._seitennummer;
    }

    liefereAlleUnterkapitel() {
        return this._unterkapitel;
    }

    liefereAnzahlUnterkapitel() {
        return this._unterkapitel.length;
    }
}


class Unterkapitel {

    constructor(ueberschrift, seitennummer) {
        this._ueberschrift = ueberschrift;
        this._seitennummer = seitennummer;
    }

    liefereUeberschrift() {
        return this._ueberschrift;
    }

    liefereSeitennummer() {
        return this._seitennummer;
    }
}