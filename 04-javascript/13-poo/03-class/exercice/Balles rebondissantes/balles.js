/* 
    Ils peuvent donc avoir chacun leur propre HTML et/ou CSS. Mais chacune des classes doit être dans un fichier à part importé par module.

      - Balles rebondissantes

    Créons un canvas qui au clique fera apparaître une balle rebondissant sur les bords du canvas, de taille, de
    couleur, de vitesse et à une position aléatoire.
    Chaque balles est créer à partir du classe, qui contiendra les propriétés susmentionné.
    Elles auront aussi une méthode permettant de gérer la leur déplacement et une autre gérant leur dessin dans le canvas.

    le script général ne s'occupera que de la création des balles et l'appelle de leur méthode dans une animation.

        それぞれ独自の HTML や CSS を持つことができます。ただし、各クラスはモジュールによってインポートされた個別のファイルに存在する必要があります。

        - 跳ねるボール

        クリックするとキャンバスの端で跳ねるボールが表示されるキャンバスを作成しましょう。サイズは
        色、速度、位置はランダムです。
        各ボールは、前述のプロパティを含むクラスから作成されます。
        また、動きを管理するための方法とキャンバスでの描画を管理するための方法も用意されます。

        一般的なスクリプトは、ボールの作成とアニメーションでのメソッドの呼び出しのみを処理します。

*/

"use strict";
export default class balles
{
   

}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

function resize()
{
    const snapshot = ctx.getImageData(0,0,canvas.width, canvas.height); //getImageData を使用すると、画像データを取得できます
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);
