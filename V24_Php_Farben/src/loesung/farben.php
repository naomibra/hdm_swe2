

<?php
 
    echo $b1=rand(0,255);
    echo $b2=rand(0,255);
    echo $b3=rand(0,255);
    echo  $c1=rand(0,255);
    echo $c2=rand(0,255);
    echo $c3=rand(0,255);
   //echo json_encode($b1);
    $hintergrund="rgb($b1, $b2, $b3)";
   $vordergrund="rgb($c1, $c2, $c3)";

   $x=array(
       "farbe"=>$hintergrund,
       "schrift"=>$vordergrund
   );
   $y= array(
       "konfig"=>$x
   );

   echo json_encode($y);
  
?>

