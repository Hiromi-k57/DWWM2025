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
    クリックでキャンバス上にボールを表示し、キャンバスの端で跳ね返るアニメーションを作成します。
    ボールは大きさ、色、速度、初期位置がランダムになります。

    各ボールはクラスから作成され、以下のようなプロパティを持ちます：

    -大きさ,色,速度,位置

    また、以下のようなメソッドも持ちます：

    -自身の移動を管理するメソッド
    -自身をキャンバスに描画するメソッド

    メインスクリプトは、ボールの生成と、アニメーション中にそれぞれのメソッドを呼び出すことだけを担当します。

*/


"use strict";
export default class Balle {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    // 半径：5〜30のランダム Math.random() * (max - min) + min
    this.radius = Math.random() * (30 - 5) + 5;

    // RGB色でランダムに設定
    const r = Math.floor(Math.random() * 256); // 0〜255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.color = `rgb(${r}, ${g}, ${b})`;

    // キャンバス内に収まるように初期位置を決定
    this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
    this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;

    //速度
    this.speedX = (Math.random() -0.5)*8;
    this.speedY = (Math.random() -0.5)*8;
  }

  update() //ボールの位置を毎回ちょっとずつズラす為
  {
    this.x += this.speedX;
    this.y += this.speedY;

    //跳ね返ったら跳ね返る
    if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
      this.speedX *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
      this.speedY *= -1;
    }
  }

  draw()
  {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}

