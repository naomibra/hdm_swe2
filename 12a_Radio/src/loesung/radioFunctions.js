let radio = new Radio(3, 103.4);

function lauter() {
    radio.lauter();
    display();
}

function leiser() {
    radio.leiser();
    display();
}

function an() {
    radio.an();
    display();    
}

function aus() {
    radio.aus();
    display();
}

function frequenz() {
    radio.frequenzSetzen(document.getElementById('frequenz').value);
    display();
}

function display() {
    document.getElementById('display').innerHTML = radio.toString();
}
