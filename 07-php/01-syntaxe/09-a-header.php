<?php

/* 
    Les headers, sont l'en-tête de la requête qui est lu par le serveur ou le navigateur avant même de consulter le contenu de la requête.

    Via PHP on pourra faire divers actions comme changer le status de la requête (200, 300, 404...)
    Demander une redirection ou un rechargement de la page.
    Ou encore limiter l'accès à la page à certains sites, ou method de requête (POST, GET...)

    La plupart des modifications de headers se font via la fonction "headers()" mais certaines autres fonctions les modifies aussi.
    (session_start(), setcookie()...)

    ! Les headers ne peuvent être modifié que si aucun HTML n'a déjà été envoyé.

    Pour changer le status de la page, deux solutions :

        ヘッダーとは、サーバーまたはブラウザがリクエストコンテンツを表示する前に読み込むリクエストヘッダーです。
        PHP では、リクエストステータス（200、300、404 など）の変更、リダイレクトやページのリロードの要求、ページへのアクセスを特定のサイトやリクエストメソッド（POST、GET など）に制限するなど、さまざまなアクションを実行できます。
        ヘッダーの変更は主に "headers()" 関数によって行われますが、他の関数（session_start()、setcookie() など）によっても変更できます。

        ! ヘッダーを変更できるのは、HTML が送信されていない場合のみです。
        ページのステータスを変更するには、次の 2 つの方法があります。
*/
// header("HTTP/1.1 404 Not Found");
// http_response_code(404);
// Cette dernière peut aussi être utilisé pour récupérer le code de status actuel :
// echo http_response_code();
// exit ou die met fin au code. il peut prendre un string à afficher en paramètre.
// exit("coucou");
// die("salut");
if(rand(0,100) > 50)
{
    // Location permet de créer une redirection
    // Locationによりリダイレクトを作成できる
    header("Location: 09-b-header.php");
    // Lorsque l'on fait une redirection, c'est une bonne pratique d'arrêter le code juste après.
    // リダイレクトを行う場合は、直後にコードを停止することをお勧めします。
    exit;
}

$title = "Les headers page 1";
require "../ressources/template/_header.php";

echo "<h2>Vous êtes bien en page 1</h2>";

require "../ressources/template/_footer.php";
?>