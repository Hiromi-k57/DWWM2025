"use strict";

/* 
    Le contenu de la balise template est ignoré.
    HTML et CSS ne seront pas exécuté, tout au plus placé dans un "document Fragment".

    Elle va généralement être utilisée par JS pour être cloné en plusieurs exemplaires.

    テンプレート タグの内容は無視されます。
    HTML と CSS は実行されず、最大で「フラグメント ドキュメント Fragment」に配置されます。

    これは通常、JS によって複数のコピーに複製されるために使用されます。
*/

const blogTemplate = document.querySelector('#blog');

console.log(blogTemplate);
// On trouvera le contenu du template dans l'attribut "content" sous la forme d'un "Document Fragment"
//テンプレートの内容は、「ドキュメントフラグメント」の形式で「content」属性に含まれています。
const blogFragment = blogTemplate.content;
console.log(blogFragment);

// Je sélectionne les éléments de mon template que je souhaite changer :
// 変更したいテンプレートの要素を選択します。
const blogTitle = blogFragment.querySelector('h2');
const blogText = blogFragment.querySelector('p');
const blogSource = blogFragment.querySelector('a');

getBlog();

async function getBlog()
{
    const response = await fetch("blog.json");
    if(!response.ok)return;
    const articles = await response.json();
    console.log(articles);
    articles.forEach(a=>{
        blogTitle.textContent = a.title;
        blogText.textContent = a.content;
        blogSource.textContent = a.source;
        blogSource.href = a.source;
        // cloneNode permet de copier un élément HTML, sans argument, il ne copiera que cet élément, sans son contenu. Il faudra ajouter "true" pour qu'il copie le contenu.
        // cloneNode を使用すると HTML 要素をコピーできます。引数を指定しないと、その要素のみがコピーされ、その内容はコピーされません。内容をコピーするには、「true」を追加する必要があります。
        const clone = blogFragment.cloneNode(true);
        // console.log(clone);
        
        document.body.append(clone);
    });
}

import { SuperCard } from "./SuperCard.js";