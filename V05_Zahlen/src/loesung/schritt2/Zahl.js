class Zahl{
    constructor(int){
        this.wert=int;
    }
    addieren(zahl){
        return this.wert=this.wert+zahl.wert;

    }
    wertAddieren(int){
       return this.wert+int;
    }
    toString(){
        return this.wert;
    }
}