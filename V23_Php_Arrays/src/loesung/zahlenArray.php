<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Zahlen</title>

</head>
<body>

<?php

$zahlen=array(45,2,84,16,24,99);
echo("[".$zahlen[0].", ".$zahlen[1].", ".$zahlen[2].", ".$zahlen[3].", ".$zahlen[4].", ".$zahlen[5]."]");
//Durchschnitt
function durchschnitt ($array){
    $sum=0;
    for($i=0;$i<count($array);$i++){
        $sum=$sum+$array[$i];
    }
     return $durchschnitt=$sum/count($array);
}

echo("<br>Der Duchschnitt ist: ".durchschnitt($zahlen));

//Größste Zahl
function grossteZahl($array){
$i=0;
$index=0;
while($i<count($array)){
    if($array[$i]>$index){
        $index=$array[$i];
        
    }
$i++;
}
return $index;
}
echo("<br> Größste Zahl im Array ist: ".grossteZahl($zahlen));

//Zahl enthalten
function enthalten($array,$zahl){
    
    $i=0;
    $enthaelt=false;
    while($i<count($array)){
        if($array[$i]==$zahl){
            $enthaelt=true;
        }
        $i++;
    }
    if($enthaelt==true){
        echo("<br>".$zahl." ist im Array erhalten");
    }
    else{
        echo("<br>".$zahl." ist nicht im Array erhalten");
    }

}

enthalten($zahlen,9);
enthalten($zahlen,2);

?>


</body>
</html>
