<?php
session_start();

/* Vérification d’authentification（認証チェック） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: signup.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="../../css/signup.css">
     <title>Accueil</title>
</head>
<body>
     <!-- Le nom affiché provient de l’utilisateur, donc échapper systématiquement
      （表示名はユーザー入力なので必ずエスケープ） -->
     <h1>Bonjour, <?= htmlspecialchars($_SESSION['name'], ENT_QUOTES, 'UTF-8') ?></h1><br>

     <a href="../../index.php">Aller à la liste de tâches</a>
     <br>
     <a href="logout.php">Déconnexion</a>
</body>
</html>
