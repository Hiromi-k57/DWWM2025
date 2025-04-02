"use strict";
fetch("test.json").then(function(response){
    if(response.ok)
    {
        response.json().then(function(data)
        {
            console.log(data);
        })
    }
});
/* 
    Lorsqu'on a beaucoup de promesse, on peut se retrouver dans un callback hell.
    C'est à dire, des callback, dans des callback, dans des callbacks et ainsi de suite.
    Si cela n'empêche pas le bon fonctionnement du code, cela peut jouer sur sa lisibilité.
        promiseがたくさんあると、コールバック地獄に陥る可能性があります。
        つまり、コールバック、コールバック内、コールバック内、というように続きます。
        これにより、コードが正常に機能しなくなることはありませんが、コードの読みやすさに影響する可能性があります。

    C'est là qu'interviennent les mots clef "async" et "await".
    "async" va se placer devant une fonction et la rendra "asynchrone".
        Toute valeur retourné prendra la forme d'une promesse.
    "await" va se placer dans une fonction "asynchrone" et permettra d'attendre le résultat d'une promesse
        ここで、「async」と「await」というキーワードが登場します。
        「async」は関数の前に配置され、関数を「非同期」にします。
        返される値はすべて Promise の形式になります。
        「await」は「非同期」関数内に配置され、promise の結果を待機できるようになります。
*/
exemple();
async function exemple()
{
    const response = await fetch("test.json");
    // console.log(response);
    if(!response.ok)return;
    // await ne gère pas, le catch, donc on utilisera généralement un "try catch"
    //awaitはcatchを処理できないので、通常は「try catch」を使用します。
    try 
    {
        const data = await response.json();
        console.log(data);        
    } catch (error) 
    {
        console.error(error);        
    }
}
console.log(synchrone(), asynchrone());
// Tout "return" d'une fonction async se fait sous forme de promesse.
//非同期関数からの「戻り」はすべて、Promise の形式で実行されます。
function synchrone() {
    return "coucou"
}
async function asynchrone() {
    return "coucou"
}

// exemple burger :
burger();
async function burger()
{
    console.log(await pain2());
    console.log(await sauce2());
    console.log(await viande2());
    console.log(await salade2());
    console.log("Mon burger est terminé");
}


function pain2()
{
    return new Promise((resolve)=>setTimeout(()=>resolve("Le pain est grillé et placé"), 1000));
}
function sauce2()
{
    return new Promise((resolve)=>resolve("La sauce est versé"));
}
function viande2()
{
    return new Promise((resolve)=>setTimeout(()=>resolve("La viande est cuite et placé"), 3000));
}
function salade2()
{
    return new Promise((resolve)=>resolve("la salade est placé"));
}
