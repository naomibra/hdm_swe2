<?php
	$br = rand(0, 255);
	$bb = rand(0, 255);
	$bg = rand(0, 255);
	$background = "rgb(" . $br . ", " . $bg . ", " . $bb .")";
	
	$cr = rand(0, 255);
	$cb = rand(0, 255);
	$cg = rand(0, 255);
	$color = "rgb(" . $cr . ", " . $cg . ", " . $cb .")";
	
	$colors = array("konfig" => array("farbe" => $background, "schrift" => $color));
	
	echo json_encode($colors);
?>