panier = JSON.parse(localStorage.getItem("produit"));

const elementPanier = document.querySelector('cart__items');

if(panier === null){            // si le panier est vide
  console.log("je suis vide");
}else{                          // sinon
  elementPanier.localStorage
}