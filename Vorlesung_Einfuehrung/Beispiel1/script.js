function farbeAendern() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.color = "red";
}

function farbeBeliebigAendern() {
    let c = prompt("Geben Sie eine Farbe ein: ");
    let p = document.getElementsByTagName("p")[1];
    p.style.color = c;
}