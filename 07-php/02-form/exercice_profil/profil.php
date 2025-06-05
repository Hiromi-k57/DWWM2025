<?php 

//バリデーションチェック
$error = array();
$file_type = array(
  'image/jpeg',
  'image/png',
);


if($_SERVER[REQUEST_METHOD]=== "POST" && isset($_POST["userForm"]))
{
    $error["username"] = "Veuillez entrer un nom d'utilisateur";
}
else{
    // 文字列の先頭と末尾の空白を削除する
        $username = trim($_POST["username"]);
        // バックスラッシュを削除する
        $username = stripslashes($username);
        // 表示するすべてのデータに対して必ず行う必要がある
        // データベースに保存する前、または表示の直前に実行可能
        $username = htmlspecialchars($username);
        // HTMLの特殊文字（<、>など）をそのコード（&gt;など）に置き換えてコードインジェクションを防止する。
        if(strlen($username) < 3 || strlen($username)>25)
        {
            $error["username"] = "Votre nom d'utilisateur n'a pas une taille adaptée";
        }
 } // ユーザー名の確認終了
 if(empty($_POST["bio"]))
 {
    $error["bio"] = "écrivez quelque chose";
 }// bio fin
 if (!in_array($_FILES['image']['type'], $file_type)) 
{
    $error['image'] = "Veuillez télécharger une image au format jpg ou png.";
} 
elseif ((int)$_FILES['image']['size'] > 2097152) 
{
      $error['image'] =  "Veuillez choisir une image de moins de 2 Mo";
}// image fin



 





$name = $_POST['username'];
$bio = $_POST['bio'];
$image = $_FILES['image'];




require "../exercice8profil/login.php";
if(session_status() !== PHP_SESSION_ACTIVE)
{
    session_start();
    // セッションの有効期限を指定しなければ、ブラウザを閉じた時点でログアウトします。
}

// もしユーザーが既にログインしている場合
if(isset($_SESSION["logged"]) && $_SESSION["logged"] === true)
{
    // 別のページにリダイレクトします
    header("Location: /");
    exit;
}





?>