class Punkt {

    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }

    quadrant(){
        if ((this.x<0) &&(this.y<0)) {
            return 3;
        }
        if ((this.x<0) &&(this.y>0)) {
            return 2;
        }
        if ((this.x>=0) &&(this.y>=0)) {
            return 1;
        }
        if ((this.x>0) &&(this.y<0)) {
            return 4;
        }
        

    }

    entfernungVomUrsprung(){
        let entfernung = (this.x* this.x) +(this.y*this.y);
        return Math.round(Math.sqrt(entfernung));
    }

}