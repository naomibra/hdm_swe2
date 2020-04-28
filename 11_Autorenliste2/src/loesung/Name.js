class Name {

    constructor(vorname = null, nachname = null) {
       this.vorname = vorname;
       this.nachname = nachname;
    }

    toString() {
        if (this.vorname == null) {
            var vorname = '';
        } else {
            var vorname = this.vorname;
        }

        if (this.nachname == null) {
            var nachname = '';
        } else {
            var nachname = ' ' + this.nachname;
        }

        return vorname + " " + nachname;
    }

    equals(name) {                
        if (name.vorname == this.vorname && name.nachname == this.nachname) {
            return true;
        } else {
            return false;
        }
    }
}

