<?php
$title = " 03-CRUD - excercice ";
require("../../ressources/template/_header.php");

//portNo.はcompose.yamlにある
$dsn = "mysql:host=bddsql;port=3306;dbname=blog;charset=utf8mb4";

$pdo = new PDO($dsn, "root", "root", [
    // PDO が表示するエラーの種類:    
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    // データベースから取得したデータをどのように表示するか
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    // PDO に準備されたステートメントをエミュレートしないように指示します (下記参照)
    // PDO::ATTR_EMULATE_PREPARES => false
]);

$idUser = $_GET["id"];

$sqlMessages = $pdo->query("SELECT * FROM messages");

$messages = $sqlMessages->fetchAll();


$sqlMessageId =$pdo->prepare("SELECT * FROM messages WHERE idUser = ?");


$sqlMessageId->execute([$idUser]);
$messageFromPrepare = $sqlMessageId->fetchAll();
var_dump($messageFromPrepare);


if(session_status() !== PHP_SESSION_ACTIVE)
{
    session_start();
}

if(isset($_SESSION["logged"]) && $_SESSION["logged"] ===true)
{
    header("Location: /");
    exit;
}
$email = $pass = "";
$error = [];

if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login']))
{
    if(empty($post["email"]))
    {
        $error["email"] = "Veuillez entrer un email";
    }
    else
    {
        $email = trim($_POST["email"]);
    }
    if(empty($_POST["password"]))
    {
        $error["password"] = "Veuillez entrer un mot de pass";
    }
    else
    {
        $pass = trim($Post["password"]);
    }

//     if(empty($error))
//     {
//         $users = file_get_contents("")
//     }
 }
?>

<form action="../exo.php" method="post">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <span class="error"><?= $error["email"]??"" ?></span>
        <br>
        <label for="password">Mot de Passe</label>
        <input type="password" name="password" id="password">
        <span class="error"><?= $error["password"]??"" ?></span>
        <br>
        <button type="submit" name="login">Connexion</button>
        <span class="error"><?= $error["login"]??"" ?></span>
    </form>




<?php 
require("../../ressources/template/_footer.php");
?>