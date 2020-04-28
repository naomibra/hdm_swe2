<?php
include "registerFct.php";
$user = $_POST["name"];
$pw1 = $_POST["pw1"];
$pw2 = $_POST["pw2"];
if (check($user, $pw1, $pw2)) {
   echo '{ "antwort" : "Registrierung OK!"}';
} else {
    echo '{ "antwort" : "Registrierung fehlgeschlagen!"}';
}
