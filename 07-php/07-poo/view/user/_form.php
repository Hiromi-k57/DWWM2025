<form action="" method="post">
    <!-- username -->
    <label for="username">Nom d'Utilisateur :</label>
    <!-- 
        J'ajoute la possibilité de mettre les inputs en require 
        Ainsi que la possibilité de préremplir les inputs
        --
        入力を必須にする機能と、入力内容を事前に入力する機能を追加します
        
    -->
    <input 
        type="text" 
        name="username" 
        id="username" 
        <?php echo $required??""?>
        value="<?php echo $user->getUsername()??""?>"
    >
    <span class="error"><?php echo $error["username"]??"" ?></span>
    <br>
    <!-- Email -->
    <label for="email">Adresse Email :</label>
    <input 
        type="email" 
        name="email" 
        id="email" 
        <?php echo $required??""?>
        value="<?php echo $user->getEmail()??""?>"
    >
    <span class="error"><?php echo $error["email"]??"" ?></span>
    <br>
    <!-- Password -->
    <label for="password">Mot de Passe :</label>
    <input type="password" name="password" id="password" <?php echo $required??""?>>
    <span class="error"><?php echo $error["password"]??"" ?></span>
    <br>
    <!-- password verify -->
    <label for="passwordConfirm">Confirmation du mot de passe :</label>
    <input type="password" name="passwordConfirm" id="passwordConfirm" <?php echo $required??""?>>
    <span class="error"><?php echo $error["passwordConfirm"]??"" ?></span>
    <br>
    <!-- Je change le nom et la value de l'input 入力の名前と値を変更する-->
    <input type="submit" value="Enregistrer" name="userForm">
</form>