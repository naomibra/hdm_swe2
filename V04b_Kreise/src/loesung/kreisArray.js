class KreisArray{
   constructor(){
    kreis = [];
       
   } 
   kreisHinzufuegen(a){
       this.kreis=a;
   }
   groessterUmfang(){
       let max=0;
       for(let i=0;i<this.kreis.length;i++){
           if(this.kreis[i].umfang()>max){
               max=ths.kreis[i].umfang();
           }
       }
       return max;
   }
   kleinsteFlaeche(){
    let min=0;
    for(let i=0;i<this.kreis.length;i++){
        min=this.kreis[0].flaeche();
        if(this.kreis[i].flaeche()<min){
            min=this.kreis[i].flaeche();
        }
    }
    return min;
}
    alleSkalieren(){
        for(let i=0;i<this.kreis.length;i++){
            this.kreis[i].skalieren(i+1);
        }
    }
    kreisVerschieben(index,x,y){
        

    }
}