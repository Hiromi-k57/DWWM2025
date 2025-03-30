"use strict";
/* 
    Permet de récupérés des éléments HTML via le nom de leur balise.
*/
const lis = document.getElementsByTagName("li");
/* 
    On obtient un objet "HTMLCollection" contenant toutes les balises demandées.
    Ici j'ai cherché dans tout mon document, mais il est possible de préciser une recherche dans un élément précis.
    Imaginons que j'ai une variable "footer" qui contient mon footer, je peux écrire :
        footer.getElementsByTagName("li");
    要求されたすべてのタグを含む「HTMLCollection」オブジェクトを取得します。
    ここではドキュメント全体を検索しましたが、特定の要素で検索を指定することも可能です。
    フッターを含む変数「footer」があると仮定すると、次のように記述できます。
    フッターにタグ名で要素を追加します。
*/
console.log(lis);
/* 
    !ATTENTION, je ne peux pas modifier tous les li d'un seul coup,
    Il me faudra préciser lequel je modifie :
    一度にすべてのリンクを変更することはできません。どれを変更するかを指定する必要があります:
*/
lis.textContent = "Coucou";
// Ceci fonctionnera :
lis[0].textContent = "Coucou";

/* 
    Permet de récupéré des éléments HTML via leurs nom de classe
    Pour le reste, il fonctionne comme getElementsByTagName
    クラス名を使用して HTML 要素を取得できます。残りはgetElementsByTagNameのように動作します
*/
const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps,p1);

/* 
    Selectionne un élément HTML via son ID.
    Un id devant être unique, ici pas de HTMLCollection, mais directement l'élément HTML
    ID で HTML 要素を選択します。 IDは一意である必要があります。ここではHTMLCollectionではなく、直接HTML要素です。
*/
const h1 = document.getElementById("mainTitle");
console.log(h1);

/* 
    Prend en paramètre, les même selecteurs qu'en CSS.
    Il selectionnera le premier élément correspondant à ce selecteur.
    CSS と同じセレクターをパラメータとして受け取ります。
    そのセレクターに一致する最初の項目が選択されます。
*/
const p2 = document.querySelector(".marche2");
// const p2 = document.querySelector("main > p:nth-of-type(2)");
// const p2 = document.querySelector("body main p.marche2.step");
console.log(p2);

/* 
    Fonctionne comme le querySelector
    Mais ne s'arrêtera pas au premier résultat,
    Il rangera la totalité des balises correspondante dans un tableau nommé "NodeList"
    querySelectorのように動作します
    しかし、最初の結果で止まることはありません。一致するタグはすべて「NodeList」という配列に保存されます。
*/
const lis2 = document.querySelectorAll("footer li");
console.log(lis2);
// On peut préciser la recherche à un élément plutôt qu'au document en entier.
const header = document.querySelector('header');
const h = header.querySelector('h1');

// ? Selecteurs Bonus :

// Sélectionne l'élément HTML suivant (ici le main)
//同じ親要素を持って隣接する次の要素です。テキストノード、コメントノードは含みません。次の要素がない場合、nullが返ります。
console.log(header.nextElementSibling);
// Sélectionne ce qui suis (ici du text consistant à un saut à la ligne et de l'indentation)
// 同じ親要素を持って隣接する次の要素（ここでは改行とインデントを含むテキスト）
console.log(header.nextSibling);
// On trouvera aussi "previousElementSibling"
//指定した要素の1つ前の要素を取得
console.log(header.previousElementSibling);
// retourne un objet HTMLCollection contenant tous les enfants
console.log(header.children);
// retourne le parent de l'élément.要素の親
console.log(lis[2].parentElement);
// retourne le parent le plus proche qui correspond au selecteur CSS
console.log(lis[2].closest("footer"));

// ? déplacer ou supprimer.
// Si je demande d'ajouter un élément déjà présent, il sera déplacé :
//すでに存在する要素を追加するように要求すると、その要素は移動されます。
// header.append(lis[2]);
// retirer l'élément indiqué :
// lis2[2].remove();

/* 
    Si l'élément est présent directent en variable ou dans une nodeList, il sera toujours présent.
    Mais dans un HTMLCollection, il sera retiré.
    要素が変数内または nodeList 内に直接存在する場合、その要素は常に存在します。
    ただし、HTMLCollection では削除されます。
*/
console.log(lis2, lis);
// Il existe une autre façon de retirer :
// header.removeChild(h);
// Dans le header, je retire mon h1

// exo 1
const aside = document.getElementsByTagName("aside");
const div = document.querySelectorAll("div");
console.log(aside,div);
document.body.append(div[0])

//exo 2
const ligroup = document.querySelectorAll("footer ul li");
   ligroup[0].textContent = "Hello";
   ligroup[1].textContent = "Hi";
   ligroup[2].textContent = "Bye";

for (const element of ligroup) 
{
    element.textContent = "changement depuis boucle for of";
        
}   

for(let i = 0; i < ligroup.length; i++)
{
    ligroup[i].textContent = "changement depuis boucle for";

}
//exo 3
// const mainP = document.querySelector("main > p:nth-of-type(2)");
// console.log(mainP);

const mainP = document.querySelectorAll("main p");
console.log(mainP);
mainP[1].textContent = "test";
mainP[3].textContent = "test";





















