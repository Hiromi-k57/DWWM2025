<?php 

//どこに接続？
$dbName = 'mysql:host=localhost;dbname=imagePosting;charset=utf8';
//誰が接続？
$userName = 'root';

//tryしてエラー有りならcatch処理、エラー無しならexitでエンド処理
try{
    //PDOはデータベース接続するためのクラス
    $db = new PDO($dbName, $userName);
    // var_dump('success'); //exitうまくいったか画面確認
} catch(\Throwable $th){
    exit();
}

?>