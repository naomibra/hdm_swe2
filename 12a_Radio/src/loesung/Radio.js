class Radio {
    constructor(a = 0, b = 85) {
        this.eingeschaltet = false;
        this.lautstaerke = a;
        this.ls_korrigieren();
        this.frequenz = b;
        this.fr_korrigieren();
    }

    ls_korrigieren() {
        if(this.lautstaerke < 0) {
            this.lautstaerke = 0;
        } else {
            if(this.lautstaerke > 10) {
                this.lautstaerke = 10;
            }
        }
    }

    fr_korrigieren() {
        if(this.frequenz < 85) {
            this.frequenz = 85;
        } else {
            if(this.frequenz > 110) {
                this.frequenz = 110;
            }
        }
    }

    lauter() {
        if(this.eingeschaltet) {
            this.lautstaerke++;
            this.ls_korrigieren();
        }
    }

    leiser() {
        if(this.eingeschaltet) {
            this.lautstaerke--;
            this.ls_korrigieren();
        }
    }

    an() {
        this.eingeschaltet = true;
    }

    aus() {
        this.eingeschaltet = false;
    }

    frequenzSetzen(f) {
        if(this.eingeschaltet) {
            this.frequenz = f;
            this.fr_korrigieren();
        }
    }

    toString() {
        if(!this.eingeschaltet) {
            return "--- aus ---";
        }
        return this.frequenz + " Vol: " + this.lautstaerke + "/10";
    }

}