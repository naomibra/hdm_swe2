<?php

    $name = $_POST["name"];
    $vorname = $_POST["vorname"];
    $geb = $_POST["geb"];
    $tod = $_POST["tod"];

    $buecher = $_POST["buch"];


    include("db/openDbConnection.php");
    //INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...); 
    if($geb != "" && $tod != "") {
        $neu = "INSERT into autoren (`name`, `vorname`, `geburtsjahr`, `todesjahr`) VALUES ('$name', '$vorname', $geb, $tod)";
    } else {
        if($geb != "") {
            $neu = "INSERT into autoren (`name`, `vorname`, `geburtsjahr`) VALUES ('$name', '$vorname', $geb)";
        } else {
            if($tod != "") {
                $neu = "INSERT into autoren (`name`, `vorname`, `todesjahr`) VALUES ('$name', '$vorname', $tod)";
            } else {
                $neu = "INSERT into autoren (`name`, `vorname`) VALUES ('$name', '$vorname')";
            }
        }
    }

    $autor = $mysqli -> query($neu);
    $id = $mysqli->insert_id;

    $buch = true;
    for($i=0; $i < count($buecher); $i++) {
        if($buecher[$i] != "") {
            $neubuch = "INSERT into buecher (`titel`, `autorId`) VALUES ('$buecher[$i]', $id)";
            if(!$mysqli -> query($neubuch)) {
                $buch = false;
            }
        }
    }
    include("db/closeDbConnection.php");

    if($autor & $buch) {
        echo '{"antwort" : "Eingaben gespeichert"}';
    }
    else {
        echo '{"antwort" : "Fehler beim Speichern der Eingaben"}';
    }

?>