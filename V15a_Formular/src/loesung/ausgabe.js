function ausgeben(){
  
    let name=document.forms.formular1.elements.name.value;
    let alter=document.forms.formular1.elements.alter.value;
    let mail= document.forms.formular1.elements.mail.value;
    let body=document.getElementsByTagName("body") [0];
console.log(body.children.length);
if(body.children.length<4){    
let div1 = document.createElement("div");
   div1.innerHTML="Name: "+name;

   let div2 = document.createElement("div");
   div2.innerHTML="Alter: "+alter;

   let div3 = document.createElement("div");
   div3.innerHTML="eMail: "+mail;

  
   

    body.appendChild(div1);
   body.appendChild(div2);
   body.appendChild(div3);

}
else{
  let divelemente=document.getElementsByTagName("div");
  console.log(divelemente);
  divelemente[0].innerHTML="Name: "+name;
  divelemente[1].innerHTML="Alter: "+alter;
  divelemente[2].innerHTML="eMail: "+mail
}


  
  console.log(name);
  console.log(alter);
  console.log(mail);
}