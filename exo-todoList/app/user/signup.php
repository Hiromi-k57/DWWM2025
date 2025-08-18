<!DOCTYPE html>
<html lang="fr">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="../../css/signup.css">
     <title>Inscription</title>
</head>
<body>
     <form action="signup-check.php" method="post">
          <h2>Inscription</h2>

          <?php 
          // Afficher un message d'erreur s'il est présent dans l'URL
          // （URLに error があれば表示）
          if (isset($_GET['error'])): ?>
               <p class="error"><?= htmlspecialchars($_GET['error']) ?></p>
          <?php endif; ?>

          <?php 
          // Afficher un message de succès s'il est présent dans l'URL
          // （URLに success があれば表示）
          if (isset($_GET['success'])): ?>
               <p class="success"><?= htmlspecialchars($_GET['success']) ?></p>
          <?php endif; ?>

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

          <label>Mot de passe</label>
          <input type="password" name="password" placeholder="Mot de passe"><br>

          <label>Confirmez le mot de passe</label>
          <input type="password" name="re_password" placeholder="Confirmez le mot de passe"><br>

          <label>Captcha</label><br>
          <!-- Image générée par PHP pour vérifier que l’utilisateur n’est pas un robot
               （PHPで生成した画像。ボット対策） -->
          <img src="../services/_captcha_jp.php" alt="captcha"><br>
          <input type="text" name="captcha" placeholder="Entrez le texte de l’image" required><br>

          <button type="submit">S’inscrire</button>
          <a href="login.php" class="ca">Vous avez déjà un compte ?</a>
     </form>
</body>
</html>