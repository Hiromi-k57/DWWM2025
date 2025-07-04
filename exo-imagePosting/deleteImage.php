<?php 

include('./dbConfig.php');

$targetDirectory = 'images/';
$imageId = $_GET['id'];

if(!empty($imageId)){
  $sql = "SELECT file_name FROM images WHERE id = " . $imageId;

 // Prepare = 準備
 // execute = 実行
 // fetchAll = 全部取り出す
    $sth = $db->prepare($sql);
    $sth ->execute();
    $getImageName = $sth->fetch();
 //unlinkは()にファイルパスを記載すると対象のファイルを削除する
    $deleteImage = unlink($targetDirectory . $getImageName['file_name']);

    //unlinkが成功すると$deleteImageがTrueだから中の処理を実行
    if($deleteImage){
        //DELETE FROM テーブル名[WHERE条件];
        $deleteRecord = $db->query("DELETE FROM images WHERE id = " .$imageId);

        if($deleteRecord){
            // 成功したら画像一覧画面に戻る
            header('Location:' . './html/index.php',true, 303);
            exit();
        }
    }

}

?>