<!-- this is page is my excercise there is one more login page thats done by other -->
<?php

session_start();
$pdo = new PDO('mysql:host=bddsql;dbname=exo', 'root', 'root');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && $user['password'] === $password) { // In real apps, use password hashing!
        $_SESSION['user'] = $user;
        header("Location: /");
        exit();
    } else {
        echo "Invalid login.";
    }
}
?>

<form method="POST">
    Email: <input name="email" type="email" required><br>
    Password: <input name="password" type="password" required><br>
    <button type="submit">Login</button>
</form>