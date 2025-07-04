"use strict";

// import Paint  from "./paint.js";
import Slider from "./Slider-v2.js";
// import justePrix from "./justprix.js";

const appliDiv = document.querySelector(".appli");
const select = document.querySelector("#appli");

select.addEventListener("change", () => {
//     appliDiv.innerHTML = ""; // 前の要素をクリア

    switch(select.value) {
        // case "justePrix":
        //     appliDiv.append(justePrix.create());
        //     break;
        case "paint":
            appliDiv.append(Paint.create());
            break;
        case "slider":
            const imgs = [
                "./img/slider1.jpg",
                "./img/slider2.jpg",
                "./img/slider3.jpg",
            ]; 
            appliDiv.append(Slider.create(imgs, true));
            break;
    }
});


// function test(){
//     console.log(this);
    
// }

// window.addEventListener("click", test.bind(appliDiv));