<?php
// Pas d'espaces avant ce tag. （先頭に空白禁止）
session_start();

/* 1) Refuser l'accès direct : seulement en POST
   （1) 直アクセス禁止：POSTのみ受け付け） */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "error_method";
    exit();
}

/* 2) Authentification requise
   （2) ログイン必須） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error_auth";
    exit();
}

/* 3) Vérification du jeton CSRF
   （3) CSRFトークン検証） */
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    echo "error_csrf";
    exit();
}

/* 4) Validation du paramètre id (présence + chiffres uniquement)
   （4) id の検証：存在＋数字のみ） */
if (!isset($_POST['id']) || !ctype_digit($_POST['id'])) {
    echo "error_id";
    exit();
}

require_once '../db_conn.php';
$id = (int)$_POST['id'];

/* 5) Vérifier la propriété + récupérer l'état actuel
   （5) 所有者チェック＋現在のチェック状態の取得） */
$todos = $conn->prepare("SELECT id, checked FROM todos WHERE id = ? AND userId = ?");
$todos->execute([$id, $_SESSION['id']]);
$todo = $todos->fetch(PDO::FETCH_ASSOC);

if (!$todo) {
    echo "error_not_found"; // 該当タスクなし or 他人のタスク
    exit();
}

/* 6) Basculer l'état (0↔1)
   （6) チェック状態を反転） */
$newChecked = $todo['checked'] ? 0 : 1;

$up = $conn->prepare("UPDATE todos SET checked = ? WHERE id = ?");
$ok = $up->execute([$newChecked, $id]);

/* 7) Réponse : retourner le nouvel état (0/1) ou un message d’erreur
   （7) レスポンス：新しい状態（0/1）を返す or エラー） */
echo $ok ? (string)$newChecked : "error_update";
exit();