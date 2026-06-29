// Kids Master - app.js

const products = [
  {
    id: 1,
    name: "Remote Control Car",
    price: 799,
    image: "https://via.placeholder.com/250x250?text=Toy+Car"
  },
  {
    id: 2,
    name: "Teddy Bear",
    price: 499,
    image: "https://via.placeholder.com/250x250?text=Teddy+Bear"
  },
  {
    id: 3,
    name: "Baby Feeding Bottle",
    price: 299,
    image: "https://via.placeholder.com/250x250?text=Feeding+Bottle"
  },
  {
    id: 4,
    name: "Baby Diapers Pack",
    price: 599,
    image: "https://via.placeholder.com/250x250?text=Diapers"
  },
  {
    id: 5,
    name: "Kids School Bag",
    price: 999,
    image: "https://via.placeholder.com/250x250?text=School+Bag"
  },
  {
    id: 6,
    name: "Baby Gift Set",
    price: 1199,
    image: "https://via.placeholder.com/250x250?text=Gift+Set"
  }
];

const productContainer = document.getElementById("products");

function showProducts(list) {
  if (!productContainer) return;

  productContainer.innerHTML = "";

  list.forEach(product => {
    productContainer.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>

        <a class="buy-btn"
        href="https://wa.me/919911068912?text=Hi%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}"
        target="_blank">
        Buy on WhatsApp
        </a>
      </div>
    `;
  });
}

showProducts(products);

// Search

const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", () => {
    const value = search.value.toLowerCase();

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value)
    );

    showProducts(filtered);
  });
}
