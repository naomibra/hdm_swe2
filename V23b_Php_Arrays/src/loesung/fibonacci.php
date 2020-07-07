<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>fibonacci</title>

</head>
<body>

<?php

/*
function fibonacci($anzahl){
    $fib=0;
    for($i=1;$i<=$anzahl;$i++){
        
        if($i<=1){
           echo("1.te Fibonacci-Zahl:1 <br> ");
        }
        if($i==2){
            echo("2.te Fibonacci-Zahl:1 <br> ");
         }
         if($i>=2){
             
             $fib=($i-1)+($i-2);

            echo($i."te Fibonacci-Zahl:".$fib. "<br>");
         }
    }
}
fibonacci(20);
*/
//richtiger weg
/*
function fibonacci($anzahl) {
    if ($anzahl<= 1){ return 1;}
  
    return ($anzahl - 1) + ($anzahl - 2);

}
$n=20;
for($i=1;$i<=$n;$i++){
    /*if ($i==1){
        echo("1 te Fibonacci-Zahl:".fibonacci($i)."<br>");
    }
    echo($i."te Fibonacci-Zahl:".fibonacci($i)."<br>");
}
*/
$n=20;
$fibo=[0,1];
for ($i=0; $i <=$n; $i++) { 
    if($fibo[$i]==0){
    echo("1 te Fibonacci-Zahl:".$fibo[1]."<br>");
    }
    //if($fibo[$i]>)
/*$fibo=($i-1)+($i-2);
//echo($fibo."<br>");
echo($i."te Fibonacci-Zahl:".$fibo."<br>");*/
}
?>


</body>
</html>
