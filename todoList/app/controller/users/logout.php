<?php

/* Déconnexion : vider et détruire la session
   （ログアウト：セッションの内容をクリアし、破棄） */
session_unset();
session_destroy();

/* Redirection vers la page d’accueil
   （トップページへリダイレクト） */
header("Location: /signup");
exit();