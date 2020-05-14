class Name{

    constructor(vn=null,nn=null){
        this.vorname=vn;
        this.nachname=nn;
    }
    toString(){
       

       if(this.vorname==null||this.vorname==undefined){
           return this.nachname;
       }
       if(this.nachname==null||this.nachname==undefined){
           return this.vorname;
       }
       return this.vorname+" "+this.nachname;
     
    }
    equals(name){
        if(this.vorname==name.vorname&& this.nachname==name.nachname){
            return true;
        }
        return false;
    }
}

