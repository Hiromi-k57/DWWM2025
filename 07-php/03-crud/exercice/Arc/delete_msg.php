<?php 
// We check that the user is properly logged in.
session_start();
if(!isset($_SESSION['user_id'])) {
    header("location: login.php");
    exit();
}
$idmessage = isset($_GET["id"]) ? (int)$_GET["id"] : 0; //be sure to be the owner of the message, this is to pricise to delete on particular not any off them 
// We connect to the database.
$pdo = new PDO('mysql:host=bddsql;dbname=exo', 'root', 'root'); 

// We delete the message:
$sql = $pdo->prepare("DELETE FROM messages WHERE idMessage = ? AND idUser = ?");
$sql->execute([$idmessage, $_SESSION["user_id"]]);


// We wait 5 seconds before redirecting, so the user can see the confirmation message:
header("refresh: 5;url=/");

$title = "CRUD - Delete Message";
require "../../ressources/template/_header.php";
?>
<p>
    Vous avez bien supprimé votre message. <br>
    Vous allez être redirigé d'ici peu.
</p>
<?php 
require "../../ressources/template/_footer.php";
?>





