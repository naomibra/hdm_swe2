function ueberschriftAendern() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = "Meien neue Überschrift";
}

function hintergrundEinfaerben() {
    let body = document.getElementsByTagName("body")[0];
    body.style.background = "cyan";
}

function tabelleEinfaerben() {
    let divs = document.getElementsByClassName("row");
    for (let index = 0; index < divs.length; index++) {
        let div = divs[index];
        let column = div.children[index];
        column.style.background = "red";
    }
}