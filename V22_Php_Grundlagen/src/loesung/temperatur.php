<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Temperatur</title>

</head>
<body>

<?php
$FAKTOR1= 5/9;
$FAKTOR2= 1.8;
$DIFFERENZ=32;

$c1=20;
$f2=-40;
//Celsius in Fahrenheit
 If($c1){
     $f1=$FAKTOR2*$c1+$DIFFERENZ;
     echo("$c1 Grad Celsius sind $f1 Grad Fahrenheit <br>");
     
 }
 //Fahrenheit in Celsius
 If($f2){
    $c2=$FAKTOR1*($f2-$DIFFERENZ);
    echo("$f2 Grad Fahrenheit sind $c2 Grad Celsius");
}
?>

</body>
</html>
