"use strict";

export class DialogBox extends HTMLElement {
    constructor()
    {
        super()
        console.log("DialogBox constructor");
        
        const shadow = this.attachShadow({mode:"open"});
        const dialogTemplate = document.getElementById("DialogBox");
        const dialogFragment = dialogTemplate.content.cloneNode(true);
        shadow.append(dialogFragment);        

        const button = shadow.querySelector("button");
        button.textContent = "Fermer";
        button.addEventListener("click", () => {
            this.style.display= "none";
        });
    }


}
customElements.define("dialog-box", DialogBox);

