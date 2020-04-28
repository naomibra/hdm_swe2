<?php
	$mysqli = new mysqli('localhost:3306', 'root', '', 'beispiele');
	
	if (mysqli_connect_errno())
	{
		echo "Keine Verbindung zur Datenbank möglich: " . mysqli_connect_error();
	}
?>