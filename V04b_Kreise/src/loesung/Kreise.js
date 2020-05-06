class Kreis{
    constructor(x,y,r,colour){
        this.zentrumX=x;
        this.zentrumY=y;
        this.radius=r;
        this.farbe=colour;
    }

    verschieben(ho,ver){
        this.zentrumX=this.zentrumX+ho;
        this.zentrumY=this.zentrumY+ver;

    }
        skalieren(faktor){
            this.radius= this.radius*faktor;
        }

    umfang(){
        let u= 2*Math.PI* this.radius;
        return u;
    }
    flaeche(){
        let a=Math.PI*this.radius*this.radius;
        return a;
    }
    toString(){
        let text="[Kreis: "+"zentrumX: "+this.zentrumX+","+" zentrumY: "+this.zentrumY+","+" Radius: "+this.radius+","+" Farbe: "+this.farbe+"]";
        return text;
    }
}