<!-- まずsession_start()でセッションを開始し、その後session_unset()とsession_destroy()でセッションの内容をクリアし、破棄。最後にheader()関数を使って、ユーザーをトップページに移動 -->
<?php 
session_start();

session_unset();
session_destroy();

header("Location: index.php");