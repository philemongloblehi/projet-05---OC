panier = JSON.parse(localStorage.getItem("produit"));                              // on recupere les donner dans le localstorage

let productId = new URL(window.location.href).searchParams.get('id')

let product;                                                            // on declare une variable product
const getProduct = async () => {                                        // on cree une constante pour obtenir les produits sur le site
  await fetch('http://localhost:3000/api/products/')                    // ajout des produits sur le site grace a l'api avec fetch 
  .then(res => res.json())                                              // reponse
  .then(JSON => product = JSON)                                          
  .catch((err) => console.log(err));                                    // pour afficher les erreurs si il y a des erreurs
  console.log(product) 
}
getProduct();

const elementPanier = document.querySelector("#cart__items");                     // on cree une variable element panier 

if (panier === null) {                                                             // si le panier est vide                             
  let panierVide;                                                                  // on declare une nouvelle variable
  elementPanier.innerHTML = panierVide;                                           // on definit element panier = parent de panier vide
} else {                                                                          // sinon
   let panierAfficher = [];                                                      // on cree un tableau vide pour la page panier
   for (i = 0; i < panier.length; i++) {                                         // on cree une boucle qui sera repeter pour chaque nouveau element
    panierAfficher =
      panierAfficher +
      `
                <div class="cart__item__img">
                  <img src="" alt="">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${panier[i].id}</h2>
                    <p>${panier[i].color}</p>
                    <p>${panier[i].price}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[i].quantity}">
                      </div>
                      <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                      </div>
                    </div>
                  </div>
                </article> -->
    `;
  }
  if (i === panier.length)
  {
    elementPanier.innerHTML = panierAfficher
  }
}

// modifier quantiter
let itemQuantity = document.querySelector(itemQuantity);


// pour supprimer
// let supprimer = document.querySelector(deleteItem);   // nous creeons la variable
// for (o = 0; 0 < supprimer.length; o++){               // nous creeons une boucle
// supprimer.addEventListener("click" , (event) =>{      // nous ajoutons un addeventlistener

//  }
// }
