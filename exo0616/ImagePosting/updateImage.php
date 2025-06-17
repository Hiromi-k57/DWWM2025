<?php

include('./dbConfig.php');
// ↓保存用パス
$targetDirectory = 'images/';
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDirectory . $fileName;
$fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
$imageId = $_GET['id'];
// 画像がフォームから送られてきたか、空じゃないか、拡張子は指定のものか確認
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($fileName)) {
    $arrImageTypes = array('jpg', 'png', 'jpeg', 'gif', 'pdf');
    if (in_array($fileType, $arrImageTypes)) {
        // クエリパラメータの画像IDを使って削除する画像名を取ってきている
        $sql = "SELECT file_name FROM images WHERE id = " . $imageId;

        $sth = $db->prepare($sql);
        $sth->execute();
        $getImageName = $sth->fetch();
        // images/フォルダの画像の削除
        $deleteImage = unlink($targetDirectory . $getImageName['file_name']);

        // 削除が完了したら新しく投稿画面で選んだ画像をimages/に保存
        if ($deleteImage) {
            $uploadImageForServer = move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath);

            if($uploadImageForServer) {
                // テーブルを更新するsql UPDATE images SET file_name = 画像名　WHERE id =画像ID;
                $update = $db->query("UPDATE images SET file_name = '" . $fileName . "' WHERE id = " . $imageId);

                header('Location: ' . './html/index.php', true, 303);
                exit();
            }
        }
    }
}