function zeilenZaehlen() {
    let rows = document.getElementsByClassName("row");

    let h2 = document.createElement("h2");
    h2.innerHTML = rows.length;

    let body = document.getElementsByTagName("body")[0];
    let table = document.getElementById("buttons");
    body.insertBefore(h2, table);
}

function zellenLoeschen() {
    let rows = document.getElementsByClassName("row");
    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if(row.children.length > 1) {
            row.removeChild(row.children[1]);
        }
    }
}

let farben = ["red", "blue", "green"];

function zebraMuster() {
    let farbenNr = Math.floor(Math.random() * farben.length);
    let rows = document.getElementsByClassName("row");
    for (let index = 0; index < rows.length; index++) {
        if(index % 2 == 0) {
            const row = rows[index];
            row.style.background = farben[farbenNr];
        }
    }

}