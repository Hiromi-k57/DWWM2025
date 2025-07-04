"use strict";
/*
    Le principal ajout de TYPEscript est dans son nom
    C'est le typage, c'est à dire que comme dans beaucoup de langage de programmation, on indiquera le type des variables, paramètres et autres

     TYPEscript の主な追加点は、その名前にあります。
    これはタイピングです。つまり、多くのプログラミング言語と同様に、変数、パラメータなどの型を指定します。
*/
let mot = "Bonjour";
let chiffre = 5;
let bool = true;
let nu = null;
// Cela empêche une variable de changer de type :
// これにより、変数の型が変更されるのを防ぎます。
// mot = 1;
// Ici je crée un tableau ne contenant que des strings
// ここでは文字列のみを含む配列を作成します
const arr1 = ["truc", "bidule"];
// Si je veux qu'une variable ou un tableau contienne n'importe quoi, j'utiliserais "any"
// 変数や配列に何かを入れたい場合は、「any」を使用します
let truc = "test";
truc = 5;
const arr2 = ["test", 5, false];
// Pour les objets on pourra indiquer le type de chaque propriété
// オブジェクトの場合、各プロパティの型を示すことができます
const person = { prenom: "Maurice" };
// le "?" indique que la propriété est optionnelle.
// "?"プロパティがオプションであることを示します。
// [key:string] indique qu'il peut y avoir des propriété supplémentaires
// [key:string]は追加のプロパティが存在する可能性があることを示します
const person2 = { prenom: "Charles", nom: "Dupont", loisir: "Bowling" };
// On pourra aussi utiliser un nom de classe comme type:
// クラス名を型として使用することもできます。
const today = new Date();
// Ou bien une fonction :
// または関数:
const salut = function () { };
/*
    On pourra typer les paramètres et les valeurs de retour d'une fonction.

    le type "void" indique que la fonction ne retourne rien du tout

    関数のパラメータと戻り値を入力できます。
    「void」型は、関数が何も返さないことを示します。
*/
function clickMe(e) {
    console.log("Merci de cliquer sur ", e.target);
}
// Ici une erreur est indiqué car "click" donne un "MouseEvent" et non pas un "PointerEvent"
// ここでは、「click」は「PointerEvent」ではなく「MouseEvent」を返すため、エラーが表示されます。
// document.addEventListener("click", clickMe);
document.addEventListener("pointerdown", clickMe);
// Si on n'est pas sûr, on peut toujours indiquer le type "Event" qui est le parent de tout les évènements.
// 確信が持てない場合は、すべてのイベントの親であるタイプ「イベント」を常に指定できます。
function tri(tableau) {
    // Le type "readonly" indique que le paramètre peut être lu, mais pas modifié
    // "readonly" 型は、パラメータの読み取りは可能だが変更はできないことを示します
    // tableau.sort();
    // Donc je vais créer un nouveau tableau qui lui sera trié
    // ソートされる新しいテーブルを作成します
    return [...tableau].sort();
}
// techniquement, si le type n'est pas indiqué, TS le déclarera quand même :
// 技術的には、型が指定されていない場合でも、TS はそれを宣言します。
let a = 5;
// a = "test";
// Mais parfois certaines fonctions ont plusieurs valeurs de retour possible :
// ただし、関数によっては複数の戻り値を持つ場合があります。
const btn1 = document.querySelector("#compte");
// ici btn1 est possiblement null, je peux éviter cela en ajoutant une condition :
// ここで btn1 は null になる可能性がありますが、条件を追加することでこれを回避できます。
if (btn1) {
    // Mais ici il indique que "style" n'existe pas sur "Element"
    // btn1.style.color = "red";
    // Effectivement, querySelector indique qu'il retourne un Element et non pas un HTMLElement.
    // しかし、ここでは「style」が「Element」に存在しないことを示しています
    // btn1.style.color = "red";
    // 実際、querySelector は HTMLElement ではなく Element を返すことを示しています。
}
// Pour éviter ce genre d'erreur, je pourrais changer la valeur de retour de ma fonction :
// Ici btn2 n'est pas "null" mais reste un "Element"
// この種のエラーを回避するには、関数の戻り値を変更できます。
// ここで btn2 は「null」ではなく「要素」のままです
const btn2 = document.querySelector('#compte');
// Ici btn3 est un "HTMLButtonElement" ou "null"
// ここでbtn3は「HTMLButtonElement」または「null」です
const btn3 = document.querySelector('#compte');
// Ici btn4 est un "HTMLButtonElment" et n'est plus "null"
// ここで btn4 は "HTMLButtonElement" であり、もはや "null" ではありません
const btn4 = document.querySelector('#compte');
// même résultat que btn4
// btn4と同じ結果
const btn5 = document.querySelector('#compte');
// Si une variable peut contenir plusieurs types, on utilisera "|"
// 変数に複数の型が含まれる場合は、「|」を使用します
let y = 5;
y = "truc";
y = false;
