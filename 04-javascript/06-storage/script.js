"use strict";
// Je selectionne ma checkbox
const dark = document.querySelector('#darkTheme');

dark.addEventListener("input", changeTheme);

function changeTheme()
{
    // ? Solution 1 : Changer la classe du body
    document.body.classList.toggle("dark", dark.checked);
    if(dark.checked)
    {
        /* 
            localStorage et sessionStorage fonctionnent exactement de la même façon. Même fonctionnalités et propriétés.
            La seule différence est le temps de stockage.
            localStorage garde l'information jusqu'à ce qu'on décide de la supprimer.
            sessionStorage garde l'information pour la session, donc jusqu'à ce qu'on ferme le navigateur.

            setItem permet de sauvegarder une information,
            seul des strings peuvent être sauvegarder.
            Le premier paramètre est un nom qui servira à retrouver l'information.
            Le second est l'information à stocker.

                localStorage と sessionStorage はまったく同じように動作します。同じ機能とプロパティ。唯一の違いは保存期間です。
                localStorage は、削除するまで情報を保持します。
                sessionStorage は、ブラウザを閉じるまでセッションの情報を保持します。

                setItemを使用すると情報を保存できます。保存できるのは文字列のみです。
                最初のパラメータは、情報を取得するために使用される名前です。
                2つ目は保存する情報です。
        */
        localStorage.setItem("theme", "dark");
    }else
    {
        // removeItem permet de supprimer un élément du storage, il prendra en paramètre, la clef de l'élément à supprimer.
        //removeItem を使用すると、ストレージからアイテムを削除できます。削除するアイテムのキーをパラメーターとして受け取ります。
        localStorage.removeItem("theme");
    }
    // ? Solution 2 : changer les variables du css 
    if(dark.checked)
    {
        // console.log(document, document.documentElement);
        
        // document.documentElement.style.setProperty("--fond", "#333");
        // document.documentElement.style.setProperty("--text", "antiquewhite");
    }else
    {
        // document.documentElement.style.setProperty("--fond", "");
        // document.documentElement.style.setProperty("--text", "");
    }
}
// getItem permet de récupérer un élément dans le storage. il prend en paramètre la clef de l'élément à récupérer. (si il ne trouve rien, il retourne "null")
// getItem を使用すると、ストレージからアイテムを取得できます。取得する要素のキーをパラメータとして受け取ります。 (何も見つからない場合は「null」を返します)
dark.checked = localStorage.getItem("theme") === "dark";
// ma fonction changeTheme change le thème selon si la case est coché ou non.
// テーマ変更関数は、ボックスがチェックされているかどうかに応じてテーマを変更します。
changeTheme();


sessionStorage.setItem("salutation", "Bonjours tous le monde !");
localStorage.setItem("salutation", "Bonjours tous le monde !");

// clear supprime toute les informations stocker dans le storage.
sessionStorage.clear();


// exo 2
const themes = document.querySelector('#themes');
const rose = themes.querySelectorAll('option')[0];
const bleu = themes.querySelectorAll('option')[1];
const tourtue = themes.querySelectorAll('option')[2];

console.log(rose,bleu,tourtue); //console.dir()は指定された JavaScript オブジェクトのプロパティをすべてコンソール上で見る方法

themes.addEventListener("change", changeThemeColor);
/* 
    function colorSwitch()を使うときは 
    themes.addEventListener("change", colorSwitch);  を書く
*/

// exo 3
function changeThemeColor()
{
    console.log("coucou");
    
    if(rose.selected) //選択肢の中から選ぶからchangeじゃだめ
    {
        document.documentElement.style.setProperty("--fond", "hotpink");
        document.documentElement.style.setProperty("--text", "antiquewhite");
        localStorage.setItem("theme", "rose");
    }else if(bleu.selected) 
    {
        document.documentElement.style.setProperty("--fond", "blue");
        document.documentElement.style.setProperty("--text", "white");
        localStorage.setItem("theme", "bleu");
    }else if(tourtue.selected) 
    {
        document.documentElement.style.setProperty("--fond", "green");
        document.documentElement.style.setProperty("--text", "khaki");
        localStorage.setItem("theme", "tourtue");
    }else
    {
        document.documentElement.style.setProperty("--fond", "");
        document.documentElement.style.setProperty("--text", "");
    }

}
rose.selecteded = localStorage.getItem("theme") === "rose";
bleu.selecteded = localStorage.getItem("theme") === "bleu";
tourtue.selecteded = localStorage.getItem("theme") === "tourtue";
changeThemeColor();

// exo 3+
// const colorSwitch = changeThemeColor;
// function colorSwitch()
// {
//     switch (themes.value){
//         case 'rose':
//             document.documentElement.style.setProperty("--fond", "hotpink");
//             document.documentElement.style.setProperty("--text", "antiquewhite");
//           console.log('rose');
//           break;
//           case 'bleu':
//               document.documentElement.style.setProperty("--fond", "blue");
//               document.documentElement.style.setProperty("--text", "white");
//             console.log('bleu');
//             break;
//           case 'tourtue':
//               document.documentElement.style.setProperty("--fond", "green");
//               document.documentElement.style.setProperty("--text", "khaki");
//             console.log('tourtue');
//             break;
          
//         default:
//             document.documentElement.style.setProperty("--fond", "antiquewhite");
//             document.documentElement.style.setProperty("--text", "#333");
//           console.log('défault');
//       }
// }

// exo 4

const randomBtn = document.getElementsByClassName("randColor")[0];
console.log(randomBtn);

randomBtn.addEventListener("click", () => {
    // console.log(themes.options);
    // themes.value = ''
    const option = themes.options[Math.floor(Math.random() * themes.options.length)]
    // console.log(option);
    option.selected = true;
    changeThemeColor();
   
  });




