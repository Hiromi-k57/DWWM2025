"use strict";

export class SuperBalise extends HTMLAnchorElement
{
    constructor() 
    {
        super();
       
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.textContent = 'Météo à Paris';
        div.appendChild(h1);
        document.body.appendChild(div);
      }

    //   initStyle()
    //   {
    //     const style = document.createElement("style");
    //     this.shadowRoot.append(style);
    //     style.textContent = /* CSS */
    //     `
    //     :host{
    //         font-weight: bold;
    //         color: red;
    //         position: relative;
    //     }
    //     div
    //     {
    //         osition: absolute;
    //         border: 2px solid blue;
    //         border-radius: 5px;
    //         background-color: lightblue;
            
    //     }
    //     `;
    // }
}


customElements.define("super-balise", SuperBalise);