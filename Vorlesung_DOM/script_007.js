var para=document.createElement("p");
var node=document.createTextNode("Das ist ein neuer Text in einem neuen Paragraphen");

para.appendChild(node);

var element=document.getElementsByTagName("body")[0];
element.appendChild(para);