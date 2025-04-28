"use strict";


document.querySelectorAll('.flip_card').forEach(card=>{
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
})
;
const textFromLeft = document.querySelectorAll(".textFromLeft");
const ovserverFromLeft = new IntersectionObserver(fromLeft,{rootMargin: "-30%"});

textFromLeft.forEach(text =>{
    ovserverFromLeft.observe(text)
}) 
/**
 * 
 * @param {IntersectionObserverEntry[]} entres 
 */
function fromLeft (entres)
{
    console.log(entres);
    
    entres.forEach((entree)=>{
        
        if(entree.isIntersecting){
            entree.target.classList.add("show")
        }
        else if(entree.rootBounds.top < entree.boundingClientRect.top){
            entree.target.classList.remove("show")
        }
    })
}