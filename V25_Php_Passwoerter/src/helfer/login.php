<?php
    $name = $_POST['name'];
    $passwort = $_POST['passwort'];
    
    if (checkUser($name, $passwort)) {
        echo '{"antwort" : "Eingabe korrekt"}';
    } else {
        echo '{"antwort" : "Eingabe fehlerhaft"}';
    }

    function checkUser($user, $pw) {
        include("db/openDbConnection.php");
        $abfrage = "SELECT passwort FROM benutzer where name = '" . $user . "'";
        $ergebnis = $mysqli->query($abfrage);
        $passwort = "";
        if($ergebnis != false) {
            while($row = $ergebnis -> fetch_object()) {
                $passwort = $row->passwort;
            }
 
        
            include("db/closeDbConnection.phP");

            if(strlen($user)==0){
                return false;
            }
            if(strlen($pw)==0){
                return false;
            }
            
            if($passwort==$pw){
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
?>
