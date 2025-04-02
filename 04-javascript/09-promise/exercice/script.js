/* 
1. Lire la documentation de la fonction sort() de javascript et permettre à celle ci de trier convenablement notre tableau.
  1.JavaScriptのsort() 関数のドキュメントを読み、私たちの配列を正しく並べ替えられるようにする。

2. Faire une fonction de "tri" qui va retourner une promesse.
    Cette fonction devra trier notre tableau.
    Puis si tous s'est bien passé, lancé le .then();
    Mais si deux éléments du tableau sont de type différent, lancer le .catch();
      sort()を行う関数を作成し、この関数はPromiseを返すようにする。
        -この関数は配列を並べ替える。
        -すべて正常に動作した場合、.then() を実行する。
        -しかし、配列内に異なるデータ型の要素が含まれている場合は、.catch() を実行する。

*/

"use strict"; 

const a1 = [3, 12, 45, 4, 70]; 
const a2 = [3, "12", 45, 4, 70];

console.log(a1, a2);

function tri(array) {
    return new Promise((resolve, reject) => {
        // すべての配列の要素が数値型かどうかをチェック、(!)もし一つでも数値でない要素があればtrueとしてエラー処理へ進む
        if (!array.every(item => typeof item === "number")) {
          //異なる型の要素があった場合エラーメッセージを返す
            reject("Erreur, type incompatible.");
            //それ以上の処理が走らないように returnで関数を終了
            return;
        }

        //  配列を昇順（小さい順）にソートを実行 a-bが負（a < b）ならaをbの前に配置の意味
        array.sort((a, b) => a - b);
        resolve(array);
    });
}
console.log(numbers);
 

// 成功する例
tri(a1)
    .then(tableau => console.log(tableau))  // [3, 4, 12, 45, 70]
    .catch(e => console.error(e));

// 失敗する例（型が違う要素が含まれている）
tri(a2)
    .then(tableau => console.log(tableau))
    .catch(e => console.error(e)); // "Erreur, type incompatible."

