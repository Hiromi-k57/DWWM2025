<?php


/* 2) Authentification requise
   （2) ログイン必須） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error_auth";
    exit();
}

/* 3) Vérification du jeton CSRF
   （3) CSRFトークン検証） */
if (!is_csrf_valid()) {
    echo "error_csrf";
    exit();
}

/* 4) Validation du paramètre id (présence + chiffres uniquement)
   （4) id の検証：存在＋数字のみ） */
if (!isset($_POST['id']) || !ctype_digit($_POST['id'])) {
    echo "error_id";
    exit();
}

require_once __DIR__.'/../../model/todos.php';
$id = (int)$_POST['id'];

/* 5) Vérifier la propriété + récupérer l'état actuel
   （5) 所有者チェック＋現在のチェック状態の取得） */
$todo = getTask($id, $_SESSION['id']);

if (!$todo) {
    echo "error_not_found"; // 該当タスクなし or 他人のタスク
    exit();
}

/* 6) Basculer l'état (0↔1)
   （6) チェック状態を反転） */
$newChecked = $todo['checked'] ? 0 : 1;

$ok = checkTask($newChecked, $id);

/* 7) Réponse : retourner le nouvel état (0/1) ou un message d’erreur
   （7) レスポンス：新しい状態（0/1）を返す or エラー） */
echo $ok ? (string)$newChecked : "error_update";
exit();