class Buch {

    constructor(autor = 'unbekannt', titel = 'unbekannt', seitenAnzahl=0, preis=0) {
        this.autor = autor;
        this.titel = titel;
        this.seitenAnzahl = seitenAnzahl;
        this.preis = preis;
    }

    toString() {
        return 'Buch [autor=' + this.autor + ', titel=' + this.titel + ', seitenAnzahl=' + this.seitenAnzahl + ', preis=' + this.preis + ']';
    }
}