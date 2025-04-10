"use strict"

// const flip_card = document.getElementsByClassName('flip_card');
// const compétence_bg_flip = document.getElementsByClassName('compétence_bg_flip');
// const p_card_front= document.getElementsByClassName('p_card_front');
// const p_card_back = document.getElementsByClassName('p_card_back');

// console.log(flip_card,compétence_bg_flip,p_card_front, p_card_back);



document.querySelectorAll('.flip_card').forEach(card=>{
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
})