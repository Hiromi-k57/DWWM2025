<?php
/* Vérification d’authentification（認証チェック） */
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: /signup");
    exit();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="/assets/css/signup.css">
     <title>Accueil</title>
</head>
<body>
     <div class="imgDiv">
          <img src="/assets/img/userF.jpg" alt="userImg" class="userImg">
     
     <!-- Le nom affiché provient de l’utilisateur, donc échapper systématiquement
           （表示名はユーザー入力なので必ずエスケープ） -->
     <h1>Bonjour, <?= htmlspecialchars($_SESSION['name'], ENT_QUOTES, 'UTF-8') ?></h1>

     <div class="home_linkDiv">
          <a href="/">Aller à la liste de tâches</a>
               <br>
          <a href="/logout">Déconnexion</a>
               <br>
          <a href="/delete-account" style="color:red;">Supprimer mon compte</a>
     </div>
     </div>
</body>
</html>
