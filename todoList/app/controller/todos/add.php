<?php
/* Authentification requise
   （ログイン必須） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    redirectTo("/signup");
}

/* Vérification du jeton CSRF
   （ CSRFトークン検証） */
if (!is_csrf_valid()) {
    redirectTo("/", "error", "error CSRF");// 画面側で表示
}

/* Validation du champ "title" 
   （タイトルの検証） */
$title = trim($_POST['title']??""); // ← 空白削除
if (empty($title)) {            // ← 空白だけならここで弾かれる
    redirectTo("/?mess=error");
}

require_once __DIR__.'/../../model/todos.php';

/* Insertion dans la base
   （ DBへINSERT） */

$ok = addTask($title, $_SESSION['id']);

/* Redirection selon le résultat
   （結果に応じてリダイレクト） */
if ($ok) {
    redirectTo("/?mess=success");
} else {
    redirectTo("/");
}