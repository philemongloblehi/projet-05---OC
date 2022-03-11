let products;
const fetchProduct = async () => {
  await fetch('http://localhost:3000/api/products')
  .then(res => res.json())
  .then(JSON => products = JSON)
  .catch((err) => console.log(err));
  console.log(products)
  }
fetchProduct();

const showProduct = async () => {
  await fetchProduct();
  for (let i = 0; i < products.length; i++) {

  let items = document.getElementById("items")
  let link = document.createElement('a')
  link.setAttribute('href', './product.html?id=' + products[i]._id)
  items.appendChild(link)

  let article = document.createElement('article')
  link.appendChild(article)

  let picture = document.createElement('img')
  picture.setAttribute('src', products[i].imageUrl)
  picture.setAttribute('alt', products[i].altTxt)
  article.appendChild(picture)

  let name = document.createElement('h3')
  name.innerHTML = products[i].name;
  article.appendChild(name)

  let description = document.createElement('p')
  description.innerHTML = products[i].description;
  article.appendChild(description)
  } 
}
showProduct();


