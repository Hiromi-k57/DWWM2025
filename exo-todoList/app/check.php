<?php
// セッション開始
session_start();

// ユーザーがログインしているか確認
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error";
    exit();
}

// CSRFトークン検証
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    echo "error_csrf";
    exit();
}

// IDの存在確認と型チェック
if (isset($_POST['id']) && ctype_digit($_POST['id'])) {
    require '../db_conn.php';

    $id = (int) $_POST['id'];

    // 該当タスクが現在のユーザーのものか確認
    $todos = $conn->prepare("SELECT id, checked FROM todos WHERE id = ? AND userId = ?");
    $todos->execute([$id, $_SESSION['id']]);
    $todo = $todos->fetch();

    if ($todo) {
        $uChecked = $todo['checked'] ? 0 : 1;

        // 状態を更新
        $res = $conn->prepare("UPDATE todos SET checked = ? WHERE id = ?");
        $updateRes = $res->execute([$uChecked, $todo['id']]);

        if ($updateRes) {
            echo $uChecked; // 新しい状態を返す
        } else {
            echo "error_update";
        }
    } else {
        echo "error_not_found";
    }

    $conn = null;
    exit();

} else {
    echo "error_id";
    exit();
}
