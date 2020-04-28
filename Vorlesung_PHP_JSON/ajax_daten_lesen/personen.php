<?php
	$personen = array();
	$personen[] = array("name" => "Ute", "alter" => 31);
	$personen[] = array("name" => "Hans", "alter" => 28);
	$personen[] = array("name" => "Peter", "alter" => 24);

	$object = array();
	$object["personen"] = $personen;
	
	echo json_encode($object);
	
?>