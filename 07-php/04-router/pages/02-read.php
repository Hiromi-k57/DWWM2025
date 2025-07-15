<?php
session_start();
require("../ressources/service/_pdo.php");
$pdo = connexionPDO();
/* 
    Aucune donnée n'est entré par l'utilisateur, donc je n'ai
    donc aucun risque, je peux lancer ma requête 
    sans aucune préparation avec "query"

    ユーザーがデータを入力する必要がないので、リスクはありません。「query」を使えば、準備なしでクエリを実行できます。
*/
$sql = $pdo->query("SELECT idUser, username FROM users");
    /* 
        Quand on souhaite récupérer plusieurs résultats et non un seul
        on utilisera "fetchAll" au lieu de "fetch"

        1 つの結果ではなく複数の結果を取得する場合は、「fetch」ではなく「fetchAll」を使用します。
    */
$users = $sql->fetchAll();
// ajouter après update. // 更新後に追加します。
if(isset($_SESSION["flash"])){
    $flash = $_SESSION["flash"];
    unset($_SESSION["flash"]);
}
$title = " CRUD - Read ";
require("../ressources/template/_header.php");
// Si on a trouvé des utilisateurs on affiche un tableau
// ユーザーが見つかった場合はテーブルを表示します
if(isset($flash)):
    ?>
    <div class="flash">
        <?php echo $flash ?>
    </div>
<?php endif; ?>

<h3>Liste des utilisateurs</h3>

<?php if($users): ?>
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>action</th>
        </tr>
    </thead>
    <!-- Pour chacun des utilisateurs trouvé, on ajoute une ligne -->
     <!-- 見つかったユーザーごとに行を追加します -->
    <?php foreach($users as $row):?>
    <tr>
        <td><?php echo $row["idUser"] ?></td>
        <td><?php echo $row["username"] ?></td>
        <td>
            <a href="/04-router/blog?id=<?php echo $row["idUser"] ?>">
                Voir
            </a>
            <!-- On affiche le bouton éditer que si l'utilisateur est connecté -->
            <!-- 編集ボタンはユーザーがログインしている場合にのみ表示されます -->
            <?php if(isset($_SESSION["idUser"]) && ($_SESSION["idUser"]) == $row["idUser"]): ?>
            &nbsp;|&nbsp;
            <a href="/04-router/profil?id=<?php echo $row["idUser"] ?>">
                Éditer.
            </a>
            &nbsp;|&nbsp;
            
            <a href="/04-router/profil/supprimer?id=<?php echo $row["idUser"] ?>">
                Supprimer.
            </a>
            <?php endif; ?>
        </td>
    </tr>
    <?php endforeach; ?>
</table>
<!-- Sinon on affiche un message --> <!-- それ以外の場合はメッセージが表示されます -->
<?php else: ?>
    <p>Aucun utilisateur trouvé</p>
<?php 
endif;
require("../ressources/template/_footer.php");
?>