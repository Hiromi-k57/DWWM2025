<?php 
session_start();

if(isset($_SESSION['username'])){
    header('Location: profil.php');
    exit;
}

if($_SERVER['REQUEST_METHOD']=== 'POST'){
    $username =trim($_POST['username']);

    if(preg_match('/^[a-zA-Z0-9]+$/',$username)){
        $_SESSION['username'] = $username;
        header('Location:profil.php');
        exsit;
    } else{
        $error = "L'identifiant doit être alphanumérique.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <h1>Page de connexion</h1>
    <div class="form_body">
        <form action="./profil.php" method="POST">
            Nom d'utilisateur
            <input type="text" id="username" name="username" placeholder="Nom d'utilisateur" class="form-control">
            <br>
            Bio
            <input type="text" id="bio" name="bio" class="form-control" placeholder="Développeur web junior">
            <br>
            Votre Icon (*Veuillez choisir une image de moins de 2 Mo)
            <input type="file" id="image" name="image" accept="image/png, image/jpeg" class="form-control" >
            <br>
            <!-- Mot de passe 
            <input type="password" name="password" id="password" pattern="[A-Z0-9]{6}">
            <br> -->
            Login
            <div style="text-align: right; padding: 5px;">
                <button type="submit" value="Envoyer" name="btn" >
            </div>
        </form>
    </div>
    
</body>
</html>