<?php
session_start();
include "../../db_conn.php";

// Vérifier la présence des champs requis envoyés par POST
// （必須POST項目が揃っているか確認）
if (isset($_POST['uname'], $_POST['password'], $_POST['name'], $_POST['re_password'], $_POST['captcha'])) {

    // Fonction simple de nettoyage des données
    // （基本のサニタイズ）
    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    }

    // Récupération et nettoyage
    $uname    = validate($_POST['uname']);
    $name     = validate($_POST['name']);
    $pass     = trim($_POST['password']);
    $re_pass  = trim($_POST['re_password']);
    $captcha  = trim($_POST['captcha']);

    // Conserver les valeurs utiles en cas d'erreur pour pré-remplir le formulaire
    // （エラー時に値を保持して再表示）
    $user_data = 'uname=' . urlencode($uname) . '&name=' . urlencode($name);

    // Contrôles de base
    if ($uname === '') {
        header("Location: signup.php?error=Le nom d’utilisateur est requis&$user_data");
        exit();
    }
    if ($pass === '') {
        header("Location: signup.php?error=Le mot de passe est requis&$user_data");
        exit();
    }
    if ($re_pass === '') {
        header("Location: signup.php?error=La confirmation du mot de passe est requise&$user_data");
        exit();
    }
    if ($name === '') {
        header("Location: signup.php?error=Le nom complet est requis&$user_data");
        exit();
    }
    if ($pass !== $re_pass) {
        header("Location: signup.php?error=La confirmation du mot de passe ne correspond pas&$user_data");
        exit();
    }

    // Vérification du CAPTCHA（大文字小文字の揺れ対策で大文字化）
    if (!isset($_SESSION['captcha']) || strtoupper($captcha) !== $_SESSION['captcha']) {
        header("Location: signup.php?error=Le captcha est incorrect&$user_data");
        exit();
    }

    // Vérifier si l’utilisateur existe déjà
    $stmt = $conn->prepare("SELECT id FROM users WHERE user_name = ?");
    $stmt->execute([$uname]);
    if ($stmt->rowCount() > 0) {
        header("Location: signup.php?error=Ce nom d’utilisateur est déjà pris&$user_data");
        exit();
    }

    // Hacher le mot de passe
    $hashed = password_hash($pass, PASSWORD_DEFAULT);

    // Insérer l’utilisateur
    $stmt = $conn->prepare("INSERT INTO users (user_name, password, name) VALUES (?, ?, ?)");
    $ok = $stmt->execute([$uname, $hashed, $name]);

    if ($ok) {
        // Sécurité : régénérer l’ID de session après l’inscription（セッション固定対策）
        session_regenerate_id(true);

        // Démarrer la session applicative
        $_SESSION['user_name'] = $uname;
        $_SESSION['name']      = $name;
        $_SESSION['id']        = $conn->lastInsertId();

        header("Location: home.php?success=Votre compte a été créé avec succès");
        exit();
    } else {
        header("Location: signup.php?error=Une erreur inconnue est survenue&$user_data");
        exit();
    }
} else {
    // Accès direct sans formulaire
    header("Location: signup.php");
    exit();
}
