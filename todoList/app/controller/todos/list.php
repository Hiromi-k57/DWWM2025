<?php
require __DIR__."/../../model/todos.php";
/*
    -Vérification d’authentification : redirige vers /signup si non connecté
    -Récupère les tâches de l’utilisateur connecté et rend la vue

   - 認証チェック：このページに来たユーザーがログイン中か確認,その人のタスク一覧をDBから取得,最後にビューapp/view/todos/list.phpを表示
   - セッションにidとuser_nameが無ければ未ログインと判定し、/signup へリダイレクト 
   */
  
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: /signup");
    exit();
}

// ログインユーザーのIDを使って、その人のタスクをまとめて取得（他人のを読まない）
$todos = getAllTasks($_SESSION['id']);
require __DIR__.'/../../view/todos/list.php';
?>