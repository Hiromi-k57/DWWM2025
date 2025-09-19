<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.css">
    <title>Liste de tâches</title>
    <script src="/assets/js/script.js" defer></script>
    <!-- Expose le jeton CSRF pour les requêtes AJAX
         （fetch()でページをリロードせずにサーバーと通信するため、そのリクエストにCSRFトークンを手動で追加する必要がある。そのために <meta> に埋め込んでいる） -->
    <meta name="csrf_token" content="<?= get_csrf(); ?>">
</head>
<body>
    <div class="main-section">
        <h1>Liste de tâches — <?= htmlspecialchars($_SESSION['user_name'], ENT_QUOTES, 'UTF-8') ?></h1><br>

        <div class="add-section">
            <!-- Formulaire d’ajout de tâche（タスク追加フォーム） -->
            <form action="/add" method="POST" autocomplete="off">
                <?php set_csrf() ?>

                <!-- Si l’URL contient ?mess=error, afficher un champ de saisie spécial pour l’erreur -->
                <!-- URLに ?mess=error がついていたら、エラー表示用の入力欄を出す -->
                <?php if (isset($_GET['mess']) && $_GET['mess'] == 'error') { ?>
                    <input type="text" name="title" style="border-color: red;"
                           placeholder="Ce champ est obligatoire"/>
                <?php } else { ?>
                    <input type="text" name="title" placeholder="Que dois-tu faire ?" required>

                <?php } ?>

                <button type="submit">Ajouter</button>
            </form>
        </div>

        <?php
            
        ?>

        <div class="show-todo-section">
            <?php if ($todos->rowCount() <= 0) { ?>
                <div class="todo-item">
                    <div class="empty">
                        <img src="/assets/img/check.jpg" alt="Aucune tâche">
                        <img src="/assets/img/time.gif" alt="En attente" class="imgTime">
                    </div>
                </div>
            <?php } ?>

            <!-- Récupère chaque ligne de la table todos comme un tableau associatif -->
            <!-- DB todosから1行ずつタスクをASSOC連想配列として取得 -->
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
                        <!-- htmlspecialcharsでXSS攻撃（<script>...）が文字列のまま表示 -->
                    <?php } ?>

                    <br>
                    <small>Créé : <?= htmlspecialchars($todo['date_time'], ENT_QUOTES, 'UTF-8') ?></small>
                </div>
            <?php } ?>
        </div>

        <a href="/home" >Accueil</a>
    </div>
</body>
</html>
