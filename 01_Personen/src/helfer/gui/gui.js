var pArray;
var log = document.getElementById("log");
var array = document.getElementById("array");
var valueButton2 = 0;

function arrayAnlegenGui() {
    try {
        pArray = arrayAnlegen();
        let button1 = document.getElementById("button1");
        button1.style.background = "rgba(255,255,255,1)";
        if (Array.isArray(pArray)) {
            button1.classList.add("disabled");
            button1.style.background = "rgba(10,200,10,0.2)";
            addLog("Array erstellt!");
            document.getElementById("button2").classList.remove("disabled");
            createArray();
        } else {
            button1.style.background = "rgba(200,10,10,0.2)";
            addLog("das erzeugte Element ist kein Array!", "red")
        }
    } catch (error) {
        addLog("Fehler bei Funktion arrayAnlegen() - existiert nicht oder kein return", "red");
        button1.style.background = "rgba(200,10,10,0.2)";
    }
}

function arrayFuellenGui() {
    let button2 = document.getElementById("button2");
    button2.style.background = "rgba(255,255,255,1)";
    valueButton2 = document.getElementsByName("laenge")[0].value;

    if (pArray.length != 0) {
        resetArray(true);
        createArray();
    }
    try {
        arrayFuellen(pArray, valueButton2);
        if (pArray.length == valueButton2) {
            button2.style.background = "rgba(10,200,10,0.2)";
            addLog("Array mit " + valueButton2 + " Personen gefüllt!");
            fillArray();
            enableButton(3);
            enableButton(4);
            enableButton(5);
            enableButton(6);
            enableButton(7);
            enableButton(8);
        } else {
            button2.style.background = "rgba(200,10,10,0.2)";
            addLog("Die Länge des Arrays entspricht nicht der eingegebenen Zahl", "red");
        }
    } catch (error) {
        addLog("Fehler bei Funktion arrayFuellen()", "red");
        button2.style.background = "rgba(200,10,10,0.2)";
    }

}

function ausgabeGui() {
    let button3 = document.getElementById("button3");
    try {
        ausgabe(pArray);
        addLog("Array in Konsole ausgegeben. ");
        button3.style.background = "rgba(10,200,10,0.2)";
    } catch (error) {
        addLog("Fehler bei Funktion ausgabe()", "red");
        button3.style.background = "rgba(200,10,10,0.2)";
    }
}

function alterErhoehenGui() {
    let button4 = document.getElementById("button4");
    try {
        alterErhoehen(pArray);
        button4.style.background = "rgba(10,200,10,0.2)";
        resetArray(false);
        createArray();
        fillArray(pArray, valueButton2);
        addLog("alter erhöht.");
    } catch (error) {
        addLog("Fehler bei Funktion alterErhoehen()", "red");
        button4.style.background = "rgba(200,10,10,0.2)";
    }
}

function aeltestePersonGui() {
    let arrayDivs = array.getElementsByTagName("div");
    let aelteste;
    try {
        aelteste = aeltestePerson(pArray);
        document.getElementById("button5").style.background = "rgba(10,200,100,0.2)";
        document.getElementById("button9").classList.remove("disabled");
        addLog("Älteste Person (" + aelteste.toString() + ") markiert");
        for (let i = 0; i < pArray.length; i++) {
            if (pArray[i] == aelteste) {
                let tmp = arrayDivs[(i * 3) + 4].className + " aelteste";
                arrayDivs[(i * 3) + 4].classList = tmp;
                arrayDivs[(i * 3) + 5].classList = tmp;
                arrayDivs[(i * 3) + 6].classList = tmp;
            }
        }
    } catch (error) {
        document.getElementById("button5").style.background = "rgba(200,10,10,0.2)";
        addLog("Fehler bei Funktion aeltestePerson(array)", "red");
    }
}

function juengstePersonGui() {
    let arrayDivs = array.getElementsByTagName("div");
    let juengste;
    try {
        juengste = juengstePerson(pArray);
        for (let i = 0; i < pArray.length; i++) {
            if (pArray[i] == juengste) {
                let tmp = arrayDivs[(i * 3) + 4].className + " juengste";
                arrayDivs[(i * 3) + 4].classList = tmp;
                arrayDivs[(i * 3) + 5].classList = tmp;
                arrayDivs[(i * 3) + 6].classList = tmp;
            }
        }
        document.getElementById("button9").classList.remove("disabled");
        addLog("Jüngste Person (" + juengste.toString() + ") markiert");
        document.getElementById("button6").style.background = "rgba(10,100,200,0.2)";
    } catch (error) {
        document.getElementById("button6").style.background = "rgba(200,10,10,0.2)";
        addLog("Fehler bei Funktion juengstePerson(array)", "red");
    }
}

function alleUnterGui() {
    let arrayDivs = array.getElementsByTagName("div");
    let min = document.getElementsByName("unter")[0].value;
    let unter;
    try {
        unter = alleUnter(pArray, min);

        if (unter.length < 1) {
            addLog("Keine Person ist unter " + min, "red");
        } else {
            for (let i = 0; i < pArray.length; i++) {
                for (let j = 0; j < unter.length; j++) {
                    if (unter[j] == pArray[i]) {
                        let tmp = arrayDivs[(i * 3) + 4].className;
                        arrayDivs[(i * 3) + 4].classList = tmp + " alleUnter";
                        arrayDivs[(i * 3) + 5].classList = tmp + " alleUnter";
                        arrayDivs[(i * 3) + 6].classList = tmp + " alleUnter";
                    }
                }
            }
            addLog("Alle " + unter.length + " unter " + min + " markiert.");
            document.getElementById("button9").classList.remove("disabled");
            document.getElementById("button7").style.background = "rgba(200,10,100,0.2)";
        }
    } catch (error) {
        addLog("Fehler bei Funktion alleUnter(array, alter)", "red");
        document.getElementById("button7").style.background = "rgba(200,10,10,0.2)";

    }

}

function alleDuplikateGui() {
    let arrayDivs = array.getElementsByTagName("div");
    let doppelt;
    try {
        doppelt = alleDuplikate(pArray);
        if (doppelt.length > 0) {
            for (let i = 0; i < pArray.length; i++) {
                for (let j = 0; j < doppelt.length; j++) {
                    if (doppelt[j] == pArray[i]) {
                        let tmp = arrayDivs[(i * 3) + 4].className;
                        arrayDivs[(i * 3) + 4].classList = tmp + " duplikat";
                        arrayDivs[(i * 3) + 5].classList = tmp + " duplikat";
                        arrayDivs[(i * 3) + 6].classList = tmp + " duplikat";
                    }
                }
            }
            addLog("alle " + doppelt.length + " Duplikate markiert.");
        } else {
            addLog("Keine Duplikate gefunden.", "green");
        }
        document.getElementById("button9").classList.remove("disabled");
        document.getElementById("button8").style.background = "rgba(255,0,0,0.2)";

    } catch (error) {
        addLog("Fehler bei Funktion alleDuplikate(array)", "red");
        document.getElementById("button8").style.background = "rgba(200,10,10,0.2)";
    }
}

function reset() {
    if (confirm("Array wirklich zurücksetzen?")) {
        resetButtons();
        resetArray(true);
    }
    addLog("reset")
}

function resetButtons() {
    let buttons = document.getElementById("eingaben").getElementsByTagName("div");
    for (let i = 2; i < buttons.length; i++) {
        buttons[i].classList.add("disabled");
        buttons[i].style.background = "white";
    }
    buttons[1].classList.remove("disabled");
    buttons[1].style.background = "white";
}

function resetArray(hard = true) {
    if (hard && pArray != undefined) {
        pArray.length = 0;
    }
    document.getElementById("array").innerHTML = "";
}

function createArray() {
    let arrayHead = document.createElement("div");
    arrayHead.id = "arrayHead";
    arrayHead.innerHTML = "Array";
    array.appendChild(arrayHead);
}

function fillArray() {
    let indexDiv = document.createElement("div");
    indexDiv.id = "indexDiv";
    indexDiv.innerHTML = "index";
    indexDiv.style.background = "rgb(161,161,161)"
    array.appendChild(indexDiv);

    let nameDiv = document.createElement("div");
    nameDiv.id = "nameDiv";
    nameDiv.innerHTML = "array[x].name";
    nameDiv.style.background = "rgb(161,161,161)";
    array.appendChild(nameDiv);

    let alterDiv = document.createElement("div");
    alterDiv.id = "alterDiv";
    alterDiv.innerHTML = "array[x].alter";
    alterDiv.style.background = "rgb(161,161,161)";
    array.appendChild(alterDiv);

    for (let i = 0; i < pArray.length; i++) {

        let count = document.createElement("div");
        count.classList = "items";
        count.innerHTML = i;
        array.appendChild(count);

        let name = document.createElement("div");
        name.classList = "items";
        name.innerHTML = pArray[i].name;
        array.appendChild(name);

        let alter = document.createElement("div");
        alter.classList = "items";
        alter.innerHTML = pArray[i].alter;
        array.appendChild(alter);

        if (i % 2 == 0) {
            alter.classList.add("second");
            name.classList.add("second");
            count.classList.add("second");
        } else {
            alter.classList.add("first");
            name.classList.add("first");
            count.classList.add("first");

        }
    }
}

function addLog(text, color = -1) {
    let p = document.createElement("p");
    p.innerHTML = text;
    if (color != -1) {
        p.style.color = color;
    }
    log.insertBefore(p, log.getElementsByTagName("p")[0]);
}

function enableButton(a) {
    let button = document.getElementById("button" + a);
    button.classList.remove("disabled");
}

function removeColors() {
    let items = array.getElementsByClassName("items")
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("alleUnter", "juengste", "aelteste", "duplikat");
    }

    let buttons = document.getElementById("eingaben").getElementsByTagName("div");
    for (let i = 5; i < buttons.length; i++) {
        buttons[i].style.background = "white";
    }
}