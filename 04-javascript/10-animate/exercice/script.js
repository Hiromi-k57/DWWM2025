"use strict";
const p_rightToLeft =document.getElementsByClassName("p_rightToLeft")
const p_leftToRight =document.getElementsByClassName('p_leftToRight')
console.log(p_leftToRight,p_rightToLeft);

const keyframes = new KeyframeEffect(
    p_rightToLeft[0], 
    [
        {transform: "translateX(100%)"},
        {transform: "translate(0)"}
    ],
    {duration: 2000, fill: "forwards"}
);
const righToLeft = new Animation(keyframes, document.timeline);
righToLeft.play();


const keyframes2 = new KeyframeEffect(
    p_leftToRight[0],
    [
        {transform: "translateX(-100%)"},
        {transform: "translate(0)"}
    ],
    {duration: 2000, fill: "forwards"}
);
const leftToRight = new Animation(keyframes2, document.timeline);
leftToRight.play();


const keyframes3 = new KeyframeEffect(
    p_rightToLeft[1], 
    [
        {transform: "translateX(100%)"},
        {transform: "translate(0)"}
    ],
    {duration: 2000, fill: "forwards"}
);
const righToLeft2 = new Animation(keyframes3, document.timeline);
righToLeft2.play();


const keyframes4 = new KeyframeEffect(
    p_leftToRight[1],
    [
        {transform: "translateX(-100%)"},
        {transform: "translate(0%)"}
    ],
    {duration: 2000, fill: "forwards"}
);
const leftToRight2 = new Animation(keyframes4, document.timeline);
leftToRight2.play();