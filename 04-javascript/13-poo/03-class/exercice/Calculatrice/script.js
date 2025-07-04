/* 
    Créer une calculatrice permettant les opérations les plus simple.
    L'objet doit générer une calculatrice comportant les boutons pour les chiffres et les 4 opérations basiques (addition, soustraction, division et multiplication). 
    Elle doit aussi contenir une touche 
    "égale", une touche "virgule", une touche "delete" et une touche "clear".
    La zone d'affichage doit être sur deux lignes, celle du bas affichera le nombre actuel, celle du haut affichera le nombre précédent et l'opération choisi.
    Pour des raisons de lisibilité, il serait bon que la calculatrice affiche un espace entre chaque suite de 3 chiffres.

    基本的な計算（四則演算）ができる電卓を作成します。
    電卓オブジェクトは以下のような要素を生成する必要があります：
    数字ボタン
    4つの基本演算（＋、−、÷、×）のボタン
    イコール（＝）ボタン
    小数点ボタン
    削除（delete）ボタン
    クリア（clear）ボタン
    ディスプレイは2行に分かれており：
    下段には現在入力中の数値を表示
    上段には前の数値と選択中の演算子を表示
    また、見やすさのために、数字は3桁ごとにスペースを挿入するとよいでしょう。
*/


import Calculatrice from './calculatrice.js';

new Calculatrice();