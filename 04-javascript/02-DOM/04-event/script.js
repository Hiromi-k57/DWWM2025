"use strict";

function test(event)
{
    console.log("Coucou", event);    
}

const h1 = document.querySelector('header > h1');
/* 
    Pour ajouter un écouteur d'évènement, nous avons deux possibilités : 
        イベントリスナーを追加するには2つの方法があります:
    Soit elementHTML.addEventListener("nomEvent", fonction)
    Soit elementHTML.onNomEvent = fonction

    Le nom des évènements sont toujours en minuscule.

    Pour retirer un évènement, on pourra utiliser :　イベントを削除:
        elementHTML.removeEventListener("nomEvent", fonction);
        elementHTML.onNomEvent = "";

    Les écouteurs d'évènement passent toujours en paramètre de la fonction callback, un objet correspondant à l'évènement écouté.
    On pourra y récupérer plusieurs informations correspondant à cet évènement.
    Par exemple sur un clique, la position de la souris, l'élément cliqué...
        イベント リスナーは常に、イベントに対応するオブジェクトをパラメーターとしてコールバック関数に渡します。
    このイベントに対応するいくつかの情報を取得できます。
    たとえば、クリックすると、マウスの位置、クリックされた要素などが表示されます。
    */
h1.addEventListener("click", test);

h1.onclick = test;

h1.removeEventListener("click", test);

h1.onclick = "";
/* 
    Si une fonction anonyme est placé en paramètre d'un addEventListener.
    Il n'est pas possible d'utiliser "removeEventListener"
        匿名関数が addEventListener のパラメータとして配置されている場合「removeEventListener」は使用できません
*/
h1.addEventListener("click", function(e) 
{
    let r = Math.floor(Math.random()*360);
    /* 
        le ".target" de l'objet "Event" permet de récupérer la cible de l'évènement.
        Attention, pour un click, la cible est l'élément cliqué.
        Si il y avait un span dans mon H1, si je clique dessus, la ligne suivante s'appliquerait au span et non au H1.
            「Event」オブジェクトの「.target」を使用すると、イベントのターゲットを取得できます。
        クリックの場合、ターゲットはクリックされた要素になることに注意してください。
        H1にspanがあった場合、それをクリックすると、次の行はH1ではなくspanに適用されます。
    */
    e.target.style.transform = `rotate(${r}deg)`;
    // h1.style.transform = `rotate(${r}deg)`;
    /* 
        this, représente par défaut, l'élément HTML sur lequel a été placé l'écouteur d'évènement, ici H1. 
            this,デフォルトでは、イベント リスナーが配置された HTML 要素 (ここでは H1) を表します。
    
        !attention, this ne fonctionne pas, si il est dans une fonction fléché ()=>{}
            これは矢印関数 ()=>{} 内にある場合は機能しません。
        
    */
    // this.style.transform = `rotate(${r}deg)`;
});
/* 
    Il est possible d'ajouter autant d'écouteur d'évènement sur un même évènement que l'on souhaite avec addEventListener.
    Par contre, avec ".onclick", on ne peut mettre qu'une seule fonction.

    "addEventListener"を使用すると、同じイベントに任意の数のイベント リスナーを追加できます。一方、「.onclick」では、1つの関数しか置くことができません。
    
*/
// ? Input et change event
/* 
    Lorsque vous créer votre code, la première chose à faire, est de réfléchir à quel sont les éléments avec lesquels vous allez interragir, et de les sélectionner

    コードを作成するときに最初に行うことは、どの要素と対話するかを考えて、それらを選択することです。
*/
const input1 = document.querySelector('.div1 input');
const btn1 = document.querySelector('.div1 button');

/* 
    Ensuite je peux penser à quels sont les types d'évènements que je souhaite écouter.
    Par exemple ici, je veux écouter le fait que l'utilisateur tape dans l'input.
    Deux choix possible ici, l'évènement "input" ou l'évènement "change"

    "input" se déclenchera à chaque touche entré (dans le cas d'un champ textuel)
    "change" se déclenchera une fois le champ validé (lorsqu'on le quitte)

    そうすると、どんな種類のイベントを聞きたいか考えることができます。
    たとえば、ここでは、ユーザーが入力する内容を聞きたいとします。
    ここでは、「input」イベントまたは「change」イベントの2つの選択肢があります。

    inputは、入力されたキーごとに実行されます（テキストフィールドの場合）
    フィールドが検証されると（フィールドを離れるときに）「change」がトリガーされます。
*/
input1.addEventListener("input", e=>{
// input1.addEventListener("change", e=>{
    console.log(e.target.value, input1.value, this.value);  
    if(e.target.value != "")
    {
        btn1.textContent = e.target.value;
    }
    else
    {
        btn1.textContent = "Clique moi !";
    }
});
// ? Options supplémentaires
/* 
    l'option "once" permet que l'écouteur d'évènement ne se déclenche qu'une seule fois.
*/
btn1.addEventListener("click", ()=>{h1.textContent = input1.value}, {once: true});

const div4 = document.querySelector('.div4');
const gp = div4.querySelector('.grandParent');
const pa = div4.querySelector('.parent');
const en = div4.querySelector('.enfant');
/* 
    Si plusieurs écouteurs d'évènements doivent être déclenché par une même action.
    Ce sera d'abbord l'enfant le plus profond puis cela remontera jusqu'au parent le plus élevé

    Le navigateur va d'abbord capturer pour lister les évènements qui doivent se déclencher, du parent vers l'enfant.
    Puis remonter en déclenchant les évènements.

    On peut indiquer au navigateur d'activer un évènement lors de la phase de capture avec l'option "capture: true"

    同じアクションによって複数のイベント リスナーをトリガーする必要がある場合。
    最初は最も深い子となり、次に最も高い親へと上がっていきます。

    ブラウザはまず、親から子までトリガーする必要があるイベントをキャプチャしてリストします。
    次に、イベントをトリガーして上に戻ります。

    「capture: true」オプションを使用すると、キャプチャフェーズ中にイベントをアクティブ化するようにブラウザに指示できます。
*/
div4.addEventListener("click", ()=>{console.log("div4")}, {capture: true});
gp.addEventListener("click", ()=>{console.log("gp")});
pa.addEventListener("click", (event)=>{
    console.log("pa");
    // permet de stopper la suite d'évènement ici.
    event.stopPropagation();
});
en.addEventListener("click", ()=>{console.log("en")});

const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", event=>{
    /* 
        preventDefault() permet d'annuler l'effet par défaut d'un évènement.
        le changement de page d'un lien, la soumission d'un formulaire...
        preventDefault() を使用すると、イベントのデフォルトの効果をキャンセルできます。
        リンクページの変更、フォームの送信など...
    */
    event.preventDefault();
    console.log("Coucou le monde !");    
});

/*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans l'input de la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
    
    div 2 の入力で色を選択するとボタンのテキストの色が変わり、ボタンを押すと div の背景の色が変わるようにします。
*/
const div2 = document.getElementsByClassName("div2")[0];
const input2 = div2.getElementsByTagName("input")[0];
const button2 = div2.getElementsByTagName("button")[0];
console.log(div2, input2, button2);

input2.addEventListener("change", function(e)
{
    button2.style.color = input2.value; 
});

button2.addEventListener("click",function(e)
{
    button2.style.backgroundColor = input2.value;
});


/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître la modale
    Cette modale doit contenir un élément permettant de la faire disparaître.
    div3のボタンをクリックするとモーダルが表示されるようにする
    このモーダルには、モーダルを消すことができる要素が含まれている必要があります。
*/

const div3 = document.getElementsByClassName("div3")[0];
const div3Button = div3.getElementsByTagName("button")[0];
const modal = document.getElementsByClassName("modal")[0];
// const mH2 = modal.getElementsByTagName("p")[0];
const mInput0 = modal.getElementsByTagName("button")[0];
const mInput1 = modal.getElementsByTagName("button")[1];

console.log(div3,div3Button,modal,mInput0,mInput1);

div3Button.addEventListener("click",function(e)
{
    modal.style.display = "block";
});
mInput1.addEventListener("click",function(e)
{
    modal.style.display = "none";
});

/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
    ナビゲーション内のすべてのリンクをクリックしたときにサイズが 2 倍になるようにします。
    もう一度クリックすると元のサイズに戻ります。
*/

// - menu5 only -
// const ul = document.getElementsByTagName("ul")[0];
// const li = document.getElementsByClassName("menu5")[0];
// console.log(ul, li);

// li.addEventListener("click", function(e){
//     li.style.fontSize = "20px";
// });

const ul = document.getElementsByTagName("ul")[0];
const lis = ul.querySelectorAll("li");
console.log(ul, lis);

function banana(li)
{
        li.addEventListener("click",function(e)
        {
            li.style.fontSize = "30px";
        }
        );
        li.addEventListener("dblclick",function(e)
        {
            li.style.fontSize = "10px";
        }
        );
}
lis.forEach(banana);
// lis.forEach(banana);
// banana(lis[0]);
// banana(lis[1]);
// banana(lis[2]);
// banana(lis[3]);
// banana(lis[4]);
// lis.forEach(function(li){})
// lis.forEach(li=>{})



/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/

const footer = document.getElementsByTagName("footer");
const endOfFile = document.getElementsByClassName("endOfFile");
console.log(footer,endOfFile);

footer.addEventListener("mouseenter",function(e)
{
    footer.style.display = ""
});
