function semesterEinfaerben(){
    let l1 =document.getElementById("studium");
    let kinder= l1.children;
    let farben = ["red", "blue", "green", "orange", "violet", "tomato", "skyblue"];
    for( let i=0;i<kinder.length;i++){
        let kind = kinder[i];
        kind.style.color= farben[i];
    }
}
function listeEinfaerben(){
    let bwl= document.getElementById("bwl");
    let parent= bwl.parentNode;
  parent.classList.add("blau");
   
}

function moduleEinfaerben(){
    let element =document.getElementById("sem2");
    let kids= element.children;
    
    console.log(kids);
   for(let i=0;i<kids.length;i++){
    kids[i].style.background= "green";
       if(kids[i].getAttribute("id")=="cms"){
           kids[i].style.background="";
       }
    }

}