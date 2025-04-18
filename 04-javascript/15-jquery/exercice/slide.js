"use strict";

let idInterval;
const slider = document.querySelector("#slider");
const btnPrev = slider.querySelector("a.control_prev");
const btnNext = slider.querySelector("a.control_next");
const ul = slider.querySelector("ul");  
const li = ul.querySelectorAll("li");
const liOdd = slider.querySelectorAll("ul li:nth-child(odd)");
const checkbox = document.querySelector("#checkbox");


console.log(btnNext,btnPrev,checkbox,slider,ul,li,liOdd);
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOMは完全に読み込まれ解釈されました"); 
    
    liOdd.forEach(li => li.style.background = "#aaa");
    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            idInterval = setInterval(moveRight, 1500);
        }
        else {
            clearInterval(idInterval);
        }
    
    })

    const slideCount = ul.querySelectorAll("li").length;
    const slideWidth = ul.querySelector("li").offsetWidth;
    const slideHeight = ul.querySelector("li").offsetHeight;
    const sliderUlWidth = slideCount * slideWidth;
    slider.style.width = slideWidth + "px";
    slider.style.height = slideHeight + "px";
    ul.style.width = sliderUlWidth + "px";
    ul.style.marginLeft = -slideWidth + "px";

    // ul.querySelector("li:last-child").prependTo(ul);
    ul.prepend(ul.querySelector("li:last-child"));


    function moveLeft() {
        ul.animate({
            left:  ['0',-slideWidth +"px"]
        }, {
            // left: -slideWidth + "px"
            // left: 0 + "px"   
            duration: 200,
            fill: "forwards"
        }, function () {
            ul.prepend(ul.querySelector("li:last-child"));
            ul.style.left = "";
        });
    };
    function moveRight() {
        ul.animate({
            left: ['0',-slideWidth +"px"]
        }, {
            duration: 200,
            fill: "forwards"
        }, function () {
            console.log("coucou");
            
            ul.prepend(ul.querySelector("li:last-child"));
            ul.style.left = "";
        });
    };

    
    btnPrev.addEventListener("click", moveLeft);
    btnNext.addEventListener("click", moveRight);


  });