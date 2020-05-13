class Autor{
    constructor(name= null,jahr=-1){
        this.nachname=name;
        this.geburtsjahr=jahr;
    }
    equals(a){
        if(this.nachname.valueOf()==a.nachname.valueOf()&& this.geburtsjahr==a.geburtsjahr){
            return true;
        }
        return false;
    }
    toString(){
        return this.nachname+" ("+this.geburtsjahr+")";
    }
}