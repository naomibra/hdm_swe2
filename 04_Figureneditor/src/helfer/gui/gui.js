var rechteckSammlung = new Array();
var ausgewaehltIndex;
var rechteckBox = document.getElementById('rechtecke')

rechteckBox.onmousedown = click;

function click() {
    posX = event.clientX;
    posY = event.clientY;
    rechteckAuswaehlen(posX, posY);
}

function rechteckAuswaehlen(x, y) {
    for (r in rechteckSammlung) {
        if (rechteckSammlung[r].enthaeltPunkt(x, y)) {
            ausgewaehltIndex = r;
            markieren();
            break;
        } else {
            ausgewaehltIndex = -1;
        }
    }
    markieren();
}

function markieren() {
    
    for (i = 0; i < rechteckSammlung.length; i++) {
        let rechteck = document.getElementById("r" + i);
        rechteck.style.boxShadow = "none";
    }

    if (ausgewaehltIndex >= 0) {
        let rechteck = document.getElementById("r" + ausgewaehltIndex);
        rechteck.style.boxShadow = "3px 6px #444";
        document.getElementById("attribute").innerHTML = "Attribute: " + rechteckSammlung[r].toString();
        document.getElementById("boundingBox").innerHTML = "Bounding Box: " + rechteckSammlung[r].boundingBox();
        if(typeof(rechteckSammlung[r].flaeche) == "function") {
            document.getElementById("flaeche").innerHTML = "Fläche: " + rechteckSammlung[r].flaeche();
        }
    }
}

function rechteckAnlegen() {
    let x = parseInt(document.getElementsByName('zentrumX')[0].value);
    let y = parseInt(document.getElementsByName('zentrumY')[0].value);
    let b = parseInt(document.getElementsByName('breite')[0].value);
    let h = parseInt(document.getElementsByName('hoehe')[0].value);
    let r = new Rechteck(x, y, b, h);
    rechteckSammlung.push(r);
    rechteckAnzeigen();
}

function rechteckAnzeigen() {
    let index = rechteckSammlung.length -1
    let boundingBox = rechteckSammlung[index].boundingBox();
    let box = document.createElement('div');

    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    
    box.setAttribute("id", "r" + index);
    box.style.width = boundingBox[2] + "px";
    box.style.height = boundingBox[3] + "px";
    box.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    box.style.position = "absolute";
    box.style.left = boundingBox[0] + "px";
    box.style.top = boundingBox[1] + "px";

    rechteckBox.insertBefore(box, rechteckBox.childNodes[0]);
}

function verschieben() {
    let x = parseInt(document.getElementsByName("verschiebungX")[0].value);
    let y = parseInt(document.getElementsByName("verschiebungY")[0].value);
    rechteckSammlung[ausgewaehltIndex].verschieben(x, y);    
    aktualisieren();
}

function skalieren() {
    let f = parseFloat(document.getElementsByName("faktor")[0].value);
    rechteckSammlung[ausgewaehltIndex].skalieren(f);
    aktualisieren();
}

function aktualisieren() {
    let box = document.getElementById("r" + ausgewaehltIndex);

    let boundingBox = rechteckSammlung[ausgewaehltIndex].boundingBox();
    console.log(boundingBox);
    console.log(rechteckSammlung[ausgewaehltIndex]);
    
    box.style.left = boundingBox[0] + "px";
    box.style.top = boundingBox[1] + "px";
    box.style.width = boundingBox[2] + "px";
    box.style.height = boundingBox[3] + "px";
}