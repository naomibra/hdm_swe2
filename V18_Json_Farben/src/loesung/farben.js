let farben = '{"konfig": {"farbe" : "rgb(0, 0, 255)", "schrift": "rgb(255, 0, 0)"}}';

function farbenAendern() {
    let konfig = JSON.parse(farben).konfig;
    let body = document.getElementsByTagName("body")[0];
    body.style.background = konfig.farbe;

    body.style.color = konfig.schrift;
}