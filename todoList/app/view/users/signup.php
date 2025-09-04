<!DOCTYPE html>
<html lang="fr">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="/assets/css/signup.css">
     <title>Inscription</title>
</head>
<body>
     <form action="/signup" method="post">
          <h2>Inscription</h2>

          <?php displayFlashMessage(); ?>

          <label>Nom complet</label>
          <?php if (isset($_GET['name'])): ?>
               <input type="text" name="name" placeholder="Votre nom complet"
                      value="<?= htmlspecialchars($_GET['name']) ?>"><br>
          <?php else: ?>
               <input type="text" name="name" placeholder="Votre nom complet"><br>
          <?php endif; ?>

          <label>Nom d’utilisateur</label>
          <?php if (isset($_GET['uname'])): ?>
               <input type="text" name="uname" placeholder="Nom d’utilisateur"
                      value="<?= htmlspecialchars($_GET['uname']) ?>"><br>
          <?php else: ?>
               <input type="text" name="uname" placeholder="Nom d’utilisateur"><br>
          <?php endif; ?>

          <label>Mot de passe</label><br>
          <small class="form_small">(Min. 6 caractères, a-z, A-Z, 0-9, spécial)</small>
          <input type="password" id="password" name="password" placeholder="Mot de passe" minlength="6" autocomplete="new-password"><br>
          
     
          <label>Confirmez le mot de passe</label>
          <input type="password" name="re_password" placeholder="Confirmez le mot de passe"><br>

          <label>Captcha</label><br>
          <!-- Image générée par PHP pour vérifier que l’utilisateur n’est pas un robot
               （PHPで生成した画像。ボット対策） -->
          <img src="/captcha" alt="captcha" class="img_captcha"><br>
          <input type="text" name="captcha" placeholder="Entrez le texte de l’image" required><br>

          <button type="submit">S’inscrire</button>
          <a href="/login" class="ca">Vous avez déjà un compte ?</a>
     </form>
</body>
</html>