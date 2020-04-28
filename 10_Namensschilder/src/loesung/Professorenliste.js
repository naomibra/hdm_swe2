class Professorenliste {
    constructor() {
        this.professoren = [
            new Professor("Barbara Dörsam", "Software-Entwicklung für Medienapplikationen"),
            new Professor("Arno Hitzges", "e-services"),
            new Professor("Marko Hedler", "Publishing, Cross-Media-Systeme, XML-Technologien"),
            new Professor("Ronald Schaul", "ColorManagement, Digitale Fotografie, Druck- und Medienvorstufe")
        ]
    }

    laenge() {
        return this.professoren.length;
    }

    nameFuerIndex(i) {
        if(i > 0 && i < this.professoren.length)
            return this.professoren[i].name;
        return null;
    }

    gebietFuerIndex(i) {
        if(i > 0 && i < this.professoren.length)
            return this.professoren[i].gebiet;
        return null;
    }
}