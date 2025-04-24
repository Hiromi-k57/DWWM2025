"use strict";

const productsDiv = document.getElementById("products");

let products = [];

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    products = data;

    data.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}">
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to cart</button>
      `;
      productsDiv.appendChild(div);
    });
  });

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1
    });
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert("Produit ajouté au panier !");
}
