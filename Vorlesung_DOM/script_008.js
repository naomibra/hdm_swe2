var p=document.createElement("p");
var node=document.createTextNode("Das ist ein neuer Text in einem neuen Paragraphen, " +
		"der vor dem fetten Text eingefügt wurde");
p.appendChild(node);

var element=document.getElementsByTagName("body");
let parent = element[0];
var b=document.getElementById("fett");

//Alternative 1: 
var parent=document.getElementsByTagName("body")[0];
var b=document.getElementById("fett");

//Alternative 2:
var b=document.getElementById("fett");
var parent = b.parentNode;

//Alternative 3: 
var parent=document.getElementsByTagName("body")[0];
var b=parent.children[3];

parent.insertBefore(p, b);