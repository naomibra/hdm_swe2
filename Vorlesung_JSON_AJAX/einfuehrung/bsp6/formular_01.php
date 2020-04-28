<!DOCTYPE>
<html>
<head>
<title>Erstes Formular</title>
</head>
<body>
	<?php

		if(isset($_GET["confirmButton"])) { 
			if(empty($_GET["name"])) 
				print "Der Name muss eingegeben werden.";
			else {
				if(is_numeric($_GET["zahl"])) 
					//header("location:formular_02.php?name={$_GET["name"]}");
					//header("location:formular_02.php?name='Ute'");
					header("location:formular_02.php");
				else 
					print "Keine Zahl eingegeben!";
				}
				
		}	
	?>
	<form action="formular_01.php" method="get">
		<p> Das ist eine einfache HTML-Seite mit einem Eingabefeld.</p>
		<p> Name der Person: </p>
			<input type="text" name="name"/>
			<input type="text" name="zahl"/>
			<input type ="submit" name ="confirmButton" value="Eingabe"/>
	</form>
</body>
</html>