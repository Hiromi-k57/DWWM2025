"use strict";
/* 
    Lorsque nous codons en JS nous somme par défaut dans l'objet window
        JSでコードを書くときは、デフォルトではwindow objectになります
*/
console.log(window, parseInt("45"), window.parseInt("45"), window.fetch(""));
/* 
    Le mot clef "this" représente par défaut, l'objet dans lequel nous nous trouvons.
    Donc ici, il vaut l'objet window :
        キーワード「this」は、デフォルトでは、私たちが配置されているオブジェクトを表します。したがって、ここではwindow objectの価値があります。
*/
console.log(this);

function showThis()
{
    console.log(this);    
}
/* 
    Dans une fonction appelé ainsi, 
    "this" vaudra "undefined" si "use strict" est utilisé
    Sinon il vaudra encore une fois "window"
        このように呼び出された関数では"use strict"が使用されている場合、「this」は「undefined」になります
        そうでなければ、再び「window」の価値があるでしょう。
*/
showThis();
/* 
    Mais "this" ne sera que rarement utilisé dans ces cas là.
    On va commencer à le voir utiliser dans le cas des eventListener.
    Dans ces cas là, il vaudra l'élément HTML sur lequel est placé l'écouteur d'évènement
        しかし、このような場合には「this」が使われることはほとんどありません。
        これからeventListenerの場合に使用される様子を見ていきます。
        このような場合、eventListenerが配置される HTML 要素になります。
*/
document.body.addEventListener("click", showThis);
/* 
    Cela diffère de "event.target" qui lui retourne l'élément HTML sur lequel l'évènement a eu lieu,
    ce qui dans le cas d'un clique, peut grandement varier :
        これは、イベントが発生したHTML要素を返す「event.target」とは異なります。クリックの場合、大きく異なる可能性があります。
*/
document.body.addEventListener("click", function(e){
    console.log("anonyme", this, e.target);
});
/* 
    !Attention, dans le cas d'une fonction fléché, la valeur de this change.
    Il devient égale à l'objet englobant, (ici window)
        !矢印関数の場合、この値は変化するので注意してください。
        囲んでいるオブジェクト（ここではwindow）と同じになります。
*/
document.body.addEventListener("click", ()=>{
    console.log("fléché", this);    
});

document.body.click();
/* 
    La méthode ".bind()", cette méthode crée une copie d'une fonction,
    Mais dans laquelle, la valeur de "this" aura changé.
    Dans cette copie, "this" prendra comme valeur, le paramètre de "bind"
        「.bind()」メソッドは関数のコピーを作成し、
        しかし、その中で「this」の値は変化しているでしょう。
        このコピーでは、「this」は「bind」のパラメータを値として受け取ります。
*/
const bindedThis = showThis.bind("Coucou tout le monde !");
bindedThis();

const span = document.querySelector("span");
document.body.addEventListener("click", showThis.bind(span));
document.body.click();