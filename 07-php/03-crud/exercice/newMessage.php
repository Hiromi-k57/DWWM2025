<?php
$errors = [];
$title = "03-CRUD - exercise";
require("../../ressources/template/_header.php");

session_start();
if(!isset($_SESSION['user_id'])){
    header("Location: login.php");
    exit();
}

$pdo = new PDO('mysql:host=bddsql;dbname=blog','root', 'root');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];
    $userId = $_SESSION['user_id'];
    $stmt = $pdo->prepare("INSERT INTO messages (message, userId) VALUES (?, ?)");
    $stmt->execute([$message, $userId]);

    echo "Message sent!";
    echo "<br><a href='/'>Go back</a>";
}

?>


<h1>Envoyer un nouveau message</h1>
<form action="./newMessage.php" method="post">
    <fieldset>
        <!-- Username -->
        <label for="username">Username</label><br>
        <input type="text" name="username" id="username" placeholder="Entrez votre nom d'utilisateur">
        <br>
        
        <!-- Message -->
        <label for="message">Message</label><br>
        <textarea id="message" name="message" rows="5" cols="33" placeholder="Entrez votre message ici"></textarea>

        <!-- Error -->
        <?php if(isset($errors) && !empty($errors)): ?>
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

<!-- ユーザーがログインしているかどうかを確認します。
フォームを送信すると、データベースにメッセージを挿入します。
createdAt はSQLのデフォルト値により自動的に入力されます。 -->