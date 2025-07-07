<?php 
include "../Utils/Validation.php";
include "../Utils/Util.php";

if($_SERVER['REQUEST_METHOD'] == "POST"){
   $user_name = Validation::clean($_POST["username"]);
   $full_name = Validation::clean($_POST["fullname"]);
   $email = Validation::clean($_POST["email"]);
   $password = Validation::clean($_POST["password"]);
   $re_password = Validation::clean($_POST["re_password"]);

   if (!validation::name($full_name)) {
        $em = "Indvalid full name !";
        Util::redirect("../signup.php", "error", $em);
   }else if (!validation::username($user_name)) {
        $em = "Indvalid full name !";
        Util::redirect("../signup.php", "error", $em);
   }

}else {
    $em = "An error occurred"; //エラーが発生しました、を知らせるuri ↓
    Util::redirect("../signup.php", "error", $em);    
}



// https://www.youtube.com/watch?v=bzbd5aSUX-Y 19:53-