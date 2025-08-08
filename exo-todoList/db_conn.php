<?php

$sname = "mysql";
$unmae = "root";
$pass = "root";
$db_name = "to_do_list";

try {
    $conn = new PDO("mysql:host=$sname;dbname=$db_name;charset=utf8", $unmae, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // デバッグ時以外はエラー表示を抑えるべき（試験時はログだけでOK）
    // echo "Connection failed! : " . $e->getMessage();
    die(); // 本番ではメッセージ出力せず終了（セキュリティのため）
}
