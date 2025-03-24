"use strict";
// Un commentaire sur une ligne
/* 
    Un commentaire 
    sur plusieurs lignes
*/
// ? Déclaration des variables 
/* 
    Il existe trois mots clefs pour déclarer des variables.
    Les noms des variables peuvent contenir n'importe quelle lettre ou chiffre, mais ne peuvent pas commencer par un chiffre
    変数名には任意の文字または数字を含めることができますが、数字で始まることはできません。
*/
let banane;
// let est le mot clef le plus conseillé pour déclarer une variable.
console.log("Contenu de banane :", banane);
// * la fin d'une instruction en JS, se fait soit par un saut à la ligne, soit par un ";"
//JS の命令の終了は、改行または「;」によって行われます。
var tomate;
// var était l'unique déclaration de variable avant 2016

const cerise = 5;
// const permet de déclarer une variable dont la valeur ne changera pas.
// Tenter de la changer, provoque une erreur. On doit indiquer sa valeur, dès la déclaration.
    // const を使用すると、値が変更されない変数を宣言できます。
    // 変更しようとするとエラーが発生します。宣言時にその値を示す必要があります。
// cerise = 1;

let a, b, c;
let d = 1, e, f = 12;
// On ne peut pas redéclarer une variable qui a déjà été déclaré.
    // すでに宣言されている変数を再宣言することはできません。
// let d;
// Pour changer sa valeur, on ne remet pas le mot clef, qui est là juste pour la déclaration. 
    // 値を変更するために、宣言のためだけに存在するキーワードを戻しません。
d = 2;

// ? La portée des variables.

let glet = 1;
var gvar = 1;
// Il est possible de créer des blocs de code avec {}, rarement utile seul, ils le seront ici pour parler de la portée des variables.
    //{} を使用してコード ブロックを作成できますが、単独ではほとんど役に立ちません。ここでは、変数のスコープについて説明するために使用します。
{
    let hlet = 2;
    var hvar = 3;
    console.log(glet, gvar, hlet, hvar);
    // Les variables déclarés dans un bloc, sont accessible depuis ce bloc et dans leurs enfants.
    //ブロック内で宣言された変数は、そのブロックとその子からアクセスできます。
    {
        console.log(glet, gvar, hlet, hvar);
    }
}
// Une variable déclaré en "let" dans un bloc, n'existera que dans celui ci. En "var", elle sera accessible partout.
    //ブロック内で「let」として宣言された変数は、そのブロック内にのみ存在します。 「var」ではどこからでもアクセス可能になります。
// console.log(glet, gvar, hlet, hvar);
console.log(glet, gvar, hvar);

{
    let glet = 5;
    var gvar = 5;
    console.log("dans le bloc :", glet, gvar);
}
/* 
    Il est possible de redéclarer des variables, si elles sont dans un bloc différent.
    en let ce sera une variable différente, qui n'existera que dans son bloc.
    en var, cela viendra remplacer la variable d'origine.

    変数が異なるブロック内にある場合は、再宣言することが可能です。
    let では、ブロック内にのみ存在する別の変数になります。
    var では、元の変数が置き換えられます。
*/
console.log("hors du bloc :", glet, gvar);

// ? Types de variable.

let num = 5,
    str = "Coucou",
    bol = true,
    arr = [],
    obj = {},
    und;
// On utilise "typeof" pour connaître le type de la variable qui suis:
console.log("num", typeof num); // type number
console.log("str", typeof str); // type string
console.log("bol", typeof bol); // type boolean
console.log("arr", typeof arr); // type object
console.log("obj", typeof obj); // type object
console.log("und", typeof und); // type undefined

// particularité de JS, les tableaux (array) sont des objets. JSの特徴は、配列がオブジェクトであることです。

// javascript est un langage non typé, c'est à dire, que mes variables peuvent changer de type à tout moment :  JavaScript は型指定のない言語です。つまり、変数の型はいつでも変更される可能性があります。
bol = 42;
console.log("bol MAJ", typeof bol);

// ? Chaîne de caractères (string)
// On peut déclarer nos strings avec 3 caractères différents "" '' ``
let s1 = "Coucou",
    s2 = 'Coucou',
    s3 = `Coucou`;

s1 = "L'apostrophe ne pose pas de problème ici";
s2 = 'L\'apostrophe pose problème ici, Je dois l\'échaper avec \\';
console.log(s1, s2);
s1 = 'Le grand ordinateur a dit "42"';
s2 = "Le grand ordinateur a dit \"42\"";
console.log(s1, s2);

s1 = "Je ne peux pas sauter de ligne";
s2 = 'Je ne peux pas sauter de ligne';
s3 = `Je peux 
sauter à la ligne`;

s1 = "Karl";
// En JS, la concaténation se fait avec "+"; 連結は「+」で行われます
s2 = "Bonjour " + s1 + " Comment ça va ?";
console.log(s2);
// En JS, l'interpolation se fait avec "${}" uniquement dans un string avec ``
//JSでは、``を含む文字列でのみ「${}」で補間が行われます。
s3 = `Bonjour ${s1} Comment ça va ?`;
s2 = "Bonjour ${s1} Comment ça va ?";
console.log(s3, s2);

// ? les Nombres (number)

console.log(24, 3.14);
// Si on veut faciliter la lecture des grands nombre, on peut espacer ceux-ci avec "_"
//大きな数字を読みやすくしたい場合は、「_」でスペースを入れます。
console.log(123_456_789);
// JS peut perdre en précision avec les très grand nombre:
//JS は非常に大きな数値の場合、精度が失われる可能性があります。
console.log(9_999_999_999_999_999);
// Il existe aussi certain mystères comme :
console.log(0.2 + 0.1);

console.log(
    5+5,
    5-5,
    5*5,
    5/5,
    5%5,
    5**5
);
// % représente un modulo, le reste d'une division. %は剰余、つまり割り算の余りを表します。
// ** représenter une puissance, 2**3 signifie 2*2*2  ** は累乗を表します。

// ! ATTENTION, l'addition et la concaténation utilisent le même symbole 足し算と連結は同じ記号を使用します
console.log(
    5 + "5",
    5 - "5",
    5 + "Banane",
    5 - "Banane"
);
// Si JS ne comprend pas comment faire un calcul, il affiche NaN (Not a Number)
//JSが計算方法を理解できない場合は、NaN（Not a Number）を表示します。
console.log("Type de NaN", typeof NaN);
// Il existe une fonction qui permet de vérifier si un calcul retourne "NaN":
//計算が「NaN」を返すかどうかを確認する関数があります。
console.log(isNaN(5-"Chaussette"), isNaN(5-"2"));
// Il existe un mot clef représentant un nombre infini : 無限数を表すキーワード
console.log(Infinity);

let n = 0;
// Il est classique de vouloir changer la valeur d'une variable en ajoutant, soustrayant... un autre nombre. 
    //別の数値を追加したり、減算したりして変数の値を変更したいというのはよくあることです。
// n = n + 5;
// plutôt que de réécrire toute l'opération, on peut indiquer l'opération suivi d'un égale et du chiffre : 
    // 演算全体を書き直すのではなく、演算の後に等号と数値を続けて示すことができます。:

n += 5; // 0 + 5
n -= 2; // 5 - 2
n *= 3; // 3 * 3
n /= 4; // 9 / 4
n %= 3; // 2.25 % 3
n **=2; // 2.25 * 2.25
console.log(n);

// il est encore plus classique, de vouloir augmenter de 1 ou diminuer de 1. On appelle cela l'incrémentation ou la décrémentation.
//1 ずつ増やしたり、1 ずつ減らしたりすることは、さらに典型的な例です。これをl'incrémentation, la décrémentationと呼びます。

n++
n--
++n
--n

// D'abbord il envoi le contenu de la variable, puis il l'augmente. まず変数の内容を送信し、次に変数を増やします。
console.log("n++", n++, "n", n);
// D'abbord il augmente la variable, puis il envoi son contenu. まず変数を増やし、次にその内容を送信します。
console.log("++n", ++n, "n", n);

n = 17;
// toString() permet de transformer un nombre en string. 数値を文字列に変換
console.log(n, n.toString());
// Il peut aussi changer sa base mathématique :
console.log(n, n.toString(2));

// Et à l'inverse on utilisera parseInt(); 文字列の整数を数値型の整数に変換する
let s = "10011101";
console.log(s, parseInt(s));
// On peut aussi changer la base mathématique :
console.log(s, parseInt(s,2));

// ? Les Tableaux (array)

const   a1 = [5, "truc", true],
        a2 = new Array(5, "truc", true);
console.log(a1, a2);
/* 
    Dans les tableaux, les éléments sont indéxés par une valeur numérique,
    Elle commencera par 0 pour le premier élément.

    Pour accèder à une valeur du tableau, j'indiquerai son index entre []

    表では、要素は数値でインデックス付けされ、最初の要素は 0 から始まります。
    配列内の値にアクセスするには、[]の間にインデックスを指定します。
*/
console.log(a1[1]);
// la propriété ".length" permet de connaître la taille d'un tableau
console.log(a1.length);
// Récupérer le dernier élément d'un tableau de longueur inconnue : 長さが不明な配列の最後の要素を取得する
console.log(a1[a1.length - 1]);
// la fonction ".at()" permet aussi de récupérer l'élément à un index donné, mais des nombres négatifs peuvent être données pour compter depuis la fin
//「.at()」関数では、指定したインデックスの要素を取得することもできますが、負の数を指定して末尾から数えることもできます。
console.log(a1.at(-1));
// * Les strings fonctionnent un peu comme des tableaux :文字列は配列と少し似た動作をします:
console.log("Salut"[0], "Salut".at(-1));

// Ajoute un élément à la fin du tableau
a1.push("Bidule");
console.log(a1);
// Retire le dernier élément du tableau 配列の末尾に要素を追加
a1.pop();
console.log(a1);
// Ajoute un élément au début du tableau :
a1.unshift("machin");
console.log(a1);
// Retirer au début : 先頭を削除します:
a1.shift();
console.log(a1);
/* 
    .splice() permet d'ajouter, supprimer ou remplacer des éléments.
    le premier paramètre représente l'index auquel interragir.
    Le second, le nombre d'élément à supprimer.
    les suivants, les éléments à ajouter.
    
    .splice() を使用すると、要素を追加、削除、または置換できます。
    最初のパラメータは、操作するインデックスを表します。
    2番目は削除する要素の数です。
    以下、追加する要素。
*/
a1.splice(1, 0, "au milieu");
console.log(a1);

const a3s = ["salut", "bonjour", "coucou"];
const a3n = [4, 1, 42, 8, 14];
// Permet de trier les éléments du tableau :配列の要素を並べ替えることができます:
a3s.sort();
console.log(a3s);
// Par défaut, il ne fonctionne guère pour les nombres :デフォルトでは、数字に対してはほとんど機能しません。
a3n.sort();
console.log(a3n);
/* 
    Pour les tableaux et les objets, JS ne stocke pas le contenu dans les variables. Mais seulement l'adresse de l'objet dans la mémoire de l'ordinateur.
    donc en indiquant ici a4 = a1, ce n'est pas le contenu du tableau qui est copié, mais l'adresse.
    Par ce fait, modifier l'une des variables, modifiera le tableau pour les deux variables.
    
    配列とオブジェクトの場合、JS は内容を変数に保存しません。ただし、コンピュータのメモリ内のオブジェクトのアドレスのみです。
    したがって、ここで a4 = a1 と指定すると、コピーされるのはテーブルの内容ではなく、アドレスになります。
    したがって、変数の 1 つを変更すると、両方の変数のテーブルが変更されます。
*/
const a4 = a1;
console.log(a4);
a4.push("Copie de a1");
console.log(a4, a1);
// Pour obtenir une copie, on devra utiliser le "spread operator" (...). 
// コピーを取得するには、「スプレッド演算子」(...) を使用する必要があります。
console.log(a1, ...a1);
// console.log(a1[0], a1[1], a1[2], a1[3], a1[4])
const a5 = [...a1];
console.log(a5);
a5.unshift("Vrai copie !");
console.log(a5, a1);

// Un tableau multidimensionnel, est un tableau qui en contient un autre 多次元配列とは、別の次元を含む配列
const a6 = ["voiture", "avion", ["chaussette", "banane"]];
console.log(a6);
// Pour selectionner un élément dans un tableau multidimensionnel, je demande d'abbord l'index du second tableau, puis l'index de l'élément que je souhaite afficher :
// 多次元配列から要素を選択するには、まず 2番目の配列のインデックスを要求し、次に表示する要素のインデックスを要求します。
console.log(a6[2][0]);
// Il n'y a pas de limite au nombre de tableau :
const a7 = [[[[[["Coucou"]]]]]];
console.log(a7, a7[0][0][0][0][0][0]);

// ? les objets (object)

/* 
    Les objets ont des "propriétés" qui sont des mots suivi de ":"
    et dans ses propriétés, on place des "valeurs" qui peuvent être n'importe quoi (string, number, array...)
    オブジェクトには「プロパティ」があり、これは「:」が後に続く単語です。
    そして、そのプロパティには、任意の「値」（文字列、数値、配列など）を配置します。
*/
const o1 = {nom: "Dupont", prenom: "Maurice",age: 45, loisirs: ["Bowling", "Mahjong"]};
console.log(o1);
// Pour sélectionner une propriété, nous écrirons ".nomPropriété" 
// プロパティを選択するには「.propertyName」と入力します。
console.log(o1.nom, o1.age, o1.loisirs);
// On peut aussi les sélectionnés avec [""]
console.log(o1["nom"], o1["age"], o1["loisirs"]);
console.log(o1.loisirs[0]);
// Ajouter une propriété :
o1.signe = "Balance";
console.log(o1);
// Supprimer une propriété :
delete o1.signe;
console.log(o1);

// ? les Booleans
// Un boolean est soit "true" soit "false", rien d'autre n'est un boolean 
// booleanは「true」か「false」のいずれかであり、それ以外はbooleanではありません
let b1 = true, b2 = false;

// Il existe plusieurs façon de les faire apparaître, par exemple, avec des comparaisons :これらを表示するには、比較などいくつかの方法があります。
// "Plus petit" ou "plus grand"
console.log("1 < 2", 1 < 2);
console.log("1 > 2", 1 > 2);
// "Plus petit ou égale" ou "plus grand ou égale" 
console.log("1 <= 2", 1 <= 2);
console.log("1 >= 2", 1 >= 2);
// Est ce que c'est égale 
console.log('1 == "1"', 1 == "1");
// Est ce que c'est strictement égale (le type et la valeur)
console.log('1 === "1"', 1 === "1");
// Est ce que c'est différent 
console.log('1 != "1"', 1 != "1");
// Est ce que c'est strictement différent (le type et la valeur)
console.log('1 !== "1"', 1 !== "1");

console.log("b1:",b1,"b2:", b2);
// le ! devant un boolean, inverse sa valeur
//！booleanの前に置くと、その値が反転されます
console.log("!b1:",!b1,"!b2:", !b2);

// Pour obtenir "true" avec un AND(&&), il faut que les deux côtés soient "true"
//AND(&&)で「true」を得るには、両側が「true」でなければなりません。
console.log(true && true, true && false, false && false);
// Pour obtenir "true" avec un OR(||) il faut qu'au moins un côté soit "true"
//OR(||) で「true」を取得するには、少なくとも一方が「true」である必要があります。
console.log(true || true, true || false, false || false);

// On peut "court-circuiter" un code, c'est à dire empêcher l'execution d'une partie du code avec && et ||
//&& と || を使用すると、コードを「短絡」、つまりコードの一部の実行を防ぐことができます。
let nb = 0;
// dans le cas d'un "&&" si le premier est faux, le second ne sera pas vérifié
//「&&」の場合、最初の値がfalseであれば、2番目はチェックされません。
console.log(true && ++nb, nb);
console.log(false && ++nb, nb);
// Dans le cas d'un "||" si le premier est true, le second ne sera pas vérifié.
//「||」の場合最初の条件が true の場合、2 番目の条件はチェックされません。
console.log(true || ++nb, nb);
console.log(false || ++nb, nb);