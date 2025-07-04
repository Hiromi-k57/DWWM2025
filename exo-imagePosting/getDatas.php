<?php
$uri = $_SERVER['REQUEST_URI'];
// ORDER BY [並び変えするカラム名][DESC降順/ASC昇順]";今回は最新投稿を最初に見せたい(つまりid番号が大きいほうが新しい)のでDESCを使う
// strposは$uriの中に「imageDetail.php」が含まれているかどうか確認してる
if(strpos($uri, 'imageDetail.php') !== false){
    $imageId = $_GET['id'];
    $sql = "SELECT * FROM images WHERE id = ". $imageId;

    $sth = $db->prepare($sql);
    $sth ->execute();
    $data['image'] = $sth->fetch();
    // 画像ごとにコメントを取得、最新コメントを上にしたいからDESC
    $sql2 = "SELECT * FROM comments WHERE image_id = ". $imageId . " ORDER BY create_date DESC";

    $sth = $db->prepare($sql2);
    $sth->execute();
    $data['comments'] = $sth->fetchAll();
    $countComment = count($data['comments']);

} else{
    $sql = "SELECT * FROM images ORDER BY create_date DESC";
    // Prepare = 準備
    // execute = 実行
    // fetchAll = 全部取り出す
    $sth = $db->prepare($sql);
    $sth ->execute();
    $data = $sth->fetchAll();
}

// ↓戻り値の設定、処理を終了させて呼出しもとに値を返す
return $data;

?>