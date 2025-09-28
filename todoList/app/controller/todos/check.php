<?php
/* Authentification requise
   （ログイン必須） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error_auth";
    exit();
}

/* Vérification du jeton CSRF
   （CSRFトークン検証） */
if (!is_csrf_valid()) {
    echo "error_csrf";
    exit();
}

/* Validation du paramètre id (présence + chiffres uniquement)
   （id の検証：存在＋数字のみ） */
if (!isset($_POST['id']) || !ctype_digit($_POST['id'])) {
    echo "error_id";
    exit();
}

require_once __DIR__.'/../../model/todos.php';
$id = (int)$_POST['id'];

/* Vérifier la propriété + récupérer l'état actuel
   （所有者チェック＋現在のチェック状態の取得） */
$todo = getTask($id, $_SESSION['id']);

if (!$todo) {
    echo "error_not_found"; // 該当タスクなし or 他人のタスク
    exit();
}

/* Basculer l'état (0↔1)
   （チェック状態を反転） */
$newChecked = $todo['checked'] ? 0 : 1;

$ok = checkTask($newChecked, $id);

/* Réponse : retourner le nouvel état (0/1) ou un message d’erreur
   （レスポンス：新しい状態（0/1）を返す or エラー） */
echo $ok ? (string)$newChecked : "error_update";
exit();