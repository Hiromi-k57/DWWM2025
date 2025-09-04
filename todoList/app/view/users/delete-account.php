<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Supprimer mon compte</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/signup.css">
</head>
<body>
    <form method="post" >
        <h2>Supprimer mon compte</h2>
        <p class="notice">Cette action est <strong>irréversible</strong>. 
        <br>Tous vos éléments associés seront supprimés.
        </p>
        
        <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($token, ENT_QUOTES, 'UTF-8') ?>">

        <button type="submit" id="spBtn">Supprimer définitivement</button><br>
        
    </form>
      <a class="annulerBtn" href="/home">Annuler</a>
  
</body>
</html>
