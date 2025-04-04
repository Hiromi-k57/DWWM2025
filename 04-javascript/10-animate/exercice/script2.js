"use strict";
const textToAnimate = document.querySelectorAll(".p_rightToLeft, .p_leftToRight")

textToAnimate.forEach(animateText);
/**
 * Anime nos éléments textuels.
 * @param {HTMLElement} text élément à animer
 */
function animateText(text)
{
    const translate = text.classList.contains("p_rightToLeft")?"100%":"-100%"; // ?どっち?　もし真なら"100%"　:sinonもし違えば　"-100%"
    const keyframes = new KeyframeEffect(
        text, 
        [
            {transform: `translateX(${translate})`},
            {transform: "translate(0)"}
        ],
        {duration: 2000, fill: "forwards"}
    );
    const animation = new Animation(keyframes, document.timeline);
    animation.play();
}