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
    echo "error_auth"; // 認証エラー（未ログイン）
    exit();
}

/* 3) Vérification du jeton CSRF
   （3) CSRFトークン検証） */
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    echo "error_csrf"; // CSRFトークン不一致
    exit();
}

/* 4) Validation du paramètre id (présence + chiffres uniquement)
   （4) ID検証：存在＋数字のみ） */
if (!isset($_POST['id']) || !ctype_digit($_POST['id'])) {
    echo "error_id"; // IDが無効または未指定
    exit();
}

require_once '../db_conn.php';
$id = (int)$_POST['id']; // 数値型にキャスト

/* 5) Suppression avec contrôle de propriété (id + userId)
   （5) 所有者チェック込みの削除：id と userId を条件に） */
$stmt = $conn->prepare("DELETE FROM todos WHERE id = ? AND userId = ?");
$res  = $stmt->execute([$id, $_SESSION['id']]);

/* 6) Réponse
   （6) レスポンス） */
if ($res && $stmt->rowCount() > 0) {
    echo "success"; // 削除成功
} else {
    echo "error_delete"; // 該当タスクなし or 削除失敗
}
exit();