<?php 

class Util{
    static function rederedirect($location, $type, $em){
        header("Location: $location?error=$em");
        exit;
    }
}
?>