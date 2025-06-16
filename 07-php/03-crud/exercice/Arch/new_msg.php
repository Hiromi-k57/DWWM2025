<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$pdo = new PDO('mysql:host=bddsql;dbname=exo', 'root', 'root');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];
    $userId = $_SESSION['user_id'];
    $stmt = $pdo->prepare("INSERT INTO messages (message, idUser) VALUES (?, ?)");
    $stmt->execute([$message, $userId]);

    echo "Message sent!";
    echo "<br><a href='/index.php'>Go back</a>";
}
?> 

<form method="POST">
    <textarea name="message" rows="5" cols="40" placeholder="Write your message..."></textarea><br>
    <button type="submit">Send Message</button>
</form>

<!-- We check if the user is logged in.
On form submission, we insert a message into the database.
createdAt is filled automatically because of the default value in SQL. -->