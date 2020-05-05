//p1
let p1 = new Punkt;
p1.x =18;
p1.y =28;
let position = p1.quadrant();
let distanz = p1.entfernungVomUrsprung();
console.log("der Punkt ist im quadrant: "+position);
console.log("Der Punkt ist vom Ursprung "+distanz+" entfernt");

//p2
let p2= new Punkt;
p2.x=-3;
p2.y=-4;
let lo2= p2.quadrant();
let st2=p2.entfernungVomUrsprung();
console.log("der Punkt ist im quadrant: "+lo2);
console.log("Der Punkt ist vom Ursprung "+st2+" entfernt");

//p3
let p3= new Punkt;
p3.x=8;
p3.y=-6;
let lo3= p3.quadrant();
let st3=p3.entfernungVomUrsprung();
console.log("der Punkt ist im quadrant: "+lo3);
console.log("Der Punkt ist vom Ursprung "+st3+" entfernt");

//p4
let p4= new Punkt;
p4.x=-16;
p4.y=12;
let lo4= p4.quadrant();
let st4=p4.entfernungVomUrsprung();
console.log("der Punkt ist im quadrant: "+lo4);
console.log("Der Punkt ist vom Ursprung "+st4+" entfernt");

//p5
let p5= new Punkt;
p5.x=0;
p5.y=-0;
let lo5= p5.quadrant();
let st5=p5.entfernungVomUrsprung();
console.log("der Punkt ist im quadrant: "+lo5);
console.log("Der Punkt ist vom Ursprung "+st5+" entfernt");