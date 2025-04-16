"use strict";

export class ProductCard extends HTMLElement  {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
    }
    
    //カスタム要素が DOM に追加されたときに自動で呼ばれるメソッドで、この中のコードは、要素が画面に追加された瞬間に実行される！
    connectedCallback() {
      const name = this.getAttribute('name');
      const description = this.getAttribute('description');
      const price = this.getAttribute('price');
      const image = this.getAttribute('image');
  
      //attachShadow(...) を実行したあとは、this.shadowRootにShadowDOM の参照が格納される
      this.shadowRoot.innerHTML = `
        <style>
          .card {
            font-family: Arial, sans-serif;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 1em;
            width: 250px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
          }
          img {
            width: 100%;
            border-radius: 4px;
            
            
          }
          .name {
            font-size: 1.2em;
            font-weight: bold;
            margin: 0.5em 0 0.2em;
          }
          .desc {
            font-size: 0.9em;
            color: #666;
            margin-bottom: 0.5em;
          }
          .price {
            font-size: 1.1em;
            color: #009578;
            margin-bottom: 1em;
          }
          button {
            background-color: #009578;
            color: white;
            border: none;
            padding: 0.5em 1em;
            border-radius: 4px;
            cursor: pointer;
          }
        </style>
        <div class="card">
          <img src="${image}" alt="${name}">
          <div class="name">${name}</div>
          <div class="desc">${description}</div>
          <div class="price">${price} €</div>
          <button>Ajouter au panier</button>
        </div>
      `;
  
    //   this.shadowRoot.querySelector('button').addEventListener('click', () => {
    //     this.dispatchEvent(new CustomEvent('add-to-cart', {
    //       detail: {
    //         name,
    //         description,
    //         price,
    //         image
    //       },
    //       bubbles: true,
    //       composed: true
    //     }));
    //   });
    }
  }
  
  customElements.define('product-card', ProductCard);
  