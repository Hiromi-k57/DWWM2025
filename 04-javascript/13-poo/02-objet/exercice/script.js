"use strict";
import { slider, startSlider } from "./exemple/slider.js";
const imgs = ["./img/candy-1.jpg","./img/candy-2.jpg","./img/candy-3.jpg","./img/candy-4.jpg",];



console.log(imgs);

const select = document.getElementById("appli");
const container = document.getElementsByClassName("appli");
console.log(select, container);

select.addEventListener('change',() =>{
    container.innerHTML ='';

    let selectedProjet;
    
    switch(selectProjet, value){
        case 'justePrix' :
            selectedProjet = justePrix;
            break;
        case 'paint' :
            selectedProjet = paint;
            break;
        case 'slider' :
            selectedProjet = slider;
        
    }
    if (selectProjet && selectedProjet.create){
        const element =selectedProjet.create();
        container.appendChild(element);
    }
});