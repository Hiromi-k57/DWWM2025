<?php 
session_start();
//ここでCSRFトークンを生成
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrf_token = $_SESSION['csrf_token'];

if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: ./app/user/signup.php");
     exit();
}

require 'db_conn.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Todo List</title>
    <script src="./js/script.js" defer></script>
    <meta name="csrf_token" content="<?= htmlspecialchars($csrf_token) ?>">
</head>
<body>
    <div class="main-section">
        <h1>Todo Liste <?= $_SESSION['user_name'] ?></h1><br>
        <div class="add-section">
            <form action="./app/add.php" method="POST" autocomplete="off"> 
                <input type="hidden" 
                    name="csrf_token" 
                    value="<?= htmlspecialchars($csrf_token) ?>">  

                <?php if(isset($_GET['mess']) && $_GET['mess'] == 'error') { ?>
                    <input type="text" 
                        name="title"
                        style="border-color: red;"
                        placeholder="Ce champ est obligatoire"/>
                <?php } else { ?>
                    <input type="text" 
                        name="title" 
                        placeholder="Que dois-tu faire ?">
                <?php } ?>

                <button type="submit">Ajouter</button>
            </form>

        </div>

        <?php 
            $todos = $conn->prepare("SELECT * FROM todos WHERE userId = :id ORDER BY id DESC");
            $todos->execute(["id"=>$_SESSION['id']]);
        ?>
        <div class="show-todo-section">
            <?php if($todos->rowCount() <= 0){ ?>
                <div class="todo-item">
                    <div class="empty">
                        <img src="./img/check.jpg" alt="img">
                        <img src="./img/time.gif" alt="img" class="imgTime">
                    </div>
                </div>
            <?php }?>
            
            <?php while($todo = $todos->fetch(PDO::FETCH_ASSOC)) {?>
                <div class="todo-item">
                    <span class="remove-to-do" data-todo-id="<?php echo $todo['id']; ?>">x</span>
                    <?php if($todo['checked']){?>
                        <input type="checkbox"
                               class="check-box"
                               data-todo-id ="<?php echo $todo['id']; ?>"
                               checked />
                        <h2 class="checked"><?php echo htmlspecialchars($todo['title']) ?></h2>
                    <?php }else {?>
                        <input type="checkbox"
                            data-todo-id ="<?php echo $todo['id']; ?>"
                            class="check-box"/>
                        <h2><?php echo htmlspecialchars($todo['title']) ?></h2>
                    <?php } ?>

                    <br>
                    <small>Créé: <?php echo htmlspecialchars($todo['date_time']) ?></small>                    
            </div>
            <?php }?>
        </div>
        <a href="./app/user/logout.php">Logout</a>
    </div>
     

   
</body>
</html>