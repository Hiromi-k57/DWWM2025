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
// フォームやAJAXから送られてきたトークンが、
// セッションに保存されているトークンと一致するか確認
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    echo "error_csrf"; // CSRFトークン不一致
    exit();
}

// -------------------------
// 3. IDパラメータの検証
// -------------------------
// POSTされた "id" が存在していて、整数値のみで構成されているかを確認
if (isset($_POST['id']) && ctype_digit($_POST['id'])) {
    require '../db_conn.php'; // DB接続

    $id = (int) $_POST['id']; // 数値型にキャストしてSQLインジェクション対策

    // -------------------------
    // 4. 権限チェック
    // -------------------------
    // 削除対象のタスクが、現在ログインしているユーザーのものかを確認
    $stmt = $conn->prepare("SELECT id FROM todos WHERE id = ? AND userId = ?");
    $stmt->execute([$id, $_SESSION['id']]);
    $todo = $stmt->fetch();

    if ($todo) {
        // -------------------------
        // 5. 削除処理
        // -------------------------
        $res = $conn->prepare("DELETE FROM todos WHERE id = ?");
        $deleteRes = $res->execute([$todo['id']]);

        if ($deleteRes) {
            echo "success"; // 削除成功
        } else {
            echo "error_delete"; // 削除失敗（DBエラーなど）
        }
    } else {
        echo "error_not_found"; // 該当タスクが見つからない（または他人のタスク）
    }

    $conn = null; // DB接続を閉じる
    exit();

} else {
    echo "error_id"; // IDが無効または未指定
    exit();
}
