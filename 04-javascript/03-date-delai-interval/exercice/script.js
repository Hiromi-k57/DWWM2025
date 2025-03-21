"use strict"

const mainTime = document.querySelectorAll("div.clock div");
console.log(mainTime);



let idInterval = setInterval(timer, 1000);
function timer()
{
    const date = new Date();
    const second = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    const second2 = 360 / 60 * second
    console.log(second2, minutes, hours);
    mainTime[2].style.rotate = second2 +"deg";
}

