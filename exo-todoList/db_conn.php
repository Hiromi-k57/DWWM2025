<?php
$sname = "mysql";
$uname = "root";
$pass = "root";
$db_name = "to_do_list";

//try { ... } catch { ... } : permet de gérer les erreurs. （エラー処理用）
try {
    //new PDO(...) : crée une connexion à la base de données avec PDO. （PDOを使ってDB接続を作成）
    $conn = new PDO("mysql:host=$sname;dbname=$db_name;charset=utf8", $uname, $pass);
    //configure PDO pour lancer une exception en cas d’erreur SQL. （PDOを例外モードに設定 → SQLエラー時に例外を投げる）
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    //si une erreur survient, on interrompt l’exécution pour ne pas exposer de détails sensibles. （エラーが出たら処理を終了、詳細は外部に出さない）
    die();
}
