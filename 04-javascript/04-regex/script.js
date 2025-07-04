"use strict";

/* 
    Les REGEX ou Regular Expression 
    Permettent de rechercher la présence de caractères dans un string.

    Une regex commence et se termine par "/" (ou se termine par un flag, voir plus bas dans le cours)
    
    //REGEXまたは正規表現
    文字列内の文字の存在を検索できます。
    正規表現は「/」で始まり、「/」で終わります
*/

const r1 = /ou/;
const r2 = /[ou]/;
/* 
    En javascript, il existe plusieurs fonctions qui peuvent utiliser les regex,
    Le première que l'on va voir est "maRegex.test(monString);"
    qui retourne un boolean selon si la regex a trouvé ce qui était recherché.

    La première regex va vérifier la présence de "ou" dans le string

    JavaScriptには正規表現を使用できる関数がいくつかあります。
    最初に表示されるのは「myRegex.test(myString);」です。正規表現で検索したものが見つかったかどうかに応じてbooleanを返します。

    最初の正規表現は文字列に「ou」が存在するかどうかをチェックします
*/
console.log(r1, r1.test("Bonjour"), r1.test("Salut"));
// r2 va vérifier la présence d'un des caractères  
// r2は文字の1つが存在するかどうかをチェックします
console.log(r2, r2.test("Bonjour"), r2.test("Salut"));

const r3 = /^ou/;
// ^ indique que cela doit commencer par "ou" 
// /^ は「ou」で始まる必要があることを示します
console.log(r3, r3.test("Bonjour"), r3.test("outre"));

const r4 = /ou$/;
// $ indique que cela doit terminer par "ou" 
// $は「ou」で終わる必要があることを示します。
console.log(r4, r4.test("Bonjour"), r4.test("mou"));

const r5 = /ou|oi/;
// | est un "or", ici on veut soit "ou" soit "oi" 
// |は「or」ですが、ここでは「ou」か「oi」のどちらかを取得します。
console.log(r5, r5.test("Bonjour"), r5.test("Bonsoir"));

const r6 = /[a-z]/;
// const r6 = /[a-zA-Z]/;
// vérifie la présence de caractère entre a et z (donc n'importe quelle lettre de l'alphabet) 
// aからzまでの文字（つまりアルファベットの任意の文字）の存在を確認します。
console.log(r6, r6.test("Bonjour"), r6.test("0612345678"));

const r7 = /[^a-z]/;
// "^" entre "[]" indique que les caractères ne doivent pas être présent 
// "[]" の間にある "^" は、文字が存在してはならないことを示します
console.log(r7, r7.test("bonjour"), r7.test("0612345678"));

const r8 = /(ou)?/;
// le "?" indique que l'élément précédent doit être présent 0 ou 1 fois 
//「?」前の要素が0回または1回存在する必要があることを示します
console.log(r8, r8.test("Bonjour"), r8.test("Pizza"));

const r9 = /(ou)+/;
// Le "+" indique que l'élément précédent doit être présent 1 fois ou plus 
//「+」は、前の要素が1回以上存在する必要があることを示します。
console.log(r9, r9.test("Bonjour"), r9.test("Pizza"));

const r10 = /(ou)*/;
// Le "*" indique que l'élément précédent doit être présent 0 fois ou plus
//「*」は、前の要素が0回以上存在する必要があることを示します。
console.log(r10, r10.test("Bonjour"), r10.test("Pizza"));

const r11 = /^(cou){2}$/;
// "{}" avec un chiffre, indique le nombre de fois où l'élément précédent doit apparaître. 
// 数字を含む「{}」は、前の要素が出現する回数を示します。
console.log(r11, r11.test("coucou"), r11.test("coup"));

const r12 = /(cou){1,3}/;
// Ici j'indique un minimum et un maximum de fois où l'élément doit apparaître.
// 要素が出現する最小回数と最​​大回数を指定します。
console.log(r12, r12.test("coucou"), r12.test("coup"));

const r13 = /(cou){2,}/;
// sans chiffre après la virgule, on indique un minimum mais pas de maximum
// 以下の数字がない場合、最小値は示されますが、最大値は示されません。
console.log(r13, r13.test("coucou"), r13.test("coup"));

const r14 = /\^/;
// On peut utiliser "\" pour échapper un caractère et lui faire perdre son effet habituel. Ici je cherche juste "^" 
//「\」を使用すると文字をエスケープして、通常の効果を無効にすることができます。ここでは「^」だけを探しています
console.log(r14, r14.test("coucou^_^"), r14.test("coucou-_-"));

const r15 = /\s/;
// const r15 = / /;
// Vérifie la présence d'un espace. ("\" peut aussi donner un effet à un caractère qui n'en a normalement pas)
//スペースがあるかどうかを確認します。（「\」は通常効果を持たない文字にも効果を与えることができます）
console.log(r15, r15.test("Hello World"), r15.test("Bonjour"));

const r16 = /\d/;
// const r16 = /[0-9]/;
// Vérifie la présence d'un chiffre.
console.log(r16, r16.test("Bonjour 8 fois"), r16.test("Bonjour à tous"));

const r17 = /(ou|oi).*\1/;
// "." signifie n'importe quel caractère
    //"."任意の文字を意味する
// "\" suivi d'un chiffre, indique que l'on souhaite voir le même contenu qu'une parenthèse précédente.
    // 「\」の後に数字を続けると、前の括弧と同じ内容を表示することを示します。
// Ici, si il trouve un "ou" il veut un autre "ou", si il trouve un "oi" il veut un autre "oi". 
    //ここで、彼が「ou」を見つけたら、彼は別の「ou」を欲しがり、「oi」を見つけたら、彼は別の「oi」を欲しがります。
console.log(r17, r17.test("Bonjour à tous"), r17.test("Bonsoir à tous"));

// ? Les flags

/* 
    Les flags sont des caractères qui viennent se placer à la fin d'une regex pour lui donner de nouvelles capacités.

    On va les tester sur la méthode "string.match(regex)" qui retourne un tableau contenant les résultats de la regex.

    フラグは、正規表現に新しい機能を与えるために正規表現の末尾に配置される文字です。
    正規表現の結果を含む配列を返す「string.match(regex)」メソッドでテストします。
*/
const phrase = "J'aime la pizza, les cannelés et les okonomiyaki";

console.log(phrase.match(/pizza/));
// par défaut, les regex s'arrêtent au premier résultat trouvé
//デフォルトでは、正規表現は最初に見つかった結果で停止します。
console.log(phrase.match(/les/));
// le flag "g" pour "global" permet de chercher dans tous le string.
//「global」の「g」フラグを使用すると、文字列全体を検索できます。
console.log(phrase.match(/les/g));

const phrase2 = "Vive les regex et vive javascript !";

// Par défaut, les regex sont sensible à la casse (minuscule ou majuscule) 
// デフォルトでは、正規表現は大文字と小文字を区別します（小文字または大文字）
console.log(phrase2.match(/vive/g));
// le flag "i" pour "insensitive" le rend insensible à la casse (majuscule et minuscule)
// 「insensitive」の「i」フラグは大文字と小文字を区別しません。
console.log(phrase2.match(/vive/gi));

const phrase3 = `1er : Maurice
2ème : Paul
3ème : Charlie`;

// Mon string commence par un chiffre, mais les sauts à la ligne ne sont pas des strings différent. Donc je n'ai qu'un résultat
//文字列は数字で始まりますが、改行部分は異なる文字列ではありません。だから結果は1つだけ
console.log(phrase3.match(/^\d/g));
// "m" pour "multiple" indique de traiter chaque saut à la ligne comme un nouveau string 
//「m」は「複数」を意味し、各改行を新しい文字列として扱うことを表します。
console.log(phrase3.match(/^\d/gm));

// ! ATTENTION

const rAlpha = /^[a-zA-Z]+$/;
// Les accents et autres lettres particulières ne sont pas prise comme des lettres entre a et z.  
// アクセントやその他の特殊文字は、a から z までの文字として扱われません
console.log(rAlpha.test("Paul"), rAlpha.test("élodie"));
// Si on veut les acceptés, il faut les écrires :
// これらを受け入れたい場合は、次のように記述する必要があります。
const rAlpha2 = /^[a-zA-Zàéèêûçù]+$/;
console.log(rAlpha2.test("Paul"), rAlpha2.test("élodie"));




