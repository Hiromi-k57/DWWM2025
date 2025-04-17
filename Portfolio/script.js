"use strict";


document.querySelectorAll('.flip_card').forEach(card=>{
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
})