<?php
session_start();
require_once "../../db_conn.php";
/* Vérification d’authentification（認証チェック） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: signup.php");
    exit();
}

if($_SERVER["REQUEST_METHOD"] === "POST")
{
    $csrf = $_POST["csrf_token"] ?? "";

    if($csrf === $_SESSION["csrf_token"])
    {
        $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
        $stmt->execute([$_SESSION['id']]);
        session_unset();
        session_destroy();

        session_start();
        $_SESSION["message"]["success"] = "Votre compte a bien été supprimé";

        header("Location: signup.php");
        exit;
    }
}

$token = bin2hex(random_bytes(50));
$_SESSION["csrf_token"] = $token;

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Supprimer mon compte</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/signup.css">
</head>
<body>
    <form method="post" >
        <h2>Supprimer mon compte</h2>
        <p class="notice">Cette action est <strong>irréversible</strong>. 
        <br>Tous vos éléments associés seront supprimés.
        </p>
        
        <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($token, ENT_QUOTES, 'UTF-8') ?>">

        <button type="submit" id="spBtn">Supprimer définitivement</button><br>
        
    </form>
      <a class="annulerBtn" href="home.php">Annuler</a>
  
</body>
</html>
