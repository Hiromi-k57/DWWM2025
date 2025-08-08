<?php 
session_start();

//ここでCSRFトークンを生成
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrf_token = $_SESSION['csrf_token'];

//ログイン済みかどうかをチェック
if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {
?>

<!DOCTYPE html>
<html lang="fr">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../../css/signup.css">
	<title>HOME</title>
</head>
<body>
     <h1>Hello, <?php echo $_SESSION['name']; ?></h1><br>
     <a href="../../index.php">Todo List</a>
     <br>
     <a href="logout.php">Logout</a>
     
</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>
