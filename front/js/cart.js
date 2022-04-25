let productId = new URL(window.location.href).searchParams.get("id");
let panier = JSON.parse(localStorage.getItem("produit"));                                                         // on recupere les donner dans le localstorage
let products;                                                                                                 // on declare une variable product
let product;
let prixTotal = 0;
let prixProduit = 0;
let panierAfficher = [];
const getProduct = async () => {                                                                              // on cree une constante pour obtenir les produits sur le site
    await fetch("http://localhost:3000/api/products/")                                                        // ajout des produits sur le site avec l'api en utilisant fetch
        .then((res) => res.json())                                                                                // reponse
        .then((JSON) => (products = JSON))                                                                        // on demande que les produits sont afficher en format json
        .catch((err) => console.log(err));                                                                        // pour afficher les erreurs si il y a des erreurs
    console.log(products);                                                                                      // on demande a afficher les produits dans la console

    const elementPanier = document.querySelector("#cart__items");                      // on cree une variable element panier puis on selectionne la div contenant la class cart items
    if (panier === null) {                                                             // si le panier est vide
        let panierVide;                                                                  // on declare une nouvelle variable pour le panier vide
        elementPanier.innerHTML = panierVide;                                            // on definit element panier = parent de panier vide
    } else {                                                                           // sinon
        panierAfficher = [];                                                             // on cree un nouveau tableau pour afficher le panier sur la page
        for (i = 0; i < panier.length; i++) {                                            // on cree une boucle qui sera repeter pour chaque nouveau element
            product = products.filter(prod => prod._id === panier[i].id);
            prixProduit = product[0].price;
            prixTotal = prixTotal + prixProduit;
            panierAfficher =                                                            // on dit que panier afficher = le tableau + le html avec des element pris dans l'api + localstorage
                panierAfficher +
                `
      <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
      <div class="cart__item__img">
        <img src="${product[0].imageUrl}" alt="Photographie d'un canapé">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${product[0].name}</h2>
          <p>${panier[i].color}</p>
          <p>${prixProduit} €</p>
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
        console.log("Prix total produit", prixTotal);
        if (i === panier.length) {                                                        // on ajoute les elements
            elementPanier.innerHTML = panierAfficher;
        }


        let supprimer = document.querySelectorAll(".deleteItem");                         // on declare une variable pour supprimer en selectionner la class du bouton supprimer
        console.log(supprimer);                                                           // on verifie si la variable et bien lier au bouton supprimer
        for (let q = 0; q < supprimer.length; q++){                                       // on cree une boucle
            supprimer[q].addEventListener("click", (event) =>{                             // on va mettre un add event listener pour le bouton supprimer
                event.preventDefault();                                                       // pour ne pas recharger la page
                let elementSupprimer = panier[q].id;                                          // on cree une variable qui sera supprimer en utilisant l'id
                let monFilter = {
                    id : panier[q].id,
                    color : panier[q].color
                };
                panier= panier.filter(function(item) {
                    for (var key in monFilter) {
                        if (item[key] != monFilter[key])
                            return true;
                    }
                    return false;
                });
                // panier = panier.filter(element => element.id !== elementSupprimer)            // on utilise la methode filter pour retirer l'element ou j'ai appuyer sur supprimer
                localStorage.setItem("produit" ,JSON.stringify(panier));                      // on met a jour la clee
                window.location.href = "cart.html";                                           // on actualise la page
            });
        }
    }
};

getProduct();