"use strict";

let a = true;
/* 
    la boucle while() répètera ce qui se trouve entre accolade, tant que la condition entre parenthèse est vrai. 
    括弧内の条件が真である限り、中括弧内の内容を繰り返します。
*/
while(a)
{
    console.log("Coucou");
    a = Math.random() < 0.5;
}
let b = 0;

while(true)
{
    b++;
    if(b < 10)
    {
        // met fin à l'itération actuelle de la boucle, pour passer à la suivante
        //ループの現在の繰り返しを終了し、次の繰り返しに進みます
        continue;
    }
    if(b === 20)
    {
        // Met fin à la boucle. ループを終了します。
        break;
    }
    console.log(`b vaut ${b}`);
}

/* 
    do{}while() va executer ses instructions une première fois.
    Puis ensuite vérifier si il doit boucler ou pas.
    最初にその命令を実行します。次に、ループする必要があるかどうかを確認します。
*/
do
{
    console.log("do while, b vaut :", b);  
}while(b < 5)

// ? boucle for
/* 
    La boucle for va prendre 3 instructions entre parenthèses, séparés de ";"
    la première se lance avant le début de la boucle.
    la second est une condition vérifiant si la boucle doit continuer.
    la troisième se lancera à la fin de chaque itération

    for ループは、括弧内に「;」で区切られた 3 つのステートメントを取ります。
    最初のものはループの開始前に始まります。
    2番目はループを続行するかどうかをチェックする条件です。
    3番目は各反復の最後に起動されます
*/
for(let i = 0; i < 10;i++)
{
    console.log("i vaut " + i);
}

// ? for in
const arr = ["pizza", "cannelé", "daifuku"];
const obj = {nom:"Pierre", age: 45, yeux: "vert"};

/* 
    La boucle for in permet de boucler sur un tableau ou un objet.
    Elle fera autant d'itération, qu'il y a d'élément dans le tableau ou l'objet.
    à chaque itération, dans le cas d'un objet, la variable contiendra le nom d'une propriété.
    et dans le cas d'un tableau, l'index suivant. (0,1,2...)

    for in ループを使用すると、配列またはオブジェクトをループできます。
    配列またはオブジェクト内の要素と同じ回数だけ反復処理が行われます。
    各反復で、オブジェクトの場合、変数にはプロパティの名前が含まれます。
    配列の場合は次のインデックスです。 (0,1,2...)
*/

for(let index in arr)
{
    console.log("index vaut ", index);
    console.log(index, "->", arr[index]);    
}
for(let prop in obj)
{
    console.log("prop vaut ", prop);
    console.log(prop, " -> ", obj[prop]);    
}

// ? for of
/* 
    Il ne fonctionne que sur les tableaux et non sur les objets.
    Il va parcourir le tableau et donner à chaque itération, la valeur suivante.
    これはオブジェクトではなく配列に対してのみ機能します。
    配列を調べて、各反復で次の値を返します。
*/
for(let valeur of arr)
{
    console.log("valeur vaut ", valeur);    
}