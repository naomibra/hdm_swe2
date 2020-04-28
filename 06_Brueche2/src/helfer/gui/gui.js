var bruch = new Bruch();

showCurrentData();

function neuerBruch() {
    let values = getValues();
    bruch = new Bruch(values.z, values.n);       
    addLog("Neuen Bruch " + bruch.ausgabe() + " erzeugt.", "black");
    showCurrentData();
}

function showCurrentData() {
    try {
        bruch.ausgabe();
        let currents = document.getElementsByClassName("current");
        for (let i = 0; i < currents.length; i++) {
            currents[i].innerText = bruch.ausgabe();
        }
        document.getElementById("zaehler").innerHTML = bruch.zaehler;
        document.getElementById("nenner").innerHTML = bruch.nenner;
    } catch (error) {
        addLog("Fehler in Funktion ausgabe(): ", "red", error.message);
    }
}

function calc(type) {
    let values = getValues();
    let b1 = new Bruch(values.z, values.n);
    let b2 = new Bruch(values.z2, values.n2);

    if ('+' == type) {
        try {
            bruch.addieren(b2);
            addLog("Bruch addiert: " + b1.ausgabe() + " + " + b2.ausgabe() + " = " + bruch.ausgabe(), "black");
        } catch (error) {
            addLog("Fehler in Funktion addieren().", "red", error.message);
        }
    }
    if ('-' == type) {
        try {
            bruch.subtrahieren(b2);
            addLog("Bruch subtrahiert: " + b1.ausgabe() + " - " + b2.ausgabe() + " = " + bruch.ausgabe(), "black");
        } catch (error) {
            addLog("Fehler in Funktion subtrahieren().", "red", error.message);
        }
    }
    if ('*' == type) {
        try {
            bruch.multiplizieren(b2);
            addLog("Bruch multipliziert: " + b1.ausgabe() + " * " + b2.ausgabe() + " = " + bruch.ausgabe(), "black");
        } catch (error) {
            addLog("Fehler in Funktion multiplizieren().", "red", error.message);
        }
    }
    if ('÷' == type) {
        try {
            bruch.dividieren(b2);
            addLog("Bruch dividiert: " + b1.ausgabe() + " ÷ " + b2.ausgabe() + " = " + bruch.ausgabe(), "black");
        } catch (error) {
            addLog("Fehler in Funktion dividieren().", "red", error.message);
        }
    }
    showCurrentData();
}

function reduce() {
    let ggt2 = ggt(bruch.zaehler, bruch.nenner);
    let values = getValues();
    let b1 = new Bruch(values.z, values.n);
    let factor = document.getElementsByName("factorK")[0].value;

    if ("" == factor) {
        bruch.kuerzen(ggt2);
        addLog("Bruch gekürzt: " + b1.ausgabe() + " mit Faktor " + ggt2 + " = " + bruch.ausgabe(), "black");

    } else {
        bruch.kuerzen(factor);
        addLog("Bruch gekürzt: " + b1.ausgabe() + " mit Faktor " + factor + " = " + bruch.ausgabe(), "black");
    }
    showCurrentData();
}

function equiv() {
    let values = getValues();
    let b1 = new Bruch(values.z, values.n);
    let factor = document.getElementsByName("factorE")[0].value;
    if (factor == "") {
        inputError("factorE");
        addLog("Bitte Faktor angeben. Erweitern mit 0 = 0/0.", "red");
    } else {
        bruch.erweitern(factor);
        showCurrentData();
        addLog(b1.ausgabe() + " mit Faktor " + factor + " erweitert: " + bruch.ausgabe(), "black");
    }
}

function getValues() {
    let nbz = parseInt(document.getElementsByName("nbz")[0].value);
    let nbn = parseInt(document.getElementsByName("nbn")[0].value);
    let nbz2 = parseInt(document.getElementsByName("nbz2")[0].value);
    let nbn2 = parseInt(document.getElementsByName("nbn2")[0].value);

    let zaehler, nenner, zaehler2, nenner2;

    if (isNaN(nbz)) {
        zaehler = undefined;
    } else {
        zaehler = nbz;
    }

    if (isNaN(nbn)) {
        nenner = undefined;
    } else {
        nenner = nbn;
    }

    if (isNaN(nbz2)) {
        zaehler2 = 0;
    } else {
        zaehler2 = nbz2;
    }

    if (isNaN(nbn2)) {
        nenner2 = 1;
    } else {
        nenner2 = nbn2;
    }

    return {
        z: zaehler,
        n: nenner,
        z2: zaehler2,
        n2: nenner2
    };
}

function inputError(name) {
    let input = document.getElementsByName(name)[0];
    input.classList.add("inputFehler");
    setTimeout(function () {
        input.classList.remove("inputFehler");
        input.value = "";
    }, 1000);
}

function addLog(text, farbe, meldung = "") {
    let log = document.getElementById("log");
    let p = document.createElement("p");
    p.innerHTML = "> " + text;
    p.style.color = farbe;

    let b = document.createElement("b");
    b.innerText = meldung;
    p.appendChild(b);
    log.insertBefore(p, log.getElementsByTagName("p")[0]);
}