<?php 
include "../Utils/Validation.php";

if($_SERVER['REQUEST_METHOD'] == "POST"){
   $user_name = Validation::clean($_POST["username"]);
   $full_name = Validation::clean($_POST["fullname"]);
   $email = Validation::clean($_POST["email"]);
   $password = Validation::clean($_POST["password"]);
   $re_password = Validation::clean($_POST["re_password"]);

   echo "full_name";
}else {
    $em = "An error occurred"; //エラーが発生しました、を知らせるuri ↓
    header("Location: ../signup.php?error=$em");
}

?>

<!-- https://www.youtube.com/watch?v=bzbd5aSUX-Y 13:48- -->