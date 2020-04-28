<?php
$accounts = array( "Hans" => "hans72",
		"Ute" => "123456",
		"Peter" => "peterABC"
);


if (isset($accounts[$_POST['user']])) {
	echo "NOK";
} else {
	echo "OK";
}
?>


