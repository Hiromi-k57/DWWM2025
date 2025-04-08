"use strict"

/* 
    Ecmascript permet l'export/import de donctions et objets(entre autres choses).
    Ce la va permettre de diviser notre projet en plusieurs fichiers afin de s'y retrouver plus facilement.
    POur utiliser l'import/export notre fichier chargé dans le html doit inclure l'attribut suivant :
        *type ="module"
    Ecmascript では、関数やオブジェクト (その他) のエクスポート/インポートが可能です。
    これにより、プロジェクトを複数のファイルに分割して、簡単に見つけられるようになります。
    インポート/エクスポートを使用するには、HTML にロードされたファイルに次の属性を含める必要があります。
    *タイプ = "モジュール"

    ? Export :
    Dans les fichiers non chargé par le HTML, on ira placer le mot clef "export" ou "export default" devant les fonctions que l'on souhaite utiliser ailleurs.
    On peut exporter autant d'élément que l'on souhaite, mais un seul par fichier peut avoir "export default".
    ? Export:
    HTML によって読み込まれないファイルでは、他の場所で使用したい関数の前にキーワード「export」または「export default」を配置します。
    必要な数のアイテムをエクスポートできますが、ファイルごとに「エクスポートdefault」を設定できるのは 1つだけです。

    ?Import
    Par défaut, l'import ne peut se trouver  qu'au niveaut le plus haut du code. c'est à dire, par dans une fonction, une condition, une boucle...

    Pour importer un élément, on utilisera le mot clef "import" suivi d'entre accolade les éléments à importer séparés de virgules, puis le mot "form" suivi du chemin vers le ficher.

    import { salut, coucou} from "./salutation.js";
        La première fois qu'on importe un fichier, si il contient du code, il sera exécuté.

    ?Import
    デフォルトでは、インポートはコードの最上位レベルでのみ実行できます。つまり、関数、条件、ループ内ではありません...

    要素をインポートするには、キーワード「import」に続いて、インポートする要素を中括弧で囲み、コンマで区切り、単語「form」に続いてファイルへのパスを指定します。
    import { salut, coucou} from "./salutation.js";
    ファイルを初めてインポートするときに、コードが含まれている場合はそれが実行されます。

    import b, { salut, coucou} from "./salutation.js";
        Pour importé l'élément par défaut, il faut placer un nom(n'importe lequel) avant les accolades.
            import b, { salut, coucou} from "./salutation.js";
            デフォルト要素をインポートするには、中括弧の前に名前 (任意の名前) を配置する必要があります。
    import b, { salut, coucou as c} from "./salutation.js";
        Si besoin, je peux renommer un élément importé avec le mot clef "as" suivi du nouveau nom.
            import b, { salut, coucou as c} from "./salutation.js";    
            必要に応じて、キーワード「as」の後に新しい名前を付けて、インポートしたアイテムの名前を変更できます。
    import * as sa from "./salutation.js";
        "*as unNom" permet d'importer tout les exports du fichier rassemblé dans un objet.
            import * as sa from "./salutation.js";
            「*as unNom」を使用すると、オブジェクトに集められたファイルのすべてのエクスポートをインポートできます。
*/
import * as sa from "./salutation.js";

// b();
// salut();
// coucou("Maurice");
// c("Maurice");

console.log(sa);
sa.coucou("Maurice");
sa.salut();
sa.default();
/* 
    Si notre import doit dépendre d'une action utilisateur, une condition ou autre.
    On n'utilisera pas le mot clef "import" mais la fonction "import()".

    Celle ci prendra en paramètre le chemin  vers le fichier.
    et retournera une "promesse" qui une fois réalisé rendra un objet contenant tous les exports.

    インポートがユーザーのアクション、条件、またはその他の何かに依存する場合。
    キーワード「import」ではなく関数「import()」を使用します。

    これは、ファイルへのパスをパラメータとして受け取ります。
    そして、満たされるとすべてのエクスポートを含むオブジェクトを返す「promise」を返します。
*/
hello();
async function hello() 
{
    const salut = await import("./salutation.js");
    salut.default();
    salut.coucou("Pierre");
    salut.salut();   
}