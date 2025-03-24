"use strict";

const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');
const progress = document.querySelector('.progress');

/* 
    le mot clef "new" devant une classe comme "Date" permet de créer un nouvel objet à partir de cette classe.
    L'objet date contient la date et l'heure de sa création.
    Il possède tout un tas de méthode permettant de récupérer ces informations.
    
    「Date」のようなクラスの前にキーワード「new」を付けると、このクラスから新しいオブジェクトを作成できます。
    日付オブジェクトには、作成日時が含まれます。この情報を取得するためのさまざまな方法があります。
*/
const date = new Date();
console.log(date);
// On récupère l'année actuelle.
copyright.textContent = date.getFullYear();
// Je récupère l'heure, les minutes et les secondes
mainTime.textContent = date.toLocaleTimeString();

function timer()
{
    const date2 = new Date();
    mainTime.textContent = date2.toLocaleTimeString();
    // console.log("Coucou");
}
/* 
    setInterval prendra au moins deux arguments,
    le premier est une fonction à lancer à un interval régulié.
    Le second est la durée de cet interval, en milliseconde.

    setInterval retourne un identifiant pouvant être utilisé pour le stopper.

    setIntervalは少なくとも2つの引数を取ります。
    1つ目は、定期的に起動される関数です。
    2番目は、この間隔の継続時間 (ミリ秒単位) です。
    setIntervalはそれを停止するために使用できる識別子を返します
*/
let idInterval = setInterval(timer, 1000);

console.log(idInterval);

mainBtn.addEventListener("click", ()=>{
    // permet d'arrêter l'interval dont l'id est fourni en argument.
    //引数として指定された ID の間隔を停止できます。
    clearInterval(idInterval);
});
/* 
    setTimeout fonctionne comme setInterval,
    Mais ne provoque aucune répétition, il attend juste le délai indiqué pour lancer la fonction une seule fois.
    setTimeoutはsetIntervalと同様に動作します。ただし、繰り返しは発生せず、指定された時間だけ待機して関数を 1 回起動するだけです。
*/
let idTimeOut = setTimeout(()=>{console.log("Coucou en retard !")}, 3000);
// permet d'arrêter un timeout.
clearTimeout(idTimeOut);

let w = 0;

function load()
{
    console.log(w);
    if(w===100)return;
    w++;
    progress.style.width = w+"%";
    setTimeout(load, 100);
}
load();