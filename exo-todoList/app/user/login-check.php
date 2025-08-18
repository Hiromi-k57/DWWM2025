<?php
session_start();
include "../../db_conn.php";

/* Initialisation du compteur d'échecs de connexion 
   （ログイン失敗回数の初期化） */
if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
}
if (!isset($_SESSION['last_attempt_time'])) {
    $_SESSION['last_attempt_time'] = time();
}

/* 1) Vérifier le verrouillage (brute force simple) 
   （1) ロックアウト判定：単純ブルートフォース対策） */
$lockout_time = 30; // secondes（秒）
$max_attempts = 3;

if ($_SESSION['login_attempts'] >= $max_attempts) {
    if (time() - $_SESSION['last_attempt_time'] < $lockout_time) {
        header("Location: login.php?error=Trop de tentatives. Réessayez dans 30 secondes.");
        exit();
    } else {
        // Réinitialiser après la période de verrouillage
        // （ロックアウト期間後にリセット）
        $_SESSION['login_attempts'] = 0;
        $_SESSION['last_attempt_time'] = time();
    }
}

/* 2) Vérifier les champs du formulaire 
   （2) フォーム入力の確認） */
if (isset($_POST['uname']) && isset($_POST['password'])) {

    // Nettoyage basique
    // （簡単な入力データのサニタイズ処理）
    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    }

    $uname = validate($_POST['uname']);
    $pass  = trim($_POST['password']);

    if ($uname === '') {
        header("Location: login.php?error=Nom d'utilisateur requis");
        exit();
    } else if ($pass === '') {
        header("Location: login.php?error=Mot de passe requis");
        exit();
    } else {
        $sql = "SELECT * FROM users WHERE user_name=?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$uname]);

        if ($stmt->rowCount() === 1) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if (password_verify($pass, $row["password"])) {
                // Succès : régénérer l’ID de session (sécurité)
                // （ログイン成功時：セッションIDを再生成してセキュリティ強化）
                session_regenerate_id(true);

                $_SESSION['user_name'] = $row['user_name'];
                $_SESSION['name']      = $row['name'];
                $_SESSION['id']        = $row['id'];

                // Réinitialiser les tentatives après succès
                // （成功したら試行回数をリセット）
                $_SESSION['login_attempts'] = 0;

                header("Location: home.php");
                exit();
            } else {
                // Mauvais mot de passe → incrémenter les tentatives
                // （パスワード誤り → 試行回数を増やす）
                $_SESSION['login_attempts']++;
                $_SESSION['last_attempt_time'] = time();
                header("Location: login.php?error=Nom d'utilisateur ou mot de passe incorrect");
                exit();
            }
        } else {
            // Utilisateur inexistant → incrémenter les tentatives
            // （ユーザーが存在しない → 試行回数を増やす）
            $_SESSION['login_attempts']++;
            $_SESSION['last_attempt_time'] = time();
            header("Location: login.php?error=Nom d'utilisateur ou mot de passe incorrect");
            exit();
        }
    }
} else {
    header("Location: index.php");
    exit();
}