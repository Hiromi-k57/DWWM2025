<?php
//まずsession_start()でセッションを開始し、その後session_unset()とsession_destroy()でセッションの内容をクリアし、破棄。最後にheader()関数を使って、ユーザーをトップページに移動 
// セッションを開始（出力よりも前に）
session_start();

// セッションをすべて削除してログアウト
session_unset();
session_destroy();

// ホーム画面にリダイレクト
header("Location: ../../index.php");
exit();
