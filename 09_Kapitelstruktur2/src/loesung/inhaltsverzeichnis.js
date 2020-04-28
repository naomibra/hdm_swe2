function ulAnfuegen(eltern) {
    let ul = document.createElement("ul");
    eltern.appendChild(ul);
    return ul;
}

function liAnfuegen(ul, kapitel) {
    let li = document.createElement("li");
    ul.appendChild(li);

    let a = document.createElement("a");
    a.href = "#" + kapitel.id;
    a.innerHTML = kapitel.innerHTML;
    li.appendChild(a);
    return li;
}

function ladeInhaltsverzeichnis() {
    let nav = document.getElementById("nav");
    let h2s = document.getElementsByTagName("h2");
    if(h2s.length > 0) {
        let ul = ulAnfuegen(nav);
        for (let index = 0; index < h2s.length; index++) {
            const h2 = h2s[index];
            let li = liAnfuegen(ul, h2);

            let h3s =  h2.parentNode.getElementsByTagName("h3");
            if(h3s.length > 0) {
                let ul3 = ulAnfuegen(li);
                for (let index = 0; index < h3s.length; index++) {
                    const h3 = h3s[index];
                    let li = liAnfuegen(ul3, h3);
                }
            }
        }
    }
}

function erstelleZurueckLink() {
    let div = document.createElement("div");
    let a =  document.createElement("a");
    div.appendChild(a);
    a.href="#nav";
    a.innerHTML = "Nach oben";
    return div;
}

function zurueckAnKapitelende() {
    let h2s = document.getElementsByTagName("h2");
    if(h2s.length > 0) {
        for (let index = 0; index < h2s.length; index++) {
            const h2 = h2s[index];
            h2.parentNode.appendChild(erstelleZurueckLink());
        }
    }
}

function zurueckVorNaechstemKapitel() {
    let h3s = document.getElementsByTagName("h3");
    if(h3s.length > 0) {
        for (let index = 0; index < h3s.length; index++) {
            const h3 = h3s[index];
            h3.parentNode.insertBefore(erstelleZurueckLink(), h3);
        }
    }
}