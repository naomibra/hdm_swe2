<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Größste Zahl</title>

</head>
<body>

<?php
$a=300;
$b=15;
$c=60;

$max=$a;

if($b>$max){
    $max=$b;
}
if($c>$max){
    $max=$c;
}
echo("Von $a,$b und $c ist die höchste Zahl:$max");

?>


</body>
</html>
