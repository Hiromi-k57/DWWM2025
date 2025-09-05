<?php
require __DIR__."/../../model/todos.php";
/* Vérification d’authentification : accès réservé aux utilisateurs connectés
   （認証チェック：未ログインならサインアップへ） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: /signup");
    exit();
}

$todos = getAllTasks($_SESSION['id']);
require __DIR__.'/../../view/todos/list.php';
?>