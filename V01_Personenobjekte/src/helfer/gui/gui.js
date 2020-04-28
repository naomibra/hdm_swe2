let personen = [];

function personHinzufuegen() {
    let name = document.getElementsByName('name')[0].value;
    let alter = parseInt(document.getElementsByName('alter')[0].value);

    if (name != "" && alter != NaN) {
        let person = new Person();
        person.alter = alter;
        person.name = name;
        personen.push(person);

        fuegePersonAn();

    }
}

function fuegePersonAn() {
    let personenContainer = document.getElementById("ausgabeWrap");
    for (let i = 0; i < personen.length; i++) {
        if (personen.length == (i + 1) || personen.length == 1) {

            let persDiv = document.createElement("div");
            persDiv.classList = "person shadow";
            persDiv.id = "person" + i;
            persDiv.setAttribute("onclick", "vergleicheZwei(this)");
            let persImg = document.createElement("img");
            persImg.src = "./src/helfer/gui/img/bild" + (i + 1) + ".jpg";
            let persText = document.createElement("h3");
            persText.innerHTML = personen[i].toString();

            persDiv.appendChild(persImg);
            persDiv.appendChild(persText);
            personenContainer.appendChild(persDiv);
        }
    }
}

function markJuengste() {
    if (personen.length > 0) {
        let vergl = personen[0].alter;
        var persId = 0;
        for (let i = 0; i < personen.length; i++) {
            removeClass("juengste");

            if (personen[i].alter < vergl) {
                vergl = personen[i].alter;
                persId = i;
            }
        }
        let div = document.getElementById("person" + persId);
        div.classList = "person shadow juengste";
    }
}

function markAelteste() {
    if (personen.length > 0) {
        let vergl = personen[0].alter;
        var persId = 0;
        for (let i = 0; i < personen.length; i++) {
            removeClass("aelteste");
            if (personen[i].alter > vergl) {
                vergl = personen[i].alter;
                persId = i;
            }
        }
        let div = document.getElementById("person" + persId);
        div.classList = "person shadow aelteste";
    }
}

function alterAllerErhoehen() {
    if (personen.length > 0) {
        for (let i = 0; i < personen.length; i++) {
            personen[i].erhoeheAlter();
            let div = document.getElementById("person" + i);
            div.children[1].innerHTML = personen[i].toString();
        }
    }
}

function vergleicheZwei(div) {
    let selected = document.getElementsByClassName("ausgewaehlt");
    let second = false;    
    if (div.classList.value.indexOf("ausgewaehlt") != -1) {
        if (div.classList.value.indexOf("juengste") != -1) {
            div.classList = "person shadow juengste";
        } else if (div.classList.value.indexOf("aelsteste") != -1){
            div.classList = "person shadow aelteste";
        } else {
            div.classList = "person shadow";
        }
        second = true;
    }
    if ((selected.length < 2) && !second) {
        div.classList += " ausgewaehlt";
    }

    if (selected.length == 2) {
        let selectedId1 = selected[0].id.substring(6);
        let selectedId2 = selected[1].id.substring(6);

        let vergleich = document.getElementById("vergleich");
        let nicht = " <b>nicht</b> ";
        if (personen[selectedId1].equals(personen[selectedId2])) {
            vergleich.innerHTML = "Die beiden verglichenen Personen haben das gleiche Alter und den gleichen Namen.";
        } else {
            vergleich.innerHTML = "Die beiden verglichenen Personen haben nicht das gleiche Alter und / oder nicht den gleichen Namen.";
        }
    }
}

function removeClass(string) {
    let div = document.getElementsByClassName(string);
    if (div.length > 0) {
        for (let i = 0; i < personen.length; i++) {
            if (div[i] != undefined) {
                div[i].classList = "person shadow";
            }
        }
    }
}