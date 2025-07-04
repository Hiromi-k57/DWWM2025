"use strict";

// log et dir n'ont pas de différence sur firefox
console.log(document.body);
// mais sur chromium cela affiche soit le HTML soit l'objet javascript
// console.dir(document.body);

// createElement permet de créer un élément HTML
const span1 = document.createElement("span");
// textContent est une des propriétés permettant de changer le texte d'un élément HTML   
// textContentはHTML要素のテキストを変更できるプロパティの1つです。
span1.textContent = "Coucou";

console.log(span1);

// appendChild ajoute à la fin de l'élément qui le précède, l'élément mis en paramètre. (ici on ajoute notre span à la fin du body)
//appendChild は、パラメータとして指定された要素を、その前の要素の末尾に追加します。 (ここで、ボディの最後にスパンを追加します)
//appendChild は、要素を追加し（親要素の中の子要素の最後に追加される）それを表示するとき使う
document.body.appendChild(span1);
// prepend permet de placer un élément HTML au début de son parent.
// * Si on tente d'ajouter un élément HTML qui est déjà présent, il sera juste déplacé.
// prepend を使用すると、HTML 要素をその親の先頭に配置できます。
// * すでに存在する HTML 要素を追加しようとすると、要素は移動されるだけです。
document.body.prepend(span1);
// append fonctionne comme appendChild, mais peut prendre plusieurs paramètres et accepte aussi du texte
//append は appendChild と同じように動作しますが、複数のパラメータを取ることができ、テキストも受け入れます
document.body.append(span1, "test");

span1.innerHTML = "<b>COUCOU mais en gras</b>";
// innerHTML gère les balises HTML alors que textContent.
//innerHTMLは指定した要素に含まれるすべてのコンテンツを取得、その後内容を書き換えることが出来る
span1.textContent = "<b>COUCOU mais en gras</b>";
// ! Pour des raisons de sécurité, si des informations textuelles viennent des utilisateurs, il faudra privilégié "textContent"; 
// セキュリティ上の理由から、テキスト情報がユーザーから提供される場合は、「textContent」が優先されます。

// Affiche le texte avec les indentations et sauts à la ligne
//インデントと改行を含むテキストを表示します
console.log(document.body.textContent);
// Affiche toute les balises et code HTML
console.log(document.body.innerHTML);
// Affiche le texte sans indentations et sauts à la ligne supplémentaires
//追加のインデントや改行なしでテキストを表示します
console.log(document.body.innerText);
// kaita code wo zenbu kesu
document.body.textContent = "";

const h = document.createElement("header");
const m = document.createElement("main");
const f = document.createElement("footer");

h.innerHTML = "<h1>Super site en JS</h1>";
f.innerHTML = /* html */ `<ul><li>MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>`;


if(document.body)
{
    // Si le CSS indique des règles pour des éléments qui n'existent pas au chargement de la page. Les nouveaux éléments prendrons bien en compte le CSS lors de leur ajout
    //ページの読み込み時に存在しない要素のルールを CSS で指定する場合。新しい要素を追加するときは、CSS が考慮されます。
    document.body.append(h, m, f);
}

for(let i = 0; i < 5; i++)
{
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A similique itaque, perspiciatis ea minima dolor iste, officiis, labore dignissimos deserunt quibusdam. Veniam, eaque facere cupiditate aperiam qui ducimus numquam incidunt.";
    m.append(p);
}


const div = document.createElement('div');
div.innerHTML = ""
document.body.appendChild(div);

const h2 = document.createElement("h2");
h2.textContent = "Sante !";
div.appendChild(h2);

const p = document.createElement("p");
p.textContent = "Mangez 5 fruits et légume par jour, les produits laitiers sont nos amis pour la vie, ne mangez ni trop gras, ni torop sucre "
div.appendChild(p);



