"use strict";
/* 
    Une fonction est un morceau de code nommé, que l'on peut appeler où l'on souhaite dans notre code.
    Une fonction se déclare avec le mot clef "function" suivi d'un nom au choix, de parenthèses puis d'accolades.

    Tant que la fonction n'est pas appelé, le code ne sera pas exécuté.
    Une fonction peut être appelé avant ou après sa déclaration.

    fonctionは、コード内のどこからでも呼び出すことができる名前付きのコードです。
    fonctionは、キーワード「function」に続いて任意の名前、括弧、中括弧で宣言されます。

    関数が呼び出されるまで、コードは実行されません。関数は宣言の前後に呼び出すことができます。
*/

salut();
function salut()
{
    console.log("Salut les gens");    
}
salut();
/* 
    Il existent d'autres façons de déclaré des fonctions.
    Mais les façons suivantes, ne peuvent être appelé qu'après leurs déclarations.

    On pourra déclarer une fonction dite "anonyme" et la ranger dans une variable, un objet, ou un tableau (bien que celui ci, ne se voit jamais).

    関数を宣言する方法は他にもあります。
    ただし、次の方法は宣言後にのみ呼び出すことができます。
    いわゆる「匿名」関数を宣言し、それを変数、オブジェクト、または配列（ただし、配列は表示されません）に格納できます。
*/
const salut2 = function()
{
    console.log("Salut anonyme !");    
}
salut2();
/* 
    Il existe une version raccourci de la fonction anonyme, on appelle cela une fonction fléché. 匿名関数の短縮版があります。これは矢印関数と呼ばれる
*/
const salut3 = ()=>{
    console.log("Salut fléché !");
}
salut3();
// exemple de fonction dans un objet :
const monObjet = {salut:()=>{console.log("coucou depuis objet")}};
monObjet.salut();

// ? Les paramètres des fonctions 

/* 
    Lorsqu'on déclare une fonction, nous pouvons indiquer à celle ci, qu'elle doit recevoir des paramètres.
    Ce sont des valeurs qui devront lui être transmise durant son appel.

    Ces paramètres peuvent être utilisé comme variables interne à la fonction.

    関数を宣言するときに、パラメータを受け取るように指示することができます。
    これらは、呼出しに伝えなければならない値です。
    これらのパラメータは関数内の内部変数として使用できます。
*/
function bonsoir(nom)
{
    console.log("Bonsoir " + nom);
}
bonsoir("Maurice");
// Si aucun paramètre n'est fourni, il sera considéré comme "undefined"
bonsoir();
// Si trop de paramètre sont fourni, il ignorera ceux en trop.
bonsoir("Maurice", "Pierre");

// On peut ajouter autant de paramètre que voulu, en les séparents d'une virgule
function bonneNuit(nom1, nom2)
{
    // ajouter %c au début d'un console.log permet que le second paramètre soit utilisé comme CSS
    //console.log の先頭に %c を追加すると、2 番目のパラメータを CSS として使用できるようになります。
    console.log("%cBonne nuit " + nom1+ " et "+nom2,"background: blue; color: yellow;font-size:40px;");
}
// La première valeur, va au premier paramètre, la seconde, au second et ainsi de suite
// 1番目の値は1番目のパラメータに、2番目の値は 2番目のパラメータに、というように続きます。
bonneNuit("Maurice", "Pierre");
/* 
    Il est possible d'ajouter une valeur par défaut à un paramètre.
    Celle ci sera utilisé dans le cas où le paramètre est laissé vide.

    パラメータにデフォルト値を追加することができます。
    パラメータが空の場合にこれが使用されます。
*/
function goodBye(nom1, nom2="les autres") 
{
    console.log(`Goodbye ${nom1} et ${nom2}`);
    if(nom1 == undefined)
    {
        console.error("Veuillez donner au moins un nom");
        console.warn("Un second nom serait bien mais pas obligatoire");
    }
}
goodBye("Maurice", "Pierre");
goodBye("Maurice");
goodBye();
/* 
    le rest operator (...nomParamètre) se met sur le paramètre le plus à droite. (le dernier)
    Et va créer un tableau contenant tout les paramètres supplémentaires fournis à la fonction.
    残り演算子 (...parameterName) は右端のパラメータに配置されます。（最後）
    そして、関数に提供されるすべての追加パラメータを含む配列を作成します。
*/
function goodMorning(...noms)
{
    // affichage adapté aux tableaux
    console.table(noms);    
    // .toString() ou .join() permettent de transformer un tableau en string
    console.log("Good Morning "+ noms.toString());
    console.log("Good Morning "+ noms.join(" et "));    
}
goodMorning("Maurice", "Pierre", "Charles");

// ? mettre fin à fonction et retourner une valeur. 関数を終了し、値を返します

function insulte(nom)
{
    if(nom === undefined)
    {
        console.error("Veuillez entrer un nom");
        // le mot clef "return" peut être utilisé pour mettre fin à une fonction
        //キーワード「return」は関数を終了するために使用できます。
        return;
    }
    // Si le mot clef "return" est suivi d'une valeur, celle ci sera renvoyé au code lors de l'appel de la fonction
    //キーワード「return」の後に値が続く場合、関数が呼び出されたときにこの値がコードに返されます。
    return nom + " Le Poltron !";
    console.log("fin fonction");
}
insulte();
const newName = insulte("Bob");
console.log(newName);
console.log(insulte("Bil"));

/* 
    Il est possible d'écrire une fonction fléché sans accolade{} si elle n'a qu'une seule instruction à réaliser.
    Dans ce cas là, elle possède un "return" implicite. C'est à dire non visible.
    実行する命令が 1 つだけの場合は、中括弧 {} なしで矢印関数を記述できます。
    この場合、暗黙的に「戻り」があります。つまり、見えないのです。
*/
const add = (a,b)=>a+b;
console.log(add(7,8));

// ? Fonction récurcive 再帰関数
/* 
    Une fonction récurcive est une fonction qui s'appelle elle-même.
    Il est important dans ce genre de cas, de prévoir une fin à cet enchaînement.
    再帰関数は、自分自身を呼び出す関数です。
    このようなケースでは、一連の出来事を終わらせる計画を立てることが重要です。
*/
/**
 * Fonction qui affiche un décompte dans la console.
 * @param {number} x Nombre à partir duquel commence le décompte
 * @returns 
 */
function decompte(x)
{
    console.log(x--);
    if(x<0)return;
    decompte(x);
}
decompte(10);

// ? fonctions callback

/* 
    Une fonction callback, est une fonction donné en paramètre d'une autre fonction afin que cette dernière utilise elle même la nouvelle fonction.
    コールバック関数は、別の関数にパラメータとして渡され、後者の関数自体がその新しい関数を使用する関数です。

    Plein de fonctions JS utilisent des callback.
    Et on peut aussi créer les notres.
*/
const pr = ["Alice", "Ariel", "Mulan", "Belle"];
// La fonction forEach, va appeler la fonction donné en paramètre, en utilisant les différents éléments du tableau en paramètre. 
// forEach関数は、配列のさまざまな要素をパラメーターとして使用して、パラメーターとして指定された関数を呼び出します。
pr.forEach(bonsoir);
/*  
    Ici cela reviendrait à faire: ここでは次のようになります:
    bonsoir("Alice");
    bonsoir("Ariel");
    bonsoir("Mulan");
    bonsoir("Belle");

    On peut aussi directement donné à forEach, une fonction anonyme ou fléché
*/
pr.forEach(function(nom){
    console.log("Bienvenue "+nom);
});
// Il existe plein d'autres fonctions de tableau fonctionnant un peu comme forEach, reduce, map...

/**
 * Appel la fonction en premier paramètre et lui donne comme argument, le nom en second paramètre agrémenté d'un compliment.
  関数を最初のパラメータとして呼び出し、それを引数として、名前を 2 番目のパラメータとして補完語とともに渡します。
 * @param {CallableFunction} maFonction fonction callback
 * @param {string} nom un nom
 */
function compliment(maFonction, nom)
{
    maFonction(nom + " Le magnifique");
}
compliment(bonsoir, "Greg");

//! Lorsqu'on donne une fonction en callback, il ne faut surtout pas mettre les parenthèses. Ce n'est pas un appel que l'on fait, on se contente de donner le nom de notre fonction. 
// 関数をコールバックとして指定する場合は、括弧を含めないでください。これは私たちが行う呼び出しではなく、関数の名前を指定するだけです。
