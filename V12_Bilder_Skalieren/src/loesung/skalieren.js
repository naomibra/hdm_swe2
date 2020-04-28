function groesser(div) {
    div.style.width = "80%";
}

function normal(div) {
    div.style.width = "30%";
}

function skalieren() {
    let div = document.getElementById("rahmen");
    let img = div.children[0];
    img.style.width = "150%";
    img.style.right = "25%";
    img.style.bottom = "25%";
    div.style.overflow = "hidden";
}

function normalSkalieren() {
    let div = document.getElementById("rahmen");
    let img = div.children[0];
    img.style.width = "100%";
    img.style.right = "0px";
    img.style.bottom = "0px";

    div.style.overflow = "visible";
}

