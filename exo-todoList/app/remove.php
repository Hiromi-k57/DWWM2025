<?php
// セッション開始（ユーザー認証やCSRFトークンの検証に必要）
session_start();

// -------------------------
// 1. ユーザー認証チェック
// -------------------------
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error_auth"; // 認証エラー（未ログイン）
    exit();
}

// -------------------------
// 2. CSRFトークン検証
// -------------------------
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    echo "error_csrf"; // CSRFトークン不一致
    exit();
}

// -------------------------
// 3. IDパラメータの検証
// -------------------------
if (!isset($_POST['id']) || !ctype_digit($_POST['id'])) {
    echo "error_id"; // IDが無効または未指定
    exit();
}

require '../db_conn.php'; // DB接続
$id = (int) $_POST['id']; // 数値型にキャスト

// -------------------------
// 4. 削除処理（ユーザーIDも条件に追加）
// -------------------------
$stmt = $conn->prepare("DELETE FROM todos WHERE id = ? AND userId = ?");
$res = $stmt->execute([$id, $_SESSION['id']]);

if ($res && $stmt->rowCount() > 0) {
    echo "success"; // 削除成功
} else {
    echo "error_delete"; // 該当タスクなし or 削除失敗
}

$conn = null; // DB切断
exit();
