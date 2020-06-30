<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Studenten</title>

</head>
<body>

<?php

$studenten= array("4363"=>"Ute","6514"=>"Hans","5478"=>"Petra","4352"=>"Peter","6548"=>"Markus");

//Namen
function namen($array){
$keys=array_keys($array);
$namen="Alle Namen:";
foreach($keys as $name){
    $namen=$namen.$array[$name]." ";
}
echo $namen."<br>";
}
namen($studenten);

//Tabellenform
function ausgabeTabelle($array){
$keys=array_keys($array);
$ausgabe="Matrikelnummer Name <br>";
foreach($keys as $schlüssel){
$ausgabe=$ausgabe.$schlüssel." ".$array[$schlüssel]."<br>";
}
echo($ausgabe);
}
ausgabeTabelle($studenten);

//Hinzufügen ute
$studenten["1234"]="Ute";
ausgabeTabelle($studenten);
//ute wird in der Tabelle aufgeführt

//hinzufügen Peter
$studenten["4363"]="Peter";
ausgabeTabelle($studenten);
// die erste Ute wird überschrieben, da selber key
?>


</body>
</html>
