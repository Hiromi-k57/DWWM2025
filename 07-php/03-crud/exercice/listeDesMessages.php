<?php

//portNo.はcompose.yamlにある
$dsn = "mysql:host=bddsql;port=3306;dbname=blog;charset=utf8mb4";

$pdo = new PDO($dsn, "root", "root", [
    // PDO が表示するエラーの種類:    
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    // データベースから取得したデータをどのように表示するか
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    // PDO に準備されたステートメントをエミュレートしないように指示します (下記参照)
    // PDO::ATTR_EMULATE_PREPARES => false
]);
if(isset($_GET["id"]))
{
    $idUser = $_GET["id"];
    $sqlMessages = $pdo->query("SELECT * FROM messages");
    $messages = $sqlMessages->fetchAll();
    
    $sqlMessageId =$pdo->prepare("SELECT * FROM messages WHERE idUser = ?");
    
    $sqlMessageId->execute([$idUser]);
    $messageFromPrepare = $sqlMessageId->fetchAll();
}
else
{
    $messageFromPrepare = [];
    $idUser = 0;
}

if(session_status() !== PHP_SESSION_ACTIVE)
{
    session_start();
}


 if(isset($_GET["action"]) && $_GET["action"] === "logout")
 {
     if(session_status() !== PHP_SESSION_ACTIVE)
     {
         session_start();
     }
     
     // ユーザーがログインしていない場合
     if(!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] !== true)
     {
         // 別のページにリダイレクトします
         header("Location: /");
         exit;
     }
     
     /* 
         ユーザーをログアウトさせるには、
         セッションからログイン関連の情報を削除します。
             unset($_SESSION["logged"]);
             unset($_SESSION["username"]);
             unset($_SESSION["expire"]);
         または、セッションに他の情報がない場合は
         セッション全体を破棄しても良いです。
     */
     unset($_SESSION);
     session_destroy();
     setcookie("PHPSESSID", "", time()-3600);
     
     // ログアウト後は別のページにリダイレクトします
      header("Location: ./login.php");
         exit;

 }
$title = " 03-CRUD - excercice ";
require("../../ressources/template/_header.php");
?>


<h2>
    Message de l'utilisateur # <?=htmlspecialchars($idUser) ?>
</h2>
<ul>
    <?php foreach($messageFromPrepare as $messages): ?>
        <li><?= htmlspecialchars($messages['message'])?>(<?= $messages['createdAt'] ?>)</li>
        <?php endforeach;?>
</ul>






<?php 
require("../../ressources/template/_footer.php");
?>