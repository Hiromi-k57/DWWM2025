<?php
// コメント登録処理
include('./dbConfig.php');
$imageId = $_GET['image_id']; // image_idは、ImageDetail.phpのform actionに書いた属性と同じ
$comment = $_POST['comment']; // formで method=postにしてるから値であるコメントが取れる

// method属性がPOSTかつ空でないかを確認
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($comment)) {
    // テーブルに登録するにはINSERT、複数ある場合はVALUESでつなぐ　
    // INSERT INTO テーブル名(列名1,列名2)VALUES(値1,値2);
    $insert = $db->query("INSERT INTO comments (image_id, comment) VALUES (" . $imageId . ",'" . $comment . "')");

    if($insert) {
        // $_SERVER['HTTP_REFERER'];は、どのページから現在に来たか分かる
        $uri = $_SERVER['HTTP_REFERER'];
        // 詳細画面に戻る
        header('Location: ' . $uri, true, 303);
        exit();
    }
} else {
    $uri = $_SERVER['HTTP_REFERER'];
    header('Location: ' . $uri, true, 303);
    exit(); 
}