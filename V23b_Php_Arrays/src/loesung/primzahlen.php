<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>primzahlen</title>

</head>
<body>

<?php
//geht nur für $n<=100
$n=100;
for($i=1;$i<=$n;$i++){
    if($i==2||$i==3|| $i==5||$i==7){
    echo($i."ist eine Primzahl <br>");   
    }
    if($i>1 && $i/$i==1 && $i/1==$i && $i % 2 !=0&& $i % 3 !=0 && $i % 5 !=0 && $i % 7 !=0) {
    echo($i."ist eine Primzahl <br>");
}
}

?>


</body>
</html>
