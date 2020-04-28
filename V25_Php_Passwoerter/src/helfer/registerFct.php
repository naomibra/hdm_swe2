<?php
function check($user, $pw1, $pw2) {
	
	if(strlen($user)==0){
		return false;
	}
	if(strlen($pw1)==0){
		return false;
	}
	if(strlen($pw2)==0){
		return false;
	}
	if(!($pw1 == $pw2)) {
		return false;
	}
	
	include("db/openDbConnection.php");
	$abfrage = "SELECT name FROM benutzer WHERE name ='" . $user ."'";
	$result = $mysqli -> query($abfrage);
	if ($result -> fetch_object())
	{
			return false;
		}
		else {
			$abfrage = "INSERT INTO benutzer (NAME, PASSWORT) VALUES ('" . $user . "', '" . $pw1 . "')";		
			$ergebnis = $mysqli -> query($abfrage);
			if($ergebnis) {
				return true;
			}
			else {
				return false;	
			}
	}
	include("db/closeDbConnection.php");
}
?>