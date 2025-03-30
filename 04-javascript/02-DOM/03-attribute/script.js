"use strict";

const h1 = document.querySelector('#mainTitle');
// console.dir(h1);
//console.dirは指定されたオブジェクトのプロパティをすべてコンソール上で見る方法

// ? Attribut style 

/* 
    Une fois un élément HTML selectionner, nous pouvons modifier son attribut "style" afin d'y insérer du CSS.
    HTML 要素を選択したら、その「スタイル」属性を変更して CSS を挿入できます。
        monElementHTML.style.maPropriétéCSS
        h1.style.color

    ! ATTENTION, Les propriétés CSS qui s'écrivent avec un tiret "background-color", sont écrite ici en version camelCase "backgroundColor"「background-color」で記述された CSS プロパティは、ここではキャメルケース バージョン「backgroundColor」で記述されます。
*/
h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";
// ! ATTENTION, Si on se trompe sur le nom d'une propriété, ou sur une valeur, JS ne provoquera pas d'erreur, mais n'appliquera aucun effet.
// プロパティ名または値を間違って入力した場合、JS はエラーを発生しませんが、効果は適用されません。
h1.style.couleur = "red";
h1.style.color = "rgbaaa(255,255,255,0.8)";

// ? les classes
/* 
    Changer le style peut être pratique, mais très verbeux si on a beaucoup de propriété à changer.
    Une autre possibilité est d'ajouter ou retirer une classe qui a les propriétés attendues.
    スタイルを変更すると便利ですが、変更するプロパティが多数ある場合は非常に冗長になります。もう 1 つの可能性は、期待されるプロパティを持つクラスを追加または削除することです。

    Pour cela deux possibilités,
    Soit className qui gère l'attribut class, comme un simple string.
    Soit classList qui gère l'attribut class, comme un objet avec plusieurs fonctionnalités.
    これには 2 つの可能性があります。
    className はクラス属性を単純な文字列として処理します。
    classList は、複数の機能を持つオブジェクトとして、クラス属性を処理します。
*/
// Change tout l'attribut class :クラス属性全体を変更
h1.className = "banane";
// Ajoute une classe :
h1.className += " chaussette";
// Retire toute les classes :
h1.className = "";

// Ajoute une classe :
h1.classList.add("banane");
// Retire une classe :
h1.classList.remove("banane");
// Ajoute la classe si elle n'y est pas, et la retire si elle est présente.
h1.classList.toggle("banane");
// Vérifie la présence de la classe et retourne un boolean
//クラスが存在しない場合は追加し、存在する場合は削除します。
console.log(h1.classList.contains("banane"));

// ? les autres attributs

/* 
    Pour la plupart des autres attributs,
    Il est possible de les modifier soit directement par leurs noms.
    Soit via les méthodes "getAttribute" et "setAttribute".
    // 他のほとんどの属性については、名前で直接変更することも可能です。「getAttribute」メソッドと「setAttribute」メソッドのいずれかを介して.
*/
// Par exemple si je veux connaître l'id de mon élément :
console.log(h1.id, h1.getAttribute("id"));
// h1.setAttribute("id", h1.getAttribute("id")+"2");
h1.id += "2";

const a = document.querySelector('footer ul li a');
console.log(a);
// Le premier paramètre, c'est l'attribut que l'on souhaite modifier
    // 最初のパラメータは変更したい属性です
// Le second paramètre, c'est la valeur que l'on donne à cet attribut 
    // 2番目のパラメータはこの属性に与える値です 
a.setAttribute("target", "_blank");

/* 
    Les data-attributes fonctionnent un peu différemment
    On devra passer par "dataset" suivi du nom de l'attribut
    データ属性の動作は少し異なります
    「データセット」に続いて属性名を調べる必要があります
*/
console.log(a.dataset.color);
// pour le modifier :
a.dataset.color = "Je ne suis pas une couleur";
// Pour ajouter un data-attribute qui n'existe pas encore, il suffit d'utiliser un nouveau nom :
//まだ存在しないデータ属性を追加するには、新しい名前を使用します。
a.dataset.bidule = "je ne sert à rien";

/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    chaque paragraphe doit être plus gros que le précédent.
    メインの各段落のサイズを変更します。
    各段落は前の段落よりも大きくする必要があります。
*/

const mainP = document.querySelectorAll(".step");
console.log(mainP);
for(let i = 0; i<mainP.length; i++)
{
    mainP[i].style.fontSize = 10+i*5+"px";
}



/* 
    Exercice 2 :
    Faite apparaître la modale via une transition depuis la gauche. 
    左からの遷移によってモーダルが表示されるようにします。
*/

const aside = document.querySelector("aside div");
document.body.append(aside);

console.log(aside);

/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
    ページをリロードするたびにモーダルの背景色をランダムにします。
*/



