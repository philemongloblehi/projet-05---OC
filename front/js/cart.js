panier = JSON.parse(localStorage.getItem("produit"));

let elementPanier = document.querySelector("cart__item");

if (panier === null) {
  // si le panier est vide
  let panierVide;
  elementPanier.innerHTML = panierVide;
} else {
  // sinon
  // produit a afficher
  console.log("je suis pas vide");
  let panierAfficher = [];

  for (i = 0; i < panier.length; i++) {
    panierAfficher =
      panierAfficher +
      `
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${panier[i].name}</h2>
                    <p>${panier[i].quantity}</p>
                    <p>${panier[i].price}€</p>
                  </div>
    `;
  }
  if (i === panier.length);
  {
    elementPanier.innerHTML = panierAfficher;
  }
}
