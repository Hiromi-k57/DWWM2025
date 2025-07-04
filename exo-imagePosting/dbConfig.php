<?php 

//どこに接続？
// $dbName = 'mysql:host=localhost;dbname=imagePosting;charset=utf8';
$dbName = 'mysql:host=mysql;dbname=imageposting;charset=utf8';
//誰が接続？
$userName = 'root';
$password = 'root';

//tryしてエラー有りならcatch処理、エラー無しならexitでエンド処理
try{
    //PDOはデータベース接続するためのクラス
    $db = new PDO($dbName, $userName, $password);
    // var_dump('success'); //exitうまくいったか画面確認
} catch(\Throwable $th){
    // var_dump($th);
    exit();
}

?>