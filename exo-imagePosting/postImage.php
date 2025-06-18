<?php
// $_FILESのように$_大文字 の場合、スーパーグローバル関数といってどこの関数からでも呼び出せる変数
include('./dbConfig.php');

//この↓3行の処理で「images/画像データ」というパスができる。これでアプリで登録した画像データが imagesフォルダに保存される
$targetDirectory = 'images/'; //このフォルダに保存
$fileName = basename($_FILES["file"]["name"]); //画像名を取りに行ってる
$targetFilePath = $targetDirectory . $fileName;
//拡張子を取得　pathinfo画像情報を取ってきてPATHINFO_EXTENSIONで拡張子を取るように指定してる
$fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

//このPOSTはpostImageForm.phpのformのmethod=postだから画像投稿フォームから送られてきたかを見ていて、さらにフォームが空でないかを見てる
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($fileName)) {
    $arrImageTypes = array('jpg', 'png', 'jpeg', 'gif', 'pdf');
    //↓in_arrayで取得した拡張子がこの（$arrImageTypes）配列の中に含まれているかを確認
    if (in_array($fileType, $arrImageTypes)) {
        //↓move_uploaded_fileで imagesフォルダに画像アップ。一次引数のtmp_nameはファイル、一時ファイル名、第二引数は保存先を指定
        $postImageForServer = move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath);

        if ($postImageForServer) {
            // もし画像アップが成功したら imagesテーブルに保存する処理
            // テーブルに登録するにはINSERTを使う　書き方 ↓INSERT INTO テーブル名(カラム名)VALUE(保存する値);
            // クラスの関数を使うときは矢印->を使う
            // imagesテーブルのfile_nameカラムに$fileNameの値を保存、という内容。保存する値が文字列なので " か ' が必要
            $insert = $db->query("INSERT INTO images (file_name) VALUES ('" . $fileName . "')");
        }
    }
}
// headerは指定したページに移動するので画像一覧ページを指定、exit();で処理終了
header('Location: ' . './html/index.php', true, 303);
exit();
