<?php 
if(session_status() !== PHP_SESSION_ACTIVE)
{
    /* 
        Par défaut, la durée de vie de la session dépend de la fermeture du navigateur.
        Mais on peut ajouter une durée de vie en seconde :
        デフォルトでは、セッションの有効期間はブラウザが閉じられているかどうかによって決まります。ただし、有効期間を秒単位で追加することもできます。
    */
    session_start(["cookie_lifetime" => 3600]);
}
// ? setcookie est une modification du header, donc doit être avant tout HTML
    // ? setcookie はヘッダーの変更なので、まず HTML を記述する必要があります。
// si on veux suppriler le cookie :
    // Cookie を削除する場合:
setcookie("PHPSESSID", "", time()-3600);
// on lui indique une durée de vie négative
    // 負の有効期間を示します

$title = "Session page 2";
require "../ressources/template/_header.php";
?>
<h2>Ceci est la session page 2</h2>
<a href="./07-a-session.php">direction page 1</a>
<hr>

<?php 
/* 
    Est ce que $_SESSION["logged"] existe et est ce qu'il vaut true;
    $_SESSION["logged"] が存在し、それが true であるか。

    *$_SESSION["logged"]を2回書く理由は、１回目に$_SESSION["logged"]というキーが存在するかを確認し、２回目に実際に「ログインしているか（値がtrueか）」を確認しているから

    *issetは引数に指定した変数に値が設定されている、かつ、NULLではない場合にはtrue(正)の値を戻り値とします。 それ以外は、戻り値にfalse(偽)の値を返します。 
*/
if(isset($_SESSION["logged"]) && $_SESSION["logged"])
{
    echo "Bonjour {$_SESSION['username']}, {$_SESSION['age']} ans.";
}else
{
    echo "Veuillez passer par la page 1";
}
// Si on souhaite supprimer une donnée, on utilisera "unset"
// データを削除したい場合は「unset」を使用します; unset関数を使って変数や配列・連想配列の要素を削除することができます
unset($_SESSION["food"]);
// Si on souhaite supprimer la session en entier :
// セッション全体を削除する場合:
session_destroy();
// Mais la variable "$_SESSION" est toujours disponible jusqu'au rechargement de la page, donc par sécurité :
// ただし、「$_SESSION」変数はページがリロードされるまで引き続き使用できるため、セキュリティ上の理由から次のようになります。
unset($_SESSION);
require "../ressources/template/_footer.php";
?>