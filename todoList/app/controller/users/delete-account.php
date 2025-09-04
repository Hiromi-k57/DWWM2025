<?php
require_once __DIR__."/../../model/users.php";
/* Vérification d’authentification（認証チェック） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: /signup");
    exit();
}

if($_SERVER["REQUEST_METHOD"] === "POST")
{
    $csrf = $_POST["csrf_token"] ?? "";

    if($csrf === $_SESSION["csrf_token"])
    {
        deleteUser($_SESSION['id']);
        session_unset();
        session_destroy();

        session_start();
        $_SESSION["message"]["success"] = "Votre compte a bien été supprimé";

        header("Location: /signup");
        exit;
    }
}

$token = bin2hex(random_bytes(50));
$_SESSION["csrf_token"] = $token;

require __DIR__."/../../view/users/delete-account.php";