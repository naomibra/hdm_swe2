const books = [
    new Buch('Max Frisch', 'Andorra', 200, 9.99),
    new Buch('Max Frisch', 'Homo Faber', 300, 12.99),
    new Buch('Max Frisch', 'Stiller', 500, 19.99),
    new Buch('Martin Suter', 'Elefant', 200, 9.99),
    new Buch('Friedrich Dürrenmatt', 'Die Physiker', 250, 9.95),
    new Buch('John Irving', 'Owen Meany', 800, 29.99),
    new Buch('Martin Suter', 'Small World', 350, 15.99)
];
const cart = [];

addBookToDiv();

function confirmInput(confirmed = false) {
    let author = document.getElementsByName("author")[0].value;
    let title = document.getElementsByName("title")[0].value;
    let pageCount = document.getElementsByName("pageCount")[0].value;
    let price = document.getElementsByName("price")[0].value;

    /* Löscht Werte aus Inputfeldern nach Eingabe */
    // document.getElementsByName("author")[0].value = "";
    // document.getElementsByName("title")[0].value = "";
    // document.getElementsByName("pageCount")[0].value = "";
    // document.getElementsByName("price")[0].value = "";

    /* If Abfrage entfernen und direkt addBook(author, title, pageCount, price); falls keine Warnung erwünscht. */
    if (!confirmed) {
        if (author == "" || title == "" || pageCount == "" || price == "") {
            errorMessage("Es sind nicht alle Felder ausgefüllt, trotzdem fortfahren?.");
        } else {
            addBook(author, title, pageCount, price);
        }
    } else {
        hide("error");
        addBook(author, title, pageCount, price);
    }
}

function errorMessage(text) {
    let error = document.getElementById("error");
    error.getElementsByTagName("p")[0].innerHTML = text;
    error.classList.remove("hide");
}

function hide(elementId) {
    document.getElementById(elementId).classList.add("hide");
}

function addBook(author, title, pageCount, price) {
    let autor;
    let titel;
    let seitenAnzahl;
    let preis;
    if (author != "") { autor = author; }
    if (title != "") { titel = title; }
    if (pageCount != "") { seitenAnzahl = pageCount; }
    if (price != "") { preis = price; }

    books.push(new Buch(autor, titel, seitenAnzahl, preis));

    addBookToDiv();
}

function addBookToDiv() {
    let container = document.getElementById("bookContainer");
    let divsInContainer = container.children;

    for (let i = divsInContainer.length - 1; i < books.length; i++) {
        let divRow = document.createElement("div");
        divRow.setAttribute("onclick", "addToCart(this.children[0].innerHTML)");
        divRow.classList.add("pointer");
        divRow.classList.add("bookRow");

        let number = document.createElement("div");
        number.innerHTML = i;
        divRow.appendChild(number);

        let autor = document.createElement("div");
        autor.innerHTML = books[i].autor;
        divRow.appendChild(autor);

        let title = document.createElement("div");
        title.innerHTML = books[i].titel;
        divRow.appendChild(title);

        let pageCount = document.createElement("div");
        pageCount.innerHTML = books[i].seitenAnzahl;
        divRow.appendChild(pageCount);

        let price = document.createElement("div");
        price.innerHTML = books[i].preis + "€";
        divRow.appendChild(price);

        container.appendChild(divRow);
    }
}

function addToCart(index) {
    if (!cart.includes(books[index])) { //Buch ist bereits im Warenkorb
        cart.push(books[index]);
        let cartIndex = cart.length - 1;
        if (typeof cart[cartIndex].preis == "string") {
            if (cart[cartIndex].preis.includes(",")) {
                cart[cartIndex].preis = parseFloat(commaToPoint(cart[cartIndex].preis));
            } else {
                cart[cartIndex].preis = parseFloat(cart[cartIndex].preis);
            }

        }

        let cartDiv = document.getElementById("cart");
        let bookDiv = document.createElement("div");
        bookDiv.id = "buch" + index;
        bookDiv.classList.add("cartItem");

        let title = document.createElement("div");
        title.innerHTML = "<div>" + cart[cart.length - 1].titel + "</div>";
        title.classList.add("title");
        bookDiv.appendChild(title);

        let autor = document.createElement("div");
        autor.innerHTML = cart[cart.length - 1].autor;
        autor.classList.add("autor");
        bookDiv.appendChild(autor);

        // let pageCount = document.createElement("div");
        // pageCount.innerHTML = cart[cart.length-1].seitenAnzahl;       
        // bookDiv.appendChild(pageCount);

        let menge = document.createElement("div");
        let mSpan = document.createElement("span");
        mSpan.innerHTML = "1";
        menge.innerHTML = "Menge: ";
        menge.appendChild(mSpan);
        bookDiv.appendChild(menge);


        let price = document.createElement("div");
        let pSpan = document.createElement("span");
        pSpan.innerHTML = cart[cart.length - 1].preis + "€";
        price.innerHTML = "Preis: ";
        price.appendChild(pSpan);
        bookDiv.appendChild(price);

        cartDiv.appendChild(bookDiv);

    } else {
        cart.push(books[index]);

        raiseNumberByOne(books.indexOf(cart[cart.length - 1]));
    }

    document.getElementById("summe").classList.remove("hide");
    if (cart.length > 1) {
        document.getElementById("guenstigstes").classList.remove("hide");
        document.getElementById("dickstes").classList.remove("hide");
    }
    calcSum();
}

function raiseNumberByOne(index) {
    let id = document.getElementById("buch" + index);

    let mSpan = id.getElementsByTagName("span")[0];
    let menge = parseInt(id.getElementsByTagName("span")[0].innerHTML);
    mSpan.innerHTML = (menge + 1);

    let pSpan = id.getElementsByTagName("span")[1];
    
    
    let preis = books[index].preis;
    if (preis != 0) {
        pSpan.innerHTML = (preis * (menge + 1)).toFixed(2) + "€";
    }

}

function commaToPoint(string) {
    return parseFloat(string.replace(",", "."));
}

function calcSum() {
    let summeHTML = document.getElementById("summe").getElementsByTagName("p")[0];
    let summe = gesamtPreis(cart);
    summeHTML.innerHTML = summe + "€";
}

function showCheapestBook() {
    let booksInCart = document.getElementsByClassName("cartItem");
    for (let i = 0; i < booksInCart.length; i++) {
        booksInCart[i].style.background = "white";        
    }
    document.getElementById("buch" + indexOfBook(guenstigstesBuch(cart))).style.background = "rgba(10,200,10,0.2)";
}

function showthickestBook() {
    let booksInCart = document.getElementsByClassName("cartItem");
    for (let i = 0; i < booksInCart.length; i++) {
        booksInCart[i].style.background = "white";        
    }
    document.getElementById("buch" + indexOfBook(dickstesBuch(cart))).style.background = "rgba(10,200,10,0.2)";
}

function indexOfBook(buch) {
    for (let i = 0; i < books.length; i++) {
        if (books[i] == buch) {
           return i;
        }
    }
    return -1;
}