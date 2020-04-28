function farbeAendern1() {
    let ps = document.getElementsByTagName("p");
    for (let index = 0; index < ps.length; index++) {
        let p = ps[index];
        p.style.color = "red";
    }
}

function farbeAendern2() {
    let ps = document.getElementsByTagName("p");
    for (let i = 0; i < ps.length; i++) {
        let p = ps[i];
        if ((i % 3) == 0) {
            p.style.color = "red";
        } else {
            if ((i % 3) == 1) {
                p.style.color = "green";
            } else {
                p.style.color = "blue";
            }
        }
    }
}

function absatzLoeschen() {
    let ps = document.getElementsByTagName("p");
    if(ps.length > 0) {
        let parent = ps[ps.length-1].parentNode;
        parent.removeChild(ps[ps.length-1]);
    }
}