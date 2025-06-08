import Balle from "./balles.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const balles = [];
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

// キャンバスのサイズを画面に合わせる
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// クリックで新しいボールを追加
canvas.addEventListener("click", () => {
  balles.push(new Balle(canvas));

  // 最初のクリック時にメッセージを非表示、リセットボタンを表示
  if (balles.length === 1) {
    if (message) message.style.display = "none";
    if (resetButton) resetButton.style.display = "block";
  }
});

// リセットボタンでボールを全削除＋メッセージを再表示
resetButton.addEventListener("click", () => {
  balles.length = 0; // ボールを空にする
  message.style.display = "block";
  resetButton.style.display = "none";
});

// アニメーションループ
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const b of balles) {
    b.update();
    b.draw();
  }
  requestAnimationFrame(animate);
}
animate();
