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
const color =document.getElementById("color");
/**
 * "2d"はこのキャンバスを2D描画モードで使いますよ！」と宣言
 * Canvasにおけるcontextはキャンバスに「どう描画するか」を管理するオブジェクト
 * ctxの種類として、線の色、太さ、角の丸さ、塗りつぶしの色、描く座標等を含む
 ***イメージとして「キャンバスに描くための設定と道具が入ったツールボックス」がcontext  
 */

console.log(container, canvas, ctx, color);

//resizeCanvasToParent
function size() { 
    //指定した要素の横幅を取得する（border/marginは含まず）
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
}
  
size(); 
  
let painting = false;
  
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", end);
const clearBtn = document.querySelector('#clearBtn');
const bkBtn =document.querySelector("#bkBtn");
// canvas.addEventListener("mouseleave", end);

function start(e) {
    painting = true;
    draw(e);
}
  
function end() {
    painting = false;
    ctx.beginPath();
}
  
function draw(e) {
    if (!painting) return;
  
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    ctx.lineWidth = color.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = color.value;
  
    ctx.beginPath(); //描画開始
    ctx.moveTo(x, y); //開始点
    ctx.lineTo(x, y); //移動先
    ctx.stroke(); //線を引く
}

color.addEventListener("input",() =>{
    ctx.strokeStyle = color.value;
});

lineWidth.addEventListener("input",() =>{
    ctx.lineWidth = lineWidth.value;
});



clearBtn.addEventListener('click', () =>{
    //原点(左上角)0, 0からcanvas幅と高さを指定
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// やり直し
let history = [];
let undone = [];

function saveHistory() {
  history.push(canvas.toDataURL());
  if (history.length > 20) history.shift(); // 履歴が多すぎないように制限
}

// 直前の操作までの状態に戻すAnnuler
function undo() {
  if (history.length > 0) {
    undone.push(canvas.toDataURL());
    const previous = history.pop();
    let img = new Image();
    img.src = previous;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  }
}

//Undoした状態から、先の状態に戻すRefaire
function redo() {
  if (undone.length > 0) {
    history.push(canvas.toDataURL());
    const next = undone.pop();
    let img = new Image();
    img.src = next;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  }
}
canvas.addEventListener("mousedown", () =>{
    painting = true;
    saveHistory();
});

//save
document.getElementById("saveBtn").addEventListener("click",() =>{
    const dataURL = canvas.toDataURL("img/png");
    const a =document.createElement("a");
    a.href = dataURL;
    a.download ="dessin.png";
    a.click();
});

//img
document.getElementById("loadImage").addEventListener("change", (e) =>{
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();

    reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); //画面クリア
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          };
        };

        reader.readAsDataURL(file);
});