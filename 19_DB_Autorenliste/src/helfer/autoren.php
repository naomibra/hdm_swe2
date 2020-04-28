

<?php

    include("db/openDbConnection.php");
    $abfrage = "SELECT * FROM autoren";
    $ergebnis = $mysqli->query($abfrage);
    if($ergebnis != false) {
        $autoren = array();
        $i = 0;
        while($row = $ergebnis -> fetch_object()) {
            $autoren[$i]["name"] = $row->name;
            $autoren[$i]["vor"] = $row->vorname;
            $autoren[$i]["geb"] = $row->geburtsjahr;
            if($autoren[$i]["geb"] == -1) {
                $autoren[$i]["geb"] = "-";
            }
            $autoren[$i]["tod"] = $row->todesjahr;
            if($autoren[$i]["tod"] == -1) {
                $autoren[$i]["tod"] = "-";
            }

            $buecher = array();
            $abfrage2 = "SELECT * FROM buecher WHERE autorId = $row->id";
            $ergebnis2 = $mysqli->query($abfrage2);
            if($ergebnis2 != false) {
                
                $j = 0;
                while($row2 = $ergebnis2 -> fetch_object()) {
                    $buecher[$j]["titel"] = $row2->titel;
                    $j++;
                }
            }
            $autoren[$i]["buecher"] = $buecher;
            $i++;
            
        }
    }
    include("db/closeDbConnection.php");

    $autorenArray = array();

    $autorenArray["autoren"] = $autoren;

    echo json_encode($autorenArray);

?>

