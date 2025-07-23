"use strict";
/* 
    Math.random() génère un chiffre entre 0 et 1 
        0〜1未満（1は入らない）までの小数によるランダムな乱数を生成
    Math.floor() arrondi à l'inferieur　小数点以下を切り捨てる
*/
const x = Math.floor(Math.random()*100);
// const x = 50;
console.log(x);

/* 
    Une condition commencera forcément par un "if" suivi de parenthèses.
    Dans ces parenthèses se trouverons la condition à vérifier.
    Si elle est vrai, alors ce qui se trouve entre accolade sera exécuté
    sinon il ne se passera rien. 
    条件は必ず「if」で始まり、その後に括弧が続きます。
    これらの括弧内はチェックする条件になります。
    trueの場合、弧内の内容が実行されますがそうでなければ何も起こりません。
*/
if(x < 50)
{
    console.log("x est plus petit que 50");
}
/* 
    Si on a plusieurs conditions à vérifier, on peut faire suivre un if,
    de un ou plusieurs "else if" qui ne seront vérifié, que si toute les conditions précédentes sont fausses.

    チェックする条件が複数ある場合は、if文に従うことができます。
    1つ以上の「else if」は、前の条件がすべて falseの場合にのみチェックされます。
*/
else if(x > 50) //もしifに当てはまらなければ、else ifを実行
{
    console.log("x est plus grand que 50");
}
/* 
    Si on le souhaite, on peut ajouter un "else" qui ne prend aucune condition,
    Il sera executé, si toute les conditions précédentes sont fausses.
    必要に応じて、条件を取らない「else」を追加することもできます。
    前の条件がすべてfalseの場合に実行されます。
*/
else //それ以外の場合
{
    console.log("x vaut 50"); //xは50に等しい
}

/* 
    Si la condition, n'a qu'une seule instruction à réaliser.
    On peut ne pas mettre les accolades.
    条件に実行する命令が 1 つだけある場合、中括弧{}は省略できる
*/
if(x<50)
    console.log("x est plus petit que 50");    
else if(x > 50)
    console.log("x est plus grand que 50");
else
    console.log("x vaut 50"); 

/* 
    Une ternaire三項演算子 est une condition sur une seule ligne.
    Elle s'écrit :
        condition ? valeurSiTrue : valeurSiFalse
*/
const message1 = x<=50?"x est plus petit ou égale à 50":"x est plus grand que 50";
console.log(message1);
/* 
    On peut imbriquer des ternaires, mais si on perd en lisibilité, c'est plutôt déconseillé 
    三項演算子をネストすることはできますが、可読性が失われる場合はお勧めできません。
*/
const message2 = 
    x < 50 ?
        "x est plus petit que 50" :
        x > 50 ?
            "x est plus grand que 50":
            "x vaut 50";
console.log(message2);

// Opérateur de Coalescence (??)
let a, b = undefined, c = null, d = "J'aime la pizza";
/* 
    Il permet de vérifier si une variable contient une valeur.
    Et dans le cas où la variable est vide, de prendre la valeur qui suis les "??".

    変数に値が含まれているかどうかを確認できます。変数が空の場合は「??」に続く値を取得します。
*/
console.log(
    a ?? "Coucou de a",
    b ?? "Coucou de b",
    c ?? "Coucou de c",
    d ?? "Coucou de d"
);
// opérateur de chaînage optionnelle "?."
const   obj = {info: "cet objet est un exemple", superinfo: {a:"rien à dire"}},
        obj2={},
        obj3 = null;
/* 
    L'opérateur de chaînage optionnelle permet de vérifier l'existence de l'objet qui précède l'opérateur, avant de tenter de demander une propriété sur celui ci.
    オプションの連鎖演算子を使用すると、そのオブジェクトのプロパティを要求する前に、演算子の前のオブジェクトの存在を確認できます。
*/
console.log(
    obj.info,
    obj.superinfo.a,
    obj.fake?.info,
    obj2.superinfo?.a,
    obj3?.info
);

// ? Switch 
// prompt permet d'afficher une modale invitant l'utilisateur à rentrer une information, cette dernière sera retourné et peut être utilisée par exemple dans une variable. 
    // prompt を使用すると、ユーザーに情報の入力を促すモーダルウィンドウ(pop-upの様なもの)を表示できます。入力された情報は返され、たとえば変数で使用できます。
let ville = prompt("De quelle ville venez-vous?");
// if(ville === "" || ville === null) {ville = "sans réponse}";
ville = ville??"sans réponse";

console.log(ville);
/* 
    le switch permet de prendre une valeur entre parenthèse.
    Puis de déclarer plusieurs cas possibles.
    chacun de ces cas doit être terminé par un "break";
    Si plusieurs cas s'enchainent sans break, alors ils réaliseront les mêmes actions.
    On peut ajouter un "default" qui sera lancé si aucun cas ne correspond.
    スイッチを使用すると、括弧内の値を取得できます。
    次に、いくつかの可能性のあるケースを宣言します。
    これらの各ケースは「break」で終了する必要があります。
    複数のケースが途切れることなく続く場合、同じアクションが実行されます。
    ケースが一致しない場合に起動される「デフォルト」を追加できます
*/
switch(ville.toLowerCase())
{
    case "bordeaux":
    case "lille":
        console.log("C'est trop bien");
        break;
    case "paris":
        console.log("C'est pas bien");
        break;
    default:
        console.log("Je ne connais pas");
}

// alert("Message casse pied");
// console.log(confirm("Vous avez bien compris?"));
    