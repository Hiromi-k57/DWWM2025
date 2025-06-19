<?php 
/* 
    La session permet de stocker toute sortes d'informations (string, object, array...) d'une page à l'autre.
    Elle est stocké côté serveur, mais place un cookie contenant son identifiant afin de reconnaître quelle session appartient à quel utilisateur.

    Elle ne peut être utilisé qu'après un "session_start()"
        Celui ci doit être appelé avant tout HTML.
    
    session_status() permet de récupérer l'état actuel de la session.
    PHP_SESSION_NONE est le code indiquant que la session n'est pas démarré

        セッションを使用すると、あらゆる種類の情報（文字列、オブジェクト、配列など）をあるページから別のページへ保存できます。
        セッションはサーバー側で保存されますが、どのセッションがどのユーザーに属しているかを識別するために、セッション識別子を含むCookieが配置されます。

        セッションは「session_start()」呼び出しの後でのみ使用できます。
        これは、HTMLの前に呼び出す必要があります。

        session_status() は、現在のセッションステータスを取得するために使用されます。
        PHP_SESSION_NONE は、セッションが開始されていないことを示すコードです。
*/
if(session_status() === PHP_SESSION_NONE)
{
    session_start();
}

$title = "Session page 1";
require "../ressources/template/_header.php";
?>
<h2>Ceci est la session page 1</h2>
<a href="./07-b-session.php">direction page 2</a>
<hr>
<?php 
// Si on souhaite récupérer l'id de la session :
// セッションIDを取得する場合:
var_dump($_COOKIE, session_id());
// Le nom par défaut du cookie est "PHPSESSID" mais il peut être modifié avec "session_name('nouveauNom')" avant le session_start()
// デフォルトのクッキー名は「PHPSESSID」ですが、session_start() の前に「session_name('newName')」で変更できます。

/* 
    Pour sauvegarder ou récupérer des données.
    On utilisera la super global "$_SESSION" qui est un tableau associatif de base.
        データを保存または取得するには、基本的な連想配列であるスーパーグローバル「$_SESSION」を使用します。
*/
$_SESSION["food"] = "pizza";
$_SESSION["age"] = 54;
$_SESSION["logged"] = true;
$_SESSION["username"] = "Maurice";
// Allons ensuite en page 2

require "../ressources/template/_footer.php";
?>