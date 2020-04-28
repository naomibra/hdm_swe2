var autoren = new Array();


function speichern() {
    let firstname = document.getElementsByName("firstname")[0].value;
    let lastname = document.getElementsByName("lastname")[0].value;
    let geburtsjahr = document.getElementsByName("geburtsjahr")[0].value;
    let sterbejahr = document.getElementsByName("sterbejahr")[0].value;

    if (geburtsjahr != "" && sterbejahr != "") {
        autoren.push(new Autor(firstname, lastname, geburtsjahr, sterbejahr));
    } else if (geburtsjahr != "") {
        autoren.push(new Autor(firstname, lastname, geburtsjahr));
    } else {
        autoren.push(new Autor(firstname, lastname));
    }

    autorenAnzeigen();
}

function autorenAnzeigen() {
    console.log(autoren);
    let autorenAnzeige = document.getElementById("autoren");
    autorenAnzeige.innerHTML = "";

    for (let i in autoren) {
        let div = document.createElement("div");
        div.innerHTML = autoren[i].toString();
        div.className = "autoren";

        autorenAnzeige.appendChild(div);
    }
}

function vergleichen() {
    let autorenListe = document.getElementsByClassName("autoren");
    for (let i = 0; i < autoren.length - 1; i++) {
        autor1 = autoren[i];
        let color = createColor();
        for (let j = 0; j < autoren.length; j++) {
            if (j != i) {
                if  (autoren[j].equals(autor1)) {                
                    autorenListe[i].setAttribute("style", "background-color: " + color);
                    autorenListe[j].setAttribute("style", "background-color: " + color);
                }
            }
        }
    }
}

function createColor() {
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}