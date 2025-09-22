<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/assets/css/signup.css">
    <title>Connexion</title>
</head>
<body>
    <form action="/login" method="post">
        <h2>Connexion</h2>

        <!-- Afficher les messages d'erreur ou de succès si présents dans l’URL -->
        <!-- （エラーメッセージや成功メッセージがURLにあれば表示） -->
        <?php if (isset($_GET['error'])) { ?>
            <p class="error"><?= htmlspecialchars($_GET['error'], ENT_QUOTES, 'UTF-8') ?></p>
        <?php } ?>

        <?php if (isset($_GET['success'])) { ?>
            <p class="success"><?= htmlspecialchars($_GET['success'], ENT_QUOTES, 'UTF-8') ?></p>
        <?php } ?>

        <label for="uname">Nom d'utilisateur</label>
        <input id="uname" 
               type="text" 
               name="uname" 
               placeholder="Nom d’utilisateur"><br>

        <label for="password">Mot de passe</label>
        <input id="password"
               type="password" 
               name="password" 
               placeholder="Votre mot de passe"><br>

        <button type="submit">Se connecter</button>
        <a href="/signup" class="ca">Créer un compte</a>
    </form>
</body>
</html>