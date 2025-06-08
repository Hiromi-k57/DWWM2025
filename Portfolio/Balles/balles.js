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

