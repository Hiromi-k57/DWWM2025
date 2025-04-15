"use strict";

export class RatingStars extends HTMLElement
{
  constructor() 
  {
    super();
    this.starDiv = document.createElement("div");
    for (let i = 0; i < 5; i++) {
      const span = document.createElement("span");
      span.textContent = "☆"; // ☆★
      this.starDiv.append(span);
    }
    // this.addEventListener("mouseenter",this.toggle);
    // this.addEventListener("mouseleave", this.toggle);
    // this.addEventListener("click");
    this.append(this.starDiv);

    console.log(this.value, this.getAttribute("value"));
    changeColor()
  }

  changeColor()
  {
    const star = span;
    star.addEventListener('change',function(){
      
    })

  }
  
  
  

  
  // connectedCallBack(){}

  // static get observedAttributes ()
  // {
  //   return ['value'];
  // }

}

customElements.define("rating-stars", RatingStars);