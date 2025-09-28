<?php
/* Authentification requise
   （ログイン必須） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error_auth"; // 認証エラー（未ログイン）
    exit();
}

/* Vérification du jeton CSRF
   （CSRFトークン検証） */
if (!is_csrf_valid()) {
    echo "error_csrf"; // CSRFトークン不一致
    exit();
}

/* Validation du paramètre id (présence + chiffres uniquement)
   （ID検証：存在＋数字のみ） */
if (!isset($_POST['id']) || !ctype_digit($_POST['id'])) {
    echo "error_id"; // IDが無効または未指定
    exit();
}

require_once __DIR__.'/../../model/todos.php';
$id = (int)$_POST['id']; // 数値型にキャスト

/* Suppression avec contrôle de propriété (id + userId)
   （所有者チェック込みの削除：id と userId を条件に） */
$res = deleteTask($id, $_SESSION['id']);

/* Réponse
   （レスポンス） */
if ($res > 0) {
    echo "success"; // 削除成功
} else {
    echo "error_delete"; // 該当タスクなし or 削除失敗
}
exit();