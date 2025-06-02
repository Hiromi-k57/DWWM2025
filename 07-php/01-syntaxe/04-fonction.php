<h1>Les fonctions en PHP</h1><hr>
<?php 
/* 
    déclarer une fonction se fait avec :
        function nomDeLaFonction(){}
    La fonction n'aura aucun effet tant qu'elle ne sera pas appelé.
    Pour l'appeler on fera :
        nomDeLaFonction()

    Une fonction peut être appelé avant ou après sa déclaration.

        関数の宣言は次のように行います。
        function functionName(){}
        関数は呼び出されるまで効果を発揮しません。
        関数を呼び出すには、次のようにします。
        functionName()

        関数は宣言の前でも後でも呼び出すことができます。
*/
salut();
function salut()
{
    echo "Salut tout le monde !<br>";
}
salut();

if(true)
{
    // Le fait de pouvoir appelé une fonction avant sa déclaration, n'est vrai que si elle est déclaré à la base du code. 
        // 関数を宣言前に呼び出せるというのは、コードのベースで宣言されている場合にのみ当てはまります。
    // * Si elle se trouve dans un block quelconque, elle ne pourra être appelé qu'après.
        // * 関数がブロック内にある場合は、後からしか呼び出せません。
    // salut2();
    function salut2()
    {
        echo "Salut à moi même !<br>";
    }
    salut2();
}
// Attention que la fonction a bien été déclaré,
// 関数が正しく宣言されていることを確認してください。
// ここで、条件が「false」の場合にエラーが発生します。
// ici on aura une erreur si la condition est "false"
// salut2();

/* 
    Une fonction peut se contenter de réaliser des actions
    ou alors, elle peut retourner une valeur.
    Pour cela on utilisera le mot clef "return".

    Ce mot clef met fin à la fonction et retourne ce qui se trouve après, si il y a quelque chose.

    Ici ma fonction, ne retourne rien si le nombre aléatoire est plus grand que 50
    Et retourne le nombre, si il est plus petit.

        関数は単にアクションを実行することも、値を返すこともできます。
        そのためには、「return」というキーワードを使用します。

        このキーワードは関数を終了し、その後に続くものがあればそれを返します。

        ここで、私の関数は乱数が50より大きい場合は何も返さず、小さい場合は数値を返します。
    */
function alea()
{
    $r = rand(0,100);
    if($r>50)return;
    return $r;
}
// Pour récupérer la valeur de retour, je peux soit la ranger dans une variable, soit l'utiliser directement dans une fonction :
// 戻り値を取得するには、それを変数に格納するか、関数内で直接使用します。
echo alea(), "<br>";
$nombre = alea();
echo $nombre, "<br>";

// -------------------------------
echo "<h2>Les arguments</h2> <hr>";
/* 
    Entre les parenthèses de la fonction, nous pourrons avoir autant d'arguments que voulu.

    Ce sont des paramètres que l'on voudra voir changer lorsque l'on appelle notre fonction.

    La première valeur donnée lors de l'appel, va dans le premier argument.
    La seconde, dans le second et ainsi de suite.

    関数の括弧内には、必要な数の引数を指定できます。

    これらは、関数を呼び出す際に変更するパラメータです。

    呼び出し時に最初に渡された値は、最初の引数に渡されます。

    2番目の値は2番目の引数に渡され、以下同様に続きます。
*/
function bonjour($nom)
{
    echo "Bonjour $nom ! <br>";
}
bonjour("Maurice");
bonjour("Paul");

function bonjour2($n1, $n2)
{
    echo "Bonjour $n1 et $n2 <br>";
}
// Si on n'indique pas le bon nombre d'argument, cela provoque une erreur :
// 正しい数の引数が指定されていない場合はエラーが発生します。
// bonjour2("Maurice");
bonjour2("Maurice", "Pierre");

// ... est le "rest operator", il va produire un tableau contenant tout les arguments supplémentaires.
// ... は「残余演算子」であり、すべての追加引数を含む配列を生成します。
function bonjour3(...$noms)
{
    foreach($noms as $n)
    {
        echo "Salut $n <br>";
    }
}
bonjour3("Maurice", "Pierre", "Paul");

// Si des valeurs par défaut sont données, les paramètres deviennent optionnels.
// デフォルト値が指定された場合、パラメータはオプションになります。
function bonjour4($n1, $n2 = "personne d'autre")
{
    echo "Bonjour $n1 et $n2 ! <br>";
}
bonjour4("Maurice");
bonjour4("Maurice", "Pierre");
/* 
    Par défaut, si l'on passe une variable en paramètre d'une fonction.
    Seule la valeur de la variable est envoyée.
        デフォルトでは、関数に変数をパラメータとして渡すと、変数の値のみが送信されます。
        ? 変更は元の変数には適用されません。
    ? Toute modification ne s'appliquera pas à la variable d'origine.
*/
// function titre($nom)
/* 
    Mais si l'on ajoute un "&" devant l'argument.
    Cela devient un "passage d'argument par référence"
    Ce n'est donc plus seulement la valeur mais toute la variable qui est envoyé.
        しかし、引数の前に「&」を追加すると、「引数を参照渡しする」という表現になります。
        つまり、送信されるのは値だけでなく、変数全体になります。
            ?したがって、変更は元の変数に適用されます。

    ? Les modifications s'appliqueront donc à la variable d'origine.
*/
function titre(&$nom)
{
    $nom .= " le grand !";
}
$prenom = "Maurice";
titre($prenom);
echo "Mon prénom est $prenom ! <br>";

//-----------------------------------
echo "<h2>La récurcivité</h2> <hr>";

/* 
    Une fonction récurcive est une fonction, qui s'appelle, elle même.
    Attention aux boucles infinies, il faut toujours prévoir une sortie.
        再帰関数とは、自分自身を呼び出す関数です。
        無限ループには注意してください。必ず終了処理を用意する必要があります。
*/
function décompte($n)
{
    // action à réaliser
    echo $n, "<br>";
    // condition de sortie 
    if($n <= 0)return;
    // récurcivité
    décompte(--$n);
}
décompte(5);
// ---------------------------------------
echo "<h2>Typage et Description</h2><hr>";
/* 
    Sur les dernières versions de PHP, il est possible, conseillé, bien que non obligatoire, 
    de typer ses arguments et valeur de retour ainsi que de décrire ses fonctions.

    Cela ne changera rien au fonctionnement du code, mais pourra aider à s'y retrouver.
        PHPの最新バージョンでは、引数と戻り値、そして関数の説明を記述することが可能です（必須ではありませんが推奨されています）。

        これによってコードの動作は変わりませんが、コード内を移動しやすくなります。
*/
/**
 * Retourne la présentation d'un personnage
 *
 * @param string $nom nom du personnage
 * @param integer $age age du personnage
 * @param boolean $travail a-t-il un travail
 * @return string présentation
 */
function presentation(string $nom, int $age, bool $travail): string
{
    return "Je m'appelle $nom et j'ai $age ans. Je ".($travail?"travaille.":"ne travaille pas.");
}
echo presentation("Maurice", 54, false), "<br>";

// --------------------------------------
echo "<h2>Portée des variables et static</h2><hr>";
// Une variable déclaré hors d'une fonction, n'est pas utilisable dans une fonction.
// 関数外で宣言された変数は関数内では使用できません。
$z = 5;
function showZ()
{
    // echo $z;
    # Mais il est possible de faire appel aux variables déclarés hors de toute fonction via le mot clef "global";
    # ただし、キーワード「global」を使用して関数外で宣言された変数を呼び出すことは可能です。
    global $z;
    echo $z, "<br>";
}
showZ();
/* 
    Par défaut, une variable déclaré dans une fonction est détruite à la fin de la fonction.
    Le mot clef static permet de la garder en mémoire jusqu'à la fin du script.

    Ici grâce au mot clef "static", "$b" sera initialisé à 0 au premier appel, puis il gardera sa valeur à chaque nouvel appel sans se réinitialiser.
        デフォルトでは、関数内で宣言された変数は関数の終了時に破棄されます。
        static キーワードを使用すると、スクリプトの終了まで変数をメモリ内に保持できます。

        ここでは、「static」キーワードのおかげで、「$b」は最初の呼び出しで 0 に初期化され、その後はリセットされることなく、以降の呼び出しごとにその値を保持します。
*/
function compte()
{
    $a = 0;
    static $b = 0;
    echo "a: $a <br> b: $b <br>";
    $a++;
    $b++;
}
compte();
compte();
compte();
compte();

// ------------------------------------------
echo "<h2>Fonctions anonyme, fléché et callback</h2><hr>";

$tab = ["Sandwich", "Ramen", "Pizza"];
/* 
    Une fonction callback est une fonction qui est donnée en argument d'une autre fonction (ici le type callbable)
    Afin que ce soit cette autre fonction, qui s'occupe de l'appeler
        コールバック関数とは、別の関数（ここでは呼び出し可能型）に引数として渡される関数です。
        これにより、別の関数がコールバック関数の呼び出しを処理します。
*/
function dump(array $arr, callable $func):void
{
    foreach($arr as $a)
    {
        $func($a);
        echo "<br>";
    }
}
/* 
    Pour fournir ma fonction callback à ma fonction dump,
    J'ai plusieurs solutions, comme :
    Déclarer une fonction anonyme 
        ダンプ関数にコールバック関数を提供するには、次のようないくつかの解決策があります。
        匿名関数を宣言する
*/
dump($tab, function($v){echo "fonction anonyme : $v";});
// Une fonction fléchée :
dump($tab, fn($v)=>var_dump("fonction fléchée : $v"));
// Ou ranger une fonction anonyme dans une variable :
// または、匿名関数を変数に格納します。
$maFonction = function($v){echo "fonction anonyme dans variable : $v";};
dump($tab, $maFonction);
?>