class Radio{
    constructor(la=0,fe=85.0){
        if(la<0){
            la=0
        }
        if(la>10){
            la=10
        }
        if(fe<85.0){
            fe=85.0;
        }
        if(fe>110.0){
            fe=110.0;
        }
        this.eingeschaltet=false;
        this.lautstaerke=la;
        this.frequenz=fe;
    }
    lauter(){
        if(this.eingeschaltet==true &&this.lautstaerke<10){
            this.lautstaerke++;
        }
    }
    leiser(){
        if(this.eingeschaltet==true && this.lautstaerke!=0){
            this.lautstaerke--;
        }
    }
    an(){
        this.eingeschaltet=true;
    }
    aus(){
        this.eingeschaltet=false;
    }
    toString(){
        let text;
        if(this.eingeschaltet==false){
             text="---aus----"
        }
        text= this.frequenz+", Vol: "+this.lautstaerke+"/10";
    }
    frequenzSetzen(f){

        if(this.eingeschaltet==true && f<85.0){
            this.frequenz=85.0;

        }
        if(this.eingeschaltet==true && f>110.0){
            this.frequenz=110.0;

        }
        if(this.eingeschaltet==true && f>85.0 && f<110.0){
            this.frequenz=f;

        }
        
    }

}