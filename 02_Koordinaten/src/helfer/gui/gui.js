var c = document.getElementById("ks");
var ctx = c.getContext("2d");
var log = document.getElementById("log");

var pm;
refresh(true);

function createRandomPoints() {
    try {
        pm.zufaelligePunkteErzeugen();
        if (toStringTest(pm.punkteArray[0])) {
        }
        let punkte = "";
        for (let i = 0; i < pm.punkteArray.length; i++) {
            punktZeichnen(pm.punkteArray[i].x, pm.punkteArray[i].y, "black");
            punkte += pm.punkteArray[i].toString() + ", ";
        }
        punkte = punkte.slice(0, punkte.length - 1);
        addLog("Punkte erzeugt. Alle Punkte im Array: " + punkte);
    } catch (error) {
        addLog("Punkte konnten nicht erzeugt werden:", "red", error);
    }
}

function xBerechnen(zahl) {
    if (zahl >= 0) {
        return zahl * 10 + 200;
    } else {
        return 200 - (zahl * (-10));
    }
}

function yBerechnen(zahl) {
    if (zahl >= 0) {
        return 200 - (zahl * 10);
    } else {
        return (zahl * (-10)) + 200;
    }
}

function punktZeichnen(x, y, farbe) {
    // console.log("( " + x + " / " + y + " )");
    ctx.beginPath();
    ctx.arc(xBerechnen(x), yBerechnen(y), 2, 0, 2 * Math.PI);
    ctx.fillStyle = farbe;
    ctx.fill();
    ctx.stroke();
}


function addPoint() {
    let x = parseInt(document.getElementsByName('x')[0].value);
    let y = parseInt(document.getElementsByName('y')[0].value);
    if (!isNaN(x) && !isNaN(y)) {
        try {
            pm.punktHinzufuegen(x, y);
            punktZeichnen(x, y, "black");
            addLog("Punkt " + pm.punkteArray[pm.punkteArray.length - 1].toString() + " hinzugefügt.")
        } catch (error) {
            addLog("Punkt konnte nicht zum Array hinzugefügt werden:", "red", error);
        }
    } else {
        addLog("Punkt konnte nicht hinzugefügt werden:", "red", {"message":"Input was NaN"})
    }
}

function showMaxDistance() {
    try {
        if (pm.punkteArray.length >= 2) {
            document.getElementById("maxEntf").style.background = "white";
            markPoints();
            var distance = writeMaxDistance();
            addLog("Maximale Entfernung berechnet:", "rgb(100,100,100)",  {"message": distance});
        } else {
            document.getElementById("maxEntf").style.background = "rgba(200,10,10,0.2)";
            addLog("Entfernung konnte nicht berechnet werden:", "red",  {"message": "less than 2 Points available"});
        }
    } catch (error) {
        addLog("Entfernung konnte nicht berechnet werden:", "red", error);
    }
}

function markPoints() {
    refresh(false);
    for (let i = 0; i < pm.punkteArray.length; i++) {
        punktZeichnen(pm.punkteArray[i].x, pm.punkteArray[i].y, "black");
    }
    let max = pm.maximalEntferntePunkteBestimmen();
    for (let i = 0; i < max.length; i++) {
        punktZeichnen(max[i].x, max[i].y, "red");
    }
    ctx.moveTo(xBerechnen(max[0].x), yBerechnen(max[0].y));
    ctx.lineTo(xBerechnen(max[1].x), yBerechnen(max[1].y));
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
    ctx.strokeStyle = "#000000";

}

function writeMaxDistance() {
    let box = document.getElementById("maxEntfText");
    box.style.opacity = "1";
    box.classList = "box shadow fadein";
    let distance = pm.maximaleEntfernungBerechnen().toFixed(2);
    let points = pm.maximalEntferntePunkteBestimmen();
    box.innerHTML = "Maximale Entfernung zwischen " + points[0].toString() + " und " + points[1].toString() + ": " + distance + " Einheiten.";
    return distance;
}

function refresh(hard) {
    c.width = c.width;
    ctx.clearRect(0, 0, c.height, c.width);

    ctx.moveTo(0, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 400);
    ctx.stroke();

    ctx.font = "10px Helvetica";
    ctx.fillText("-20", 5, 210);
    ctx.fillText("20", 385, 210);
    ctx.fillText("20", 205, 10);
    ctx.fillText("-20", 205, 390);

    document.getElementById("maxEntfText").classList = "box shadow";
    document.getElementById("maxEntfText").style.opacity = "0";

    if (hard) {
        try {
            pm = new PunkteMenge();
        } catch (error) {
            addLog("PunkteMenge konnte nicht erzeugt werden:", "red", error);
        }
    }
}

function toStringTest(punkt) {
    if ("[object Object]" == punkt.toString()) {
        addLog("Funktion toString in der Klasse Punkt fehlt.", "red");
        return false;
    }
    return true;

}



function addLog(text, color = "rgb(100,100,100)", error = -1) {
    let logP = log.getElementsByTagName("p");

    let p = document.createElement("p");
    p.innerHTML = "> " + text + " ";
    p.style.color = color;

    if (error != -1) {
        let b = document.createElement("b");
        b.innerText = error.message;
        p.appendChild(b);
    }

    log.insertBefore(p, logP[0]);
}