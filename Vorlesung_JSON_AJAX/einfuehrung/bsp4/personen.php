<?php
$mysqli = new mysqli('localhost:3306', 'root','root', 'personenphp');

if (mysqli_connect_errno()) {
	echo "Keine Verbindung zur Datebank möglich: " . mysqli_connect_error();
}

$abfrage = "SELECT name, palter FROM person";
$ergebnis = $mysqli -> query($abfrage);
$result = array();
if($ergebnis != false) {
	while($row = $ergebnis -> fetch_object()) { 
		$person = array();
		$person[] = $row->name;
		$person[] = $row->palter;
	
		$result[] = $person;
	}
}
$mysqli->close();

echo json_encode($result);
?>