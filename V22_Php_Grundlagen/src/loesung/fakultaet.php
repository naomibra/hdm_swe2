<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>fakultaet</title>

</head>
<body>

<?php

$x=5;
$ergebnis=1;
for($i=1;$i<=$x;$i++){
    $ergebnis=$i*$ergebnis;
}
echo("Fakultät von $x ist $ergebnis");
?>


</body>
</html>
