<?php
require_once __DIR__."/../../model/users.php";
/* Vérification d’authentification（認証チェック） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: /signup");
    exit();
}

if($_SERVER["REQUEST_METHOD"] === "POST")
{
    //フォームに埋め込まれたCSRFトークンと、セッションに保存されたトークンが一致するか確認
    $csrf = $_POST["csrf_token"] ?? "";

    if($csrf === $_SESSION["csrf_token"])
    {
        deleteUser($_SESSION['id']);
        session_unset(); //セッションの中身（変数id,user_name...etc）を削除
        session_destroy(); //セッションごと削除

        session_start(); //新しいセッションを開始,成功メッセージを保存,サインアップページにリダイレクト
        $_SESSION["message"]["success"] = "Votre compte a bien été supprimé";

        header("Location: /signup");
        exit;
    }
}
// Génère un token CSRF unique pour le formulaire de suppression (protection contre attaques CSRF)
// 削除フォーム用のCSRFトークンを生成し、送信時に本人確認するため
$token = bin2hex(random_bytes(50));
$_SESSION["csrf_token"] = $token;

require __DIR__."/../../view/users/delete-account.php";