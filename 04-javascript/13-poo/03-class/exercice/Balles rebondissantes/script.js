import Balle from "./balles.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const balles = [];

// キャンバスのサイズを画面に合わせる（最初とリサイズ時）
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// クリックで新しいボールを追加
canvas.addEventListener("click", () => {
  balles.push(new Balle(canvas));
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
