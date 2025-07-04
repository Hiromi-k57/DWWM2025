<?php 
/* 
    require et include servent à inclure un autre fichier dans ce fichier.
    La différence se passe au niveau des erreurs.
    include déclenche un warning, 
    require déclenche une fatal error.

    Le fonctionnement de l'inclusion php est assez simple.
    Il prend le contenu du fichier, et le colle là où il est appelé.
    De ce fait, si on déclare des variables avant de l'appeler, elles sont utilisable dans le fichier inclus :
        Ici $title est déclaré ici et utilisé dans le header.

    Require と include は、このファイル内に別のファイルをインクルードするために使用されます。
    違いはエラーにあります。
    include は警告を発し、
    Require は致命的なエラーを発します。

    PHP のインクルードの動作は非常にシンプルです。
    ファイルの内容を取得し、呼び出された場所に貼り付けます。
    したがって、呼び出す前に変数を宣言しておけば、インクルードされたファイルでも使用できます。
        ここでは、$title が宣言され、ヘッダーで使用されています。
*/
$title = "Include et Require";
$mainClass = "includeNav";
require "../ressources/template/_header.php";

// echo $test;

include "../ressources/template/_nav.php";
// ! attention aux boucles infinies :
// require "./05-include.php";
?>
<!-- div>p.para$*5>lorem -->
<div>
    <p class="para1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit rerum, quis ullam placeat harum repellat dolorum porro cumque necessitatibus ipsa nobis esse laborum aspernatur laboriosam fugiat natus qui repellendus.
    </p>
    <p class="para2">
        Eligendi eveniet corporis vel reprehenderit cumque odit aliquam reiciendis tempora sequi debitis accusamus deleniti facilis illo dolor pariatur nihil sapiente quos officia, praesentium sit quibusdam, quasi voluptatibus nesciunt! Labore, minus?
    </p>
    <p class="para3">
        Doloribus, officiis ipsum exercitationem placeat adipisci eos mollitia pariatur tenetur ad odit deserunt vero laudantium, officia corrupti nesciunt? Quos qui veniam voluptas quod maxime natus minus, pariatur illum corrupti vero!
    </p>
    <p class="para4">
        Quidem maiores aliquid, aliquam corrupti asperiores distinctio tenetur. Odio in beatae cumque dicta quos molestias, velit, assumenda sunt, iusto maxime corrupti quod enim blanditiis voluptas nobis. Dignissimos, rerum voluptates! Aut.
    </p>
    <p class="para5">
        Error culpa sed enim beatae reiciendis aut facere sit tempora. Quaerat quam blanditiis beatae. Vitae velit sint, nemo voluptas, error excepturi quos veritatis omnis modi voluptatum doloribus necessitatibus vero eaque?
    </p>
</div>



<?php 
require("../ressources/template/_footer.php");
// Les versions once vérifient que l'élément n'est pas déjà inclu avant de faire l'inclusion.
// once バージョンでは、要素を追加する前に、その要素がまだ含まれていないかどうかを確認します。
require_once("../ressources/template/_footer.php");
include_once("../ressources/template/_footer.php");

/* 
    Il est parfois difficile quand on a plusieurs fichiers inclus les un dans les autres de trouver un chemin qui correspond à chaque fichier.

    On peut faciliter cela en utilisant la constante :
    __DIR__
    Elle indique le chemin absolue jusqu'au dossier où elle est appelé. 
    En la concaténant à un string, on aura plus qu'à indiquer le chemin depuis notre fichier.

        複数のファイルが互いにインクルードされている場合、各ファイルに対応するパスを見つけるのが難しい場合があります。

        定数 __DIR__ を使用すると、この作業が簡単になります。
        __DIR__ は、呼び出されるフォルダへの絶対パスを指定します。
        これを文字列に連結することで、ファイルからのパスを指定するだけで済みます。
*/
?>