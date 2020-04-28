   <?php
        session_start();
        if(!isset($_SESSION['index'])) {
            $_SESSION['index'] = 1;
        } else {
            $_SESSION['index']++;
        }

        $img = $_SESSION['index'] % 12;
        if($img < 10)
            $name = "../img/img_0" . $img . ".jpg";
        else
            $name = "../img/img_" . $img . ".jpg";
        echo '{"name":"' . $name . '"}' ;

    ?>
