<?php
$user = $_POST["user"];
$pw = $_POST["pw"];


$accounts = array( 	"Hans" => "hans72",
					"Ute" => "123456",
					"Peter" => "peterABC"
					);

if(empty($user)){
	echo ("Kein Benutzername eingegeben. ");
}
if(empty($pw)){
	echo ("Kein Passwort eingegeben.<br>");
}


if(isset($accounts[$user]) && $accounts[$user]==$pw){
	echo ("Herzlich willkommen");
} else {
	echo ("Login fehlgeschlagen");
}

?>