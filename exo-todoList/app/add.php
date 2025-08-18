<?php 
session_start();
//CSRFトークンの検証
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    // トークンが一致しない場合、アクセスを拒否（フランス語のメッセージ）
    header("Location: ../index.php?mess=error_csrf"); // ← 画面側で表示
}
// フォーム以外のアクセス（GETなど）は受け付けない
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: ../index.php");
    exit();
}
// ログイン必須
if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    header("Location: ./app/user/signup.php");
     exit();
}
if(isset($_POST['title'])){
    require '../db_conn.php';
    
    $title = $_POST['title']; //input name=title
    // echo $title;

    if(empty($title)){
        //空の場合、リダイレクトを行い、クエリパラメータ`mess=error`を付与したURLに遷移
        header("Location: ../index.php?mess=error"); //空白入力したらURIがこうなる
    }else {
        //テーブルに新しい行を挿入
        $stmt = $conn->prepare("INSERT INTO todos(title, userId) VALUE(?, ?)");
        $res = $stmt->execute([$title, $_SESSION['id']]);

        if($res){
            header("Location: ../index.php?mess=success");
        }else{
            header("Location: ../index.php");
        }
        $conn = null;
        exit();

    }
}else {
header("Location: ../index.php?mess=error");
}
?>