<?php
$name = $bio = $image = $password ="";
$error = [];


?>

<hr>
<h1>Page de connexion</h1>
  
        <form action="profil.php" method="POST">
            <div>
                <label for="username">Nom d'utilisateur</label>
                <input type="text" id="username" name="username" placeholder="Nom d'utilisateur">
            </div><br>

            <div>
                <label for="bio">Bio</label>
                <input type="text" id="bio" name="bio">
            </div><br>
            
            <div>
                <label for="icon">Votre Icon</label>
                <input type="file" id="image" name="image" accept="image/png, image/jpeg">
                *Veuillez choisir une image de moins de 2 Mo
            </div><br>
            
            <!-- <div>
                <label for="password">Mot de passe :</label>
                <input type="password" name="password" id="password" pattern="[A-Z0-9]{6}">
            </div><br> -->

            <input type="submit" value="Envoyer" name="userForm">
        
        </form>