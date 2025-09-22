<?php
include __DIR__."/../../model/users.php";

// Vérifier la présence des champs requis envoyés par POST
// （必須POST項目が揃っているか確認,どれか欠けていたら後段に行かず最終のelseで/signup に戻す）
if (isset($_POST['uname'], $_POST['password'], $_POST['name'], $_POST['re_password'], $_POST['captcha'])) {

    // Récupération et nettoyage
    $uname    = validate($_POST['uname']);
    $name     = validate($_POST['name']);
    $pass     = trim($_POST['password']);
    $re_pass  = trim($_POST['re_password']);
    $captcha  = trim($_POST['captcha']);

    // Conserver les valeurs utiles en cas d'erreur pour pré-remplir le formulaire
    // （エラー時に値を保持して再表示）
    $user_data = 'uname=' . urlencode($uname) . '&name=' . urlencode($name);
    $error = "";
    // Contrôles de base どれかに引っかかるたびに最後に引っかかった理由が$error表示される
    if ($uname === '') {
        $error ="Le nom d’utilisateur est requis";
    }
    if ($pass === '') {
        $error ="Le mot de passe est requis";
    }
    if ($re_pass === '') {
        $error ="La confirmation du mot de passe est requise";
    }
    if ($name === '') {
        $error ="Le nom complet est requis";
    }
    if ($pass !== $re_pass) {
        $error = "La confirmation du mot de passe ne correspond pas";
    }

    // Règle de complexité du mot de passe（パスワード強度チェック）
    // 6+ caractères, au moins 1 minuscule, 1 majuscule, 1 chiffre, 1 caractère spécial (!?@#$%^&*+-)
    if (!preg_match('/^(?=.*[!?@#$%^&*+\-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/', $pass)) {
        $error = "Veuillez utiliser au moins 6 caractères incluant minuscule, majuscule, chiffre et caractère spécial";
    }

    // Vérification du CAPTCHA（strtoupperで大文字化してから比較）
    if (!isset($_SESSION['captcha']) || strtoupper($captcha) !== $_SESSION['captcha']) {
        $error = "Le captcha est incorrect";
    }

    // Vérifier si l’utilisateur existe déjà
    $user = getUserByName($uname);
    if ($user) {
        $error = "Ce nom d’utilisateur est déjà pris";
    }

    if(!empty($error)) //$errorが空でない(つまり何かエラーが発生した)場合に処理,エラーurl
    {
        redirectTo("/signup?$user_data","error", $error); //サインアップ画面に戻る,エラー,実際のエラーメッセージ
    }
    // Hacher le mot de passe
    // パスワードハッシュ bcrypt(元のパスに戻せない,同じでもハッシュ結果毎回違う)
    $hashed = password_hash($pass, PASSWORD_DEFAULT);

    // Insérer l’utilisateur
    $id = addUser($uname, $hashed, $name);

    if ($id !== 0) {
        // Sécurité : régénérer l’ID de session après l’inscription（セッション固定攻撃対策）
        session_regenerate_id(true);

        // Démarrer la session applicative
        $_SESSION['user_name'] = $uname;
        $_SESSION['name']      = $name;
        $_SESSION['id']        = $id;

        redirectTo("/home","success", "Votre compte a été créé avec succès");
        
    } else {
        redirectTo("/signup?$user_data", "error", "Une erreur inconnue est survenue");
    }
} else {
    // Accès direct sans formulaire　フォームを経由しない直アクセス
    redirectTo("/signup");
}
