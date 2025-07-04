<?php
session_start();

// すでにログインしていれば profil.php にリダイレクト
if (isset($_SESSION['username'])) {
    header('Location: profil.php');
    exit;
}

// フォームが送信された場合
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);

    // ユーザー名がアルファベットと数字のみかをチェック
    if (preg_match('/^[a-zA-Z0-9]+$/', $username)) {
        $_SESSION['username'] = $username;
        header('Location: profil.php');
        exit;
    } else {
        $error = "L'identifiant doit être alphanumérique.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1>Page de connexion</h1>

    <?php if (isset($error)): ?>
        <p style="color:red"><?= htmlspecialchars($error) ?></p>
    <?php endif; ?>

    <div class="form_body">
        <form method="POST" action="">
            <label for="username">Nom d'utilisateur :</label><br>
            <input type="text" id="username" name="username" required placeholder="ex : jdupont" class="form-control">
            <br><br>
            <button type="submit">Connexion</button>
        </form>
    </div>
</body>
</html>
