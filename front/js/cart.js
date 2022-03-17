let productId = new URL(window.location.href).searchParams.get('id')
panier = JSON.parse(localStorage.getItem("produit"));                     // on recupere les donner dans le localstorage
  let product;                                                            // on declare une variable product
const getProduct = async () => {                                        // on cree une constante pour obtenir les produits sur le site
  await fetch('http://localhost:3000/api/products/')                    // ajout des produits sur le site grace a l'api avec fetch 
  .then(res => res.json())                                              // reponse
  .then(JSON => product = JSON)                                          
  .catch((err) => console.log(err));                                    // pour afficher les erreurs si il y a des erreurs
  console.log(product) 
}

getProduct();
const showProduct =  () => {            
   getProduct();                                              // en attente du produit                   
  let picture = document.querySelector("cart__item__img")               // nous utilisons le DOM pour recuperer un element dans le html puis pour le donner une nouvelle variable
  picture.setAttribute('src', product.imageUrl)                   // nous mettons a jour l'attribut src par product.imageUrl
  pictureAlt.setAttribute('alt', product.altTxt)                     // nous mettons a jour l'attribut alt par product.altTxt
  picture.appendChild(imageUrl)                                    // nous disons que picture est l'enfant de imageUrl

  let name = document.getElementById('cart__item__content__description')                      // nous donnons a title une nouvelle variable 
  name.innerHTML = product.name;                                   

  let price = document.getElementById('cart__item__content')                     // nous donnons une nouvelle variable a price (ou pas)
  price.innerHTML = product.price;
  
} 

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
      <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
      <div class="cart__item__img">
        <img src="${panier[i].imageUrl}" alt="Photographie d'un canapé">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${panier[i].name}</h2>
          <p>${panier[i].color}</p>
          <p>${panier[i].price} €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[i].quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
    `;
  }
  if (i === panier.length)
  {
    elementPanier.innerHTML = panierAfficher
  }
}


// modifier quantiter
let itemQuantity = document.querySelector("itemQuantity");

