"use strict";

const hamburger = document.querySelector('.hamburger')
console.log(hamburger);

hamburger.addEventListener("click", function()
{
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
})
