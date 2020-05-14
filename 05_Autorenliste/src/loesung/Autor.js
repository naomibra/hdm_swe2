class Autor{
    constructor(vname,nname,gjahr=-1,sjahr=-1){
        
        this.name=new Name(vname,nname);
        this.geburtsjahr=gjahr;
        this.sterbejahr=sjahr;

    }
    getGeburtsjahr(){
        if(this.geburtsjahr==-1){
            return "*"
        }
        return this.geburtsjahr
    }

    getSterbejahr(){
        if(this.sterbejahr==-1){
            return "*"
        }
        return this.sterbejahr
    }


    toString(){
        
        return this.name.toString()+" "+this.getGeburtsjahr()+" "+this.getSterbejahr();
    }

    equals(autor){
        if(this.name.equals(autor.name)==true&& this.geburtsjahr==autor.geburtsjahr&& this.sterbejahr==autor.sterbejahr){
            return true;
        }
        return false;
    }
}
