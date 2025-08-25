<?php
session_start();

/* 1) Refuser l'accès direct : seulement en POST
   （1) 直アクセス禁止：POSTのみ受け付け） */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: ../index.php");
    exit();
}

/* 2) Authentification requise
   （2) ログイン必須） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: ../app/user/signup.php");
    exit();
}

/* 3) Vérification du jeton CSRF
   （3) CSRFトークン検証） */
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    header("Location: ../index.php?mess=error_csrf"); // 画面側で表示
    exit();
}

/* 4) Validation du champ "title" 
   （4) タイトルの検証） */
if (!isset($_POST['title'])) {
    header("Location: ../index.php?mess=error");
    exit();
}
$title = trim($_POST['title']); // ← 空白削除
if (empty($title)) {            // ← 空白だけならここで弾かれる
    header("Location: ../index.php?mess=error");
    exit();
}

require_once '../db_conn.php';

/* 5) Insertion dans la base
   （5) DBへINSERT） */
$stmt = $conn->prepare("INSERT INTO todos (title, userId) VALUES (?, ?)");
$ok   = $stmt->execute([$title, $_SESSION['id']]);

/* 6) Redirection selon le résultat
   （6) 結果に応じてリダイレクト） */
if ($ok) {
    header("Location: ../index.php?mess=success");
} else {
    header("Location: ../index.php");
}
exit();