<?php
	$personen = array();
	$personen[] = array("Ute", 31);
	$personen[] = array("Hans", 28);
	$personen[] = array("Peter", 24);
	
	$result = '[';
	$i = 0;
	foreach($personen as $person) {
		$result = $result . '{"name":"' . $person[0] . '","alter":' . $person[1] . '}';
		$i++;
		if($i < count($personen)) {
			$result = $result . ',';
		}
	}		
	$result = $result . "]";
	
	echo($result);
?>