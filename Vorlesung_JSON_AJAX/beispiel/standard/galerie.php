<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bildergalerie</title>
    
</head>
<body>
    <?php
        session_start();
        if(isset($_POST['next'])) {
            if(!isset($_SESSION['index'])) {
                $_SESSION['index'] = 1;
            } else {
                $_SESSION['index']++;
            }
        }
        if(isset($_POST['reset'])) {
            if(isset($_SESSION['index']))
                $_SESSION['index'] = 0;
        }
    ?>
    
    <form action="" method="post">
        <button type="submit" name="next" value="next">Nächstes Bild</button>
        <button type="submit" name="reset" value="reset">Zurücksetzen</button>
    </form>

    <?php
        for($i = $_SESSION['index']; $i > 0; $i--) {
            $img = $i % 12;
            if($img < 10)
                $name = "../img/img_0" . $img . ".jpg";
            else
                $name = "../img/img_" . $img . ".jpg";

            echo $name . "<br>";    
            echo '<img width="300px" src="' . $name . '"/><br>';
        }
    ?>
</body>
</html>