
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Erste PHP-Seite</title>
</head>
<body>
		<p> Das ist eine einfache HTML-Seite mit Verarbeitung der Benutzereingabe.
	<?php if(isset($_GET["confirmButton"])) {?>
			<p> Folgender Name wurde eingegeben: <b> <?php echo $_GET["name"]; ?></b>
			<?php }
			else echo "Falsche Eingabe!"?>

</body>
</html>