import paint from "./exemple/paint.js";
import Slider from "./exemple/Slider-v2.js";
// import justePrix from "./exemple/justprix.js";

// 初期状態で「justePrix」を表示
// document.body.innerHTML = ''; 
// document.body.appendChild(justePrix.create());

const appliDiv = document.querySelector(".appli");
const select = document.querySelector("#appli");

select.addEventListener("change", () => {
    // appliDiv.innerHTML = ""; // 前の要素をクリア

    switch(select.value) {
        // case "justePrix":
        //     appliDiv.append(justePrix.create());
        //     break;
        case "paint":
            appliDiv.append(paint.create());
            break;
        case "slider":
            const imgs = [
                "./exemple/img/slider1.jpg",
                "./exemple/img/slider2.jpg",
                "./exemple/img/slider3.jpg",
            ]; // 実際の画像パスに合わせて修正
            appliDiv.append(Slider.create(imgs, true));
            break;
    }
});


// function test(){
//     console.log(this);
    
// }

// window.addEventListener("click", test.bind(appliDiv));