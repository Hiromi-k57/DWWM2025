<?php

/* 2) Authentification requise
   （2) ログイン必須） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    redirectTo("/signup");
}

/* 3) Vérification du jeton CSRF
   （3) CSRFトークン検証） */
if (!is_csrf_valid()) {
    redirectTo("/", "error", "error CSRF");// 画面側で表示
}

/* 4) Validation du champ "title" 
   （4) タイトルの検証） */
$title = trim($_POST['title']??""); // ← 空白削除
if (empty($title)) {            // ← 空白だけならここで弾かれる
    redirectTo("/?mess=error");
}

require_once __DIR__.'/../../model/todos.php';

/* 5) Insertion dans la base
   （5) DBへINSERT） */

$ok = addTask($title, $_SESSION['id']);

/* 6) Redirection selon le résultat
   （6) 結果に応じてリダイレクト） */
if ($ok) {
    redirectTo("/?mess=success");
} else {
    redirectTo("/");
}