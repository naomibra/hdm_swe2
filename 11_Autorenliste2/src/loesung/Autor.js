class Autor {

    constructor(vorname, nachname, geburtsjahr = -1, sterbejahr = -1, bild) {
        this.name = new Name(vorname, nachname);
        this.geburtsjahr = geburtsjahr;
        this.sterbejahr = sterbejahr;
        if(bild != undefined) {
            this.bild = bild;
        } else {
            this.bild = "placeholder.jpg";
        }
    }

    getGeburtsjahr() {
        let result = '*';
        if (this.geburtsjahr != -1) {
            result = this.geburtsjahr;
        };
        return result;
    }

    getSterbejahr() {
        let result = '*';
        if (this.sterbejahr != -1) {
            result = this.sterbejahr;
        }
        return result;
    }

    getName() {
        return this.name.toString();
    }

    toString() {   
        return this.name.toString() + ' (' + this.getGeburtsjahr() + ' - ' + this.getSterbejahr() + ')';
    }

    equals(autor) {
        if (this.name.equals(autor.name) && this.geburtsjahr == autor.geburtsjahr && this.sterbejahr == autor.sterbejahr) {
            return true;
        } else {
            return false;
        }
    }
}