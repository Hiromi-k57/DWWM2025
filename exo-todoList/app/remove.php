<?php 
session_start();

if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error";
    exit();
}
if(isset($_POST['id'])){
    require '../db_conn.php';
    
    $id = $_POST['id']; //input name=title
    // echo $title;

    if(empty($id)){
        echo 0;
    }else {
        $stmt = $conn->prepare("DELETE FROM todos WHERE id=?  and userId=?");
        $res = $stmt->execute([$id, $_SESSION['id']]);

        if($res){
            echo 1;
        }else{
            echo 0;
        }
        $conn = null;
        exit();

    }
}else {
header("Location: ../index.php?mess=error");
}
?>