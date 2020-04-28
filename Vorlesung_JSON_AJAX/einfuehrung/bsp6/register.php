
<script>
function checkUsername() {
    ajax = new XMLHttpRequest();
    if(ajax!=null){
        ajax.open("POST","http://localhost/Vorlesung_JSON/bsp6/nameCheck.php",true);
        ajax.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function(){
			if(this.readyState == 4){
				if(this.status == 200){
					console.log("Antwort: " + this.responseText);
					if(this.responseText.indexOf("NOK") != -1)  {
						alert("Der Benutzername ist bereits vergeben!");
					}
					else{
						alert("Der Benutzername kann verwendet werden!");
					}
				}
				else{
					alert("Es ist ein Fehler aufgetreten! ("+this.statusText+")");
				}
			}
	}
		var user = "user=" + document.getElementsByName("user")[0].value;
		ajax.send(user);
    }
    else{
		alert("Ihr Browser unterstützt kein Ajax!");
    }
}
</script>

<h2>Registrierung:</h2>
<form method="POST">
Benutzername:
<input type="text" name="user" onChange="checkUsername()"/><br>
Passwort:
<input type="password" name="pw1" /><br>
Passwortwiederholung:
<input type="password" name="pw2" /><br>
<input type="submit" name="button" value="OK" /><br>
</form>