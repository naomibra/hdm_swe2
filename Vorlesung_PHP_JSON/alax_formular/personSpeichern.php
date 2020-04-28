<?php
    $name = $_POST['name'];
    $alter = $_POST['alter'];

    include("db/openDbConnection.php");

    $neu = "INSERT into personen (`name`, `alterPerson`) VALUES ('$name', $alter)";
    
    $erg = $mysqli -> query($neu);
    
    if($erg == true) {
        echo '{"antwort" : "Eingabe gespeichert"}';
    } else {
        echo '{"antwort" : "Eingabe nicht gespeichert"}';
    }

    include("db/closeDbConnection.php");
?>
