<?php
// Pas d'espaces avant ce tag. （先頭に空白禁止）
session_start();

/* Déconnexion : vider et détruire la session
   （ログアウト：セッションの内容をクリアし、破棄） */
session_unset();
session_destroy();

/* Redirection vers la page d’accueil
   （トップページへリダイレクト） */
header("Location: ../../index.php");
exit();