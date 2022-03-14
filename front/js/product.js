let productId = new URL(window.location.href).searchParams.get('id')    // on recupere l'id grace au lien

let product;                                                            // on declare une variable product
const getProduct = async () => {                                        // on cree une constante pour obtenir les produits sur le site
  await fetch('http://localhost:3000/api/products/' + productId)        // ajout des produits sur le site grace a l'api avec fetch 
  .then(res => res.json())                                              // 
  .then(JSON => product = JSON)                                         //
  .catch((err) => console.log(err));                                    // pour afficher les erreurs si il y a des erreurs
  console.log(product)
  }

const showProduct = async () => {            
  await getProduct();                                              // en attente du produit                   
  let picture = document.querySelector(".item__img")               // nous utilisons le DOM pour recuperer un element dans le html puis pour le donner une nouvelle variable
  let imageUrl = document.createElement('img')                     // nous utilisons le DOM pour recuperer un element dans le html puis pour le donner une nouvelle variable
  imageUrl.setAttribute('src', product.imageUrl)                   // nous mettons a jour l'attribut src par product.imageUrl
  imageUrl.setAttribute('alt', product.altTxt)                     // nous mettons a jour l'attribut alt par product.altTxt
  picture.appendChild(imageUrl)                                    // nous disons que picture est l'enfant de imageUrl

  let name = document.getElementById('title')                      // nous donnons a title une nouvelle variable 
  name.innerHTML = product.name;                                   

  let price = document.getElementById('price')                     // nous donnons une nouvelle variable a price (ou pas)
  price.innerHTML = product.price;

  let description = document.getElementById('description')         // nous donnons une nouvelle variable a price (ou pas)
  description.innerHTML = product.description;

  for (let i = 0; i < product.colors.length; i++) {               // on dit que i = 0 est que product.colors.length doit etre supperieur a 0 on met i++ pour dire qu'il faudra ajouter 1
  let colors = document.getElementById('colors')                  // nous donnons une nouvelle variable a colors (ou pas)
  let color = document.createElement('option')                    // nous donnons une nouvelle variable a option
  color.innerHTML = product.colors[i]                              
  colors.appendChild(color)                                       
  }

  for (let i = 0; i < product.quantity; i++) {                    // on dit que i = 0 est que product.quantity.length doit etre supperieur a 0 on met i++ pour dire qu'il faudra ajouter 1
    let quantity = document.getElementById('quantity')            // nous donnons une nouvelle variable a quantity (ou pas)
    quantity.setAttribute('value', product.quantity[i])
    quantity.innerHTML = product.quantity[i]
    quantity.appendChild(quantity)
    }

}
let panier;                                                            // je cree la variable panier
let optionProduit;                                                     // je cree la variable option produit
let color = document.getElementById('colors');

function stockagePanier(panier) {                                      //creation de la clé avec les info 
  localStorage.setItem("panier" ,JSON.stringify(panier));
}


const boutonPanier = document.getElementById('addToCart');             // la je selectionne l'id dans le html
boutonPanier.addEventListener("click" , function(e) {                  // la quand je clique sur le btn il devra ajouter le produit dans le panier
   optionProduit = {                                                   // on recupere les option choisi par l'utilisateur 
    id: product.name,                                                     // id du produit
    
    color : color.value,                                               // couleur du produit 
    quantity : quantity.value,                                         // la quantiter du produit
  }
  panier = JSON.parse(localStorage.getItem("produit"));                             
  if (panier){                                                         // si panier = true ( vrai ) donc le panier existe vraiment
    panier.push(optionProduit);                                        // on pushera les nouvelles info dans le localstorage                               
    localStorage.setItem("produit" ,JSON.stringify(panier));           // nous envoyons les nouveaux produit dans le local storage avec la meme cle
  }else {                                                              // sinon
    panier = [];                                                       // nous créerons un panier 
    panier.push(optionProduit);                                        // puis nous ajoutons les produits selectionner avec option produit
    localStorage.setItem("produit" ,JSON.stringify(panier));           // nous créeons une cle pour le local storage
  }
})





showProduct();