<?php 
session_start();

if (!isset($_SESSION['id']) || !isset($_SESSION['user_name'])) {
    echo "error";
    exit();
}

if(isset($_POST['id'])){
    require '../db_conn.php';
    
    $id = $_POST['id']; 

    if(empty($id)){
        echo 'error';
    }else {
        $todos = $conn->prepare("SELECT id, checked FROM todos WHERE id=? and userId=?");
        $todos->execute([$id, $_SESSION['id']]);

        $todo = $todos->fetch();
        $uId = $todo['id'];
        $checked = $todo['checked'];

        $uChecked =$checked ? 0 : 1;

        $res = $conn->query("UPDATE todos SET checked=$uChecked WHERE id=$uId");

        if($res){
            echo $checked;
        } else{
            echo "error";
        }
        
        $conn = null;
        exit();

    }
}else {
header("Location: ../index.php?mess=error");
}
?>