
<?php
$personen = array("Ute", "Hans");
?>
<script>
   <?php echo "var r = " . json_encode($personen) . ";"; ?>
   for(var i = 0; i < r.length; i++) {
	alert(r[i]);
   }	
</script>
