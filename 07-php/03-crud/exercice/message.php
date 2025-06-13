<?php
$title = " 03-CRUD - excercice ";
require("../../ressources/template/_header.php");
?>

<h1>Envoi de nouveau message</h1>
<form action="./login.php" method="post">
    <fieldset>
        <!-- Username -->
        <label for="username">Username</label><br>
        <input type="text" name="username" id="username" placeholder="Enter your username">
        <br>
        
        <!-- Message -->
        <label for="text">Message</label><br>
        <textarea id="message" name="message" rows="5" cols="33">Lorem ipsum dolor sit amet...
        </textarea>

        <!-- Error -->
        <?php if(!empty($errors)): ?>
            <ul>
                <?php if (!empty($errors["username"])): ?>
                    <li><?= $errors["username"] ?></li>
                <?php endif; ?>
               
                <?php if (!empty($errors["message"])): ?>
                    <li><?= $errors["message"] ?></li>
                <?php endif; ?>
            </ul>
        <?php endif; ?>
        <br>
        <!-- Submit -->
        <input type="submit" value="Envoyer" name="envoyer">
    </fieldset>
</form>

<?php 
require("../../ressources/template/_footer.php");
?>