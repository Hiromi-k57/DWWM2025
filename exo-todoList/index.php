<?php
session_start();

/* Génération du jeton CSRF (sécurité contre CSRF)
   （CSRF対策：トークン生成） */
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrf_token = $_SESSION['csrf_token'];

/* Vérification d’authentification : accès réservé aux utilisateurs connectés
   （認証チェック：未ログインならサインアップへ） */
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
    <title>Liste de tâches</title>
    <script src="./js/script.js" defer></script>
    <!-- Expose le jeton CSRF pour les requêtes AJAX
         （AJAX用にCSRFトークンを埋め込み） -->
    <meta name="csrf_token" content="<?= htmlspecialchars($csrf_token, ENT_QUOTES, 'UTF-8') ?>">
</head>
<body>
    <div class="main-section">
        <h1>Liste de tâches — <?= htmlspecialchars($_SESSION['user_name'], ENT_QUOTES, 'UTF-8') ?></h1><br>

        <div class="add-section">
            <!-- Formulaire d’ajout de tâche（タスク追加フォーム） -->
            <form action="./app/add.php" method="POST" autocomplete="off">
                <input type="hidden" name="csrf_token"
                       value="<?= htmlspecialchars($csrf_token, ENT_QUOTES, 'UTF-8') ?>">

                <?php if (isset($_GET['mess']) && $_GET['mess'] == 'error') { ?>
                    <input type="text" name="title" style="border-color: red;"
                           placeholder="Ce champ est obligatoire"/>
                <?php } else { ?>
                    <input type="text" name="title" placeholder="Que dois-tu faire ?">
                <?php } ?>

                <button type="submit">Ajouter</button>
            </form>
        </div>

        <?php
            /* Récupération des tâches de l’utilisateur connecté（ログインユーザーのタスク取得） */
            $todos = $conn->prepare("SELECT * FROM todos WHERE userId = :id ORDER BY id DESC");
            $todos->execute(["id" => $_SESSION['id']]);
        ?>

        <div class="show-todo-section">
            <?php if ($todos->rowCount() <= 0) { ?>
                <div class="todo-item">
                    <div class="empty">
                        <img src="./img/check.jpg" alt="Aucune tâche">
                        <img src="./img/time.gif" alt="En attente" class="imgTime">
                    </div>
                </div>
            <?php } ?>

            <?php while ($todo = $todos->fetch(PDO::FETCH_ASSOC)) { ?>
                <div class="todo-item">
                    <!-- Bouton de suppression（削除ボタン） -->
                    <span class="remove-to-do" data-todo-id="<?= (int)$todo['id'] ?>">x</span>

                    <?php if ($todo['checked']) { ?>
                        <input type="checkbox" class="check-box"
                               data-todo-id ="<?= (int)$todo['id'] ?>" checked />
                        <h2 class="checked"><?= htmlspecialchars($todo['title'], ENT_QUOTES, 'UTF-8') ?></h2>
                    <?php } else { ?>
                        <input type="checkbox" class="check-box"
                               data-todo-id ="<?= (int)$todo['id'] ?>" />
                        <h2><?= htmlspecialchars($todo['title'], ENT_QUOTES, 'UTF-8') ?></h2>
                    <?php } ?>

                    <br>
                    <small>Créé : <?= htmlspecialchars($todo['date_time'], ENT_QUOTES, 'UTF-8') ?></small>
                </div>
            <?php } ?>
        </div>

        <a href="./app/user/logout.php">Déconnexion</a>
    </div>
</body>
</html>
