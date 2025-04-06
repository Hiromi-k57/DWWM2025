/* 
描画アプリケーション
キャンバス描画アプリケーション（Microsoft ペイント）を作成しましょう。

1. 要約
キャンバスをウィンドウまたはキャンバスの親のサイズにします。

マウスをキャンバス上で動かすと、マウスの位置に描画します。これが機能したら、次の条件を追加します。

描画を実行するには、マウスをクリックする必要があります。さらに詳しい情報を知りたい場合は、次の章を参照してください。完了すると、最後の章でボーナスが待っています。

2. アプリケーションの作成
変数「painting」を false に宣言します。これは、マウス ボタンが現在押されているかどうかを示すために使用されます。

mousemoveイベント中: 「painting」が false の場合は関数を終了し、それ以外の場合はマウスの x および y 位置に描画することを示します。

mousedownイベント中: ストロークの開始を示すために、「painting」を true に設定します。

mouseupイベント中: ストロークが終了したことを示すために「painting」を false に設定します。

アプリケーションは描画できるようになるはずですが、いくつかの問題は残ります。
それをどう解決するかを見つけるのはあなた次第です。

3. ボーナス
色の変更を許可します。
サイズの変更を許可します。
ロールバック（元に戻す）を許可します。
前進（やり直し）を許可します。
保存を許可する: 「.toDataURL("image/png")」を使用すると役立つ場合があります。
画像の読み込みを許可するには、「new FileReader()」と「readAsDataURL」を使用すると便利です。
*/

"use strict";
const container = document.getElementById("container");
const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
/**
 * "2d"はこのキャンバスを2D描画モードで使いますよ！」と宣言
 * Canvasにおけるcontextはキャンバスに「どう描画するか」を管理するオブジェクト
 * ctxの種類として、線の色、太さ、角の丸さ、塗りつぶしの色、描く座標等を含む
 ***イメージとして「キャンバスに描くための設定と道具が入ったツールボックス」が context  
 */

console.log(container, canvas, ctx);

function resizeCanvasToParent() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
}
  
resizeCanvasToParent(); // 最初に呼び出す
  
let painting = false;
  
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mouseleave", endPosition);
canvas.addEventListener("mousemove", draw);

function startPosition(e) {
    painting = true;
    draw(e);
}
  
function endPosition() {
    painting = false;
    ctx.beginPath();
}
  
function draw(e) {
    if (!painting) return;
  
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
  
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}




