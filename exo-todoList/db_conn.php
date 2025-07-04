<?php 

$sName = "localhost";
$uName = "root";
$pass = "";
$db_name = "todoList";

try{
    $conn = new PDO("mysql:host=$sName;dbname=$db_name",$uName,$pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "connected !";
}catch(PDOException $e){
    echo "Connection failed! : ". $e->getMessage();
}

?>

<!-- https://www.youtube.com/watch?v=aEwc4SUq6jo&t=12s  -->