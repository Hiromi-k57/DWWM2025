<h1>Introduction</h1>
<hr>
<!-- 
Le code php se place entre ces balises : 
    <?php ?>
Tout code hors de ces balises, est du simple HTML.
Il est commun de voir du PHP au milieu de HTML.
Mais selon la structure choisi, on pourra séparer la majorité du PHP de HTML.
(Par exemple, structure MVC)
    これらのタグの外側のコードはプレーンHTMLです。
    PHPがHTMLの途中にあるのはよくあることです。
    しかし、選択した構造によっては、PHPの大部分をHTMLから分離することも可能です。
    (例: MVC構造)
-->
<?php 
// Commentaire sur une seule ligne
# autre commentaire sur une seule ligne
/* 
    Commentaire
    sur plusieurs lignes
*/
// ! Chaque instruction PHP, se termine par ";"
// par défaut, le code php n'est pas visible sur la page, pour l'afficher, on devra utiliser une des instructions suivante :
    // デフォルトでは、PHPコードはページ上に表示されません。表示するには、以下のいずれかの命令を使用する必要があります。

echo "Coucou";
// Si la plupart des fonctions PHP ont besoin de parenthèse, certaines comme "echo" n'en ont pas besoin
// ほとんどの PHP 関数では括弧が必要ですが、「echo」など一部の関数では必要ありません。
# echo peut prendre plusieurs paramètre :
echo "Hello", "World";
# Une fois affiché, les données sont traité comme du HTML:
echo "<br> PHP !!! <hr>";
/* 
    On a d'autre variantes pour afficher des données
    par exemple "print" qui retourne une valeur de 1 et est un peu plus lent à l'execution.
        データを表示するための他のオプションもあります。たとえば、「print」は値 1 を返し、実行に少し時間がかかります。
*/
print "<br> test avec print <br> ";
/* 
    Il en existe plein d'autre mais le second plus utilisé sera 
        var_dump()
    Il affichera tout type de donnée, en indiquant son type au préalable, il est très utilisé pour le debug
    他にもたくさんありますが、2番目によく使われるのはvar_dump()です。
    これは、事前に型を指定して、あらゆる型のデータを表示します。デバッグに広く使われています。
*/
var_dump("Bonjour", "le monde");
// Permet de voir toute la configuration de php :
// phpinfo();
# Il est possible de récupérer des variables d'environnement avec getenv()
    // PHP 設定全体を表示できます:
    // phpinfo();
    # getenv() で環境変数を取得できます
echo getenv("DB_HOST");

#------------------------------------
echo "<h1>Déclaration des variables</h1><hr>";
// Les variables PHP commencent toujours par un "$"  
// Ensuite on peut la nommer comme on le souhaite, mais elle ne doit pas commencer par un chiffre
    //PHP変数は常に「$」で始まります, 好きな名前を付けられますが、数字で始まってはいけません
$banane;
// echo $banane;
// Lors d'un warning, le message d'erreur s'affiche, mais le code continue
// / 警告中はエラーメッセージが表示されますが、コードは続行されます
echo "<br><strong>après warning</strong>";
// throw new ErrorException("test");
// Lors d'un fatal error, le code s'arrête
// 致命的なエラーが発生した場合、コードは停止します
echo "<br><strong>après fatal Error</strong>";

$banane = "Jaune";
echo "<br>banane :", $banane;
/*   
    Pour les constantes deux façon de les déclarer:
        定数を宣言する方法は2つあります。  
    Anciennement "define('nom', 'valeu')"
    Ou nouvellement "const nom = valeur;"
        以前は「define('name', 'value')」でした。
        新しく「const name = value;」になりました。
*/
define("AVOCAT", "vert");
const AVOCATS = "verreux";

echo "<br>Un avocat est ", AVOCAT, " ou ", AVOCATS, "?<hr>";

// Récupère un tableau des variables définie 定義済み変数の配列を取得します
// var_dump(get_defined_vars());
// De même pour les constantes 定数の場合も同様です
// var_dump(get_defined_constants());

// variable dynamique :
$chaussette = "rouge";
// chaussette est une variable qui vaut "rouge"
$$chaussette = "bleu";
// Je met la valeur "bleu" dans une variable dont le nom dépend du contenu de la variable "chaussette"
    //変数「sock」の内容に応じて名前が決まる変数に「blue」という値を入れます
echo $rouge;

unset($banane);
// var_dump(get_defined_vars());
//-------------------------------------------------------
echo "<h2>Types de Variables</h2><hr>";
$num = 5;
$dec = 0.5;
$str = "Coucou";
$arr = [];
$boo = true;
$nul = NULL;
$obj = (object)[];

echo "num est de type : ", gettype($num), "<br>";
echo "dec est de type : ", gettype($dec), "<br>";
echo "str est de type : ", gettype($str), "<br>";
echo "arr est de type : ", gettype($arr), "<br>";
echo "boo est de type : ", gettype($boo), "<br>";
echo "nul est de type : ", gettype($nul), "<br>";
echo "obj est de type : ", gettype($obj), "<br>";
// ---------------------------------------------------------
echo "<h2>Les strings</h2><hr>";

// pour déclarer un string, on utilisera "" ou ''
echo "un string", 'Ou un autre<br>';
echo "On peut tout à fait
faire des sauts à la ligne
dans un string php.<br>";

$nom = "Maurice";
$age = 54;

// L'interpolation ne fonctionne qu'avec les "".
// 補間は""でのみ機能します。
echo "$nom a $age ans. <br>";
echo '$nom a $age ans. <br>';
// La concaténation se fait avec un "." 
// 連結は「.」で行われます。
echo $nom . " a " . $age . " ans. <br>";
$nom .= " Dupont"; // équivalent à $nom = $nom . " Dupont";
echo $nom, "<br>";
// Affiche la longueur du string
// 文字列の長さを表示します
echo strlen($nom), "<br>";

// Le fonctionnement des string php se rapprochent de celui des tableaux 
// PHP文字列の操作はテーブルの場合と似ています
echo $nom[8], "<br>";
$nom[8] = "L";
echo $nom, "<br>";
// ---------------------------------------------------
echo "<h2>Les nombres</h2><hr>";

echo "1+1=", 1+1, "<br>";
echo "1-1=", 1-1, "<br>";
echo "2*2=", 2*2, "<br>";
echo "8/2=", 8/2, "<br>";
// Le modulo, reste de la division
// 除算の剰余
echo "11%3=", 11%3, "<br>";
// La puissance
echo "2**4=", 2**4, "<br>";

$x = 5;
$x += 2; // $x = $x + 2;
$x -= 3;
$x *= 4;
$x /= 2;
$x %= 3;
$x **= 2;
echo "x vaut $x <br>";

echo $x++ , "-->", $x, "<br>";
echo ++$x , "-->", $x, "<br>";
echo $x-- , "-->", $x, "<br>";
echo --$x , "-->", $x, "<br>";

echo PHP_INT_MAX, "<br>", PHP_INT_MIN, "<br>";
echo PHP_FLOAT_MAX, "<br>", PHP_FLOAT_MIN, "<br>";

// On peut convertir une valeur en la faisant précédé de (type) :
// 値の先頭に (type) を付けることで値を変換できます。
echo (int)"42 trucs", "<br>", (int)3.14, "<br>";
// ---------------------------------------------------
echo "<h2>Les Tableaux</h2><hr>";

// Déclaration originelle :
$a = array("banane", "pizza", "avocat");
// Déclaration récente :
$b = ["banane", "pizza", "avocat"];

var_dump($a);
// affichage plus jolie :
echo '<pre>'.print_r($a, 1).'</pre>';

// sélection d'un élément du tableau :
echo "J'aime la $a[0], la $a[1] et l'$a[2].<br>";

// retourne la taille du tableau :
echo count($a), "<br>";

// Ajouter un élément au tableau :
$b[] = "fraise";
var_dump($b);
echo "<hr>";

// En PHP il existe une autre forme de tableau, les tableaux associatifs.
// Ces tableaux remplaçent les index par des clef nominative.
// PHP には、連想配列という別の形式の配列があります。
// これらの配列では、インデックスが名前付きキーに置き換えられます。

$person = ["prenom"=>"Maurice", "age"=>52];
echo $person["prenom"] . " a " . $person["age"] . " ans.<br>";
// Pour ajouter un élément, j'indique la nouvelle clef :
// 要素を追加するには、新しいキーを指定します。
$person["loisir"] = ["pétanque", "bowling"];
echo '<pre>'.print_r($person, 1).'</pre>';

echo $person["loisir"][1], "<br>";
// Supprimer un élément du tableau :
unset($person["age"]);
echo '<pre>'.print_r($person, 1).'</pre>';

// Unset posera problème sur un tableau classique :
// 配列から要素を削除します:
unset($a[1]);
// l'index 1 n'existe plus
// インデックス1はもう存在しません
var_dump($a);
// Corrigeons cela avec :
// これを次のように修正しましょう:
$a = array_values($a);
var_dump($a);
echo "<br>";

// Sinon on pourra supprimer un index avec :
// それ以外の場合は次のようにしてインデックスを削除できます。
array_splice($b, 1, 1);
var_dump($b);
echo "<br>";

sort($b);
var_dump($b);
echo "<br>";
/* 
    rsort() pour trier dans le sens décroissant; 降順でソートします
    Et pour les tableaux associatif :

        asort() ordre croissant des valeurs 値の昇順でソートします
        ksort() ordre croissant des clefs キーの昇順でソートします
        arsort() ordre décroissant des valeurs 値の降順でソートします
        krsort() ordre décroissant des clefs キーの降順でソートします
*/
// ---------------------------------------------------
echo "<h2>Les Booleans</h2><hr>";
$f = false;
$t = true;
var_dump($f, $t);

echo "<br> 5 < 3 :";
var_dump(5<3);

echo "<br> 5 > 3 :";
var_dump(5>3);

echo "<br> 5 <= 3 :";
var_dump(5<=3);

echo "<br> 5 >= 3 :";
var_dump(5>=3);

echo "<br> 5 == '5' :";
var_dump(5=='5');

echo "<br> 5 === '5' :";
var_dump(5==='5');

echo "<br> 5 != '5' :";
var_dump(5 != '5');
// Autre notation pour "différent"
// 「異なる」の別の表記
echo "<br> 5 <> '5' :";
var_dump(5 <> '5');

echo "<br> 5 !== '5' :";
var_dump(5 !== '5');

// On peut évidement les combiner :
echo "<br> 5 < 3 and 5<2 :";
var_dump(5 < 3 and 5<2);
// OU :
var_dump(5 < 3 && 5<2);

echo "<br> 5 < 3 or 5<2 :";
var_dump(5 < 3 or 5<2);
// OU :
var_dump(5 < 3 || 5<2);

// true si seulement un des deux est true.
// 2 つのうち 1 つだけが true の場合は true になります。
echo "<br> 5 < 3 xor 5<2 :";
var_dump(5 < 3 xor 5<2);

echo "<br>";
var_dump(!$f, !$t);

// ---------------------------------------------------
echo "<h2>Les variables Super Globals.</h2><hr>";

/* 
    Les variables super globals, sont des variables définie par défaut par PHP, et qui sont accessible n'importe où dans le code.
        スーパーグローバル変数は、PHP によってデフォルトで定義され、コード内のどこからでもアクセスできる変数です。

    $GLOBALS
    est un tableau contenant toute les variables globales (celles de PHP et les votres)
        は、すべてのグローバル変数（PHP およびユーザの）を含む配列です。

    $_SERVER
    Contient les informations liées au serveur, le header, l'url et j'en passe.
        サーバー関連の情報、ヘッダー、URL などが含まれます。

    $_REQUEST
    Regroupe le contenu des superglobals $_POST, $_GET et $_COOKIE.
        スーパーグローバル変数 $_POST、$_GET、$_COOKIE の内容をグループ化します。

    $_COOKIE
    Liste des cookies.

    $_GET
    Liste de toute les informations envoyées en GET (dans l'url)
        GET 経由で送信されたすべての情報のリスト（URL 内）。

    $_POST
    Liste de toute les informations envoyées en POST
        POST 経由で送信されたすべての情報のリストです。


    $_FILES
    Contient les informations des fichiers envoyés par un formulaire.
        定義済みのすべての環境変数が含まれます。

    $_ENV
    Contient toute les variables d'environnement définies.
        定義されたすべての環境変数が含まれます。


    $_SESSION
    Doit être initialisé avant d'être utilisé.
    Contient toute les informations stockées en session.
        使用前に初期化する必要があります。
        セッションに保存されるすべての情報が含まれます。
*/
echo '<pre>'.print_r($_POST, 1).'</pre>';
?>