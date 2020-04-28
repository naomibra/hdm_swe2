
function createCard(body, name, fct) {
    let div1 = document.createElement("div");
    body.appendChild(div1);
    div1.classList.add("schild");
    
    let h2 = document.createElement("h2");
    h2.innerHTML = "Hallo, ich heiße ...";
    div1.appendChild(h2);
    
    let div12 = document.createElement("div");
    div1.appendChild(div12);
    div12.classList.add("name");
    
    let p1 = document.createElement("p");
    div12.appendChild(p1);
    p1.innerHTML = name;
    
    let p2 = document.createElement("p");
    div12.appendChild(p2);
    p2.innerHTML = fct;
}


function createCards() {
    let body = document.getElementsByTagName("body")[0];
    let pl = new Professorenliste();
    let i = 0;
    while(i < pl.laenge()) {
        createCard(body, pl.nameFuerIndex(i), pl.gebietFuerIndex(i));
        i++;
    }

}











