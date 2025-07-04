<?php 

if(isset($_POST['title'])){
    require '../db_conn.php';
    
    $title = $_POST['title']; //input name=title
    // echo $title;

    if(empty($title)){
        header("Location: ../index.php?mess=error"); //空白入力したらURIがこうなる
    }else {
        $stmt = $conn->prepare("INSERT INTO todos(title) VALUE(?)");
        $res = $stmt->execute([$title]);

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