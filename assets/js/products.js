// Defining product cards container & array

let container = document.querySelector('#cards-container');
let cardList = [];

// Defining class & objects. Pushing objects to "cardList".

class Product {
  constructor(id, amount, type, name, description, price) {
    this.id = id;
    this.amount = amount;
    this.type = type;
    this.name = name;
    this.description = description;
    this.price = price;
  };
};

const cafe = new Product(0, 0, "infusiones", "cafe", "Café", 1.50);
const latte = new Product(0, 0, "infusiones", "latte", "Latte", 1.25);
const capuccino = new Product(0, 0, "infusiones", "capuccino", "Capuccino", 1.75);
const medialuna = new Product(0, 0, "snacks", "medialuna", "Medialuna", 1.00);
const tostado = new Product(0, 0, "snacks", "tostado", "Tostado de Jamón y Queso", 1.75);
const alfajor = new Product(0, 0, "snacks", "alfajor", "Alfajor artesanal", 0.75);
const cheesecake = new Product(0, 0, "pasteleria", "cheesecake", "Porción de Cheesecake", 3.25);
const selvaNegra = new Product(0, 0, "pasteleria", "selvaNegra", "Porción de Selva Negra", 3.00);
const lemonPie = new Product(0, 0, "pasteleria", "lemonPie", "Porción de Lemon Pie", 2.75);

cardList.push(cafe, latte, capuccino, medialuna, tostado, alfajor, cheesecake, selvaNegra, lemonPie);

// Generating cards on HTML

cardList.forEach((product, index) => {
  let div = document.createElement("div");
  div.className = `col ${product.type} fade-up`;
  div.innerHTML = `<div class="card mb-5 mx-auto" style="width: 18rem;">
                     <img src="../img/tienda/${product.name}.webp" class="card-img-top" alt="...">
                     <div class="card-body">
                      <h5 class="card-title">${product.description}</h5>
                      <p class="card-text">U$S ${product.price.toFixed(2).toString().replace(".", ",")}</p>
                      <div class="d-flex justify-content-around">
                        <div class="btn btn-custom button-scale agregar-button">Agregar</div>
                        <div class="d-none btn btn-custom btn-minus-plus button-scale subtract-button">-</div>
                        <div class="d-none fs-5 align-self-center amount-display">${product.amount}</div>
                        <div class="d-none btn btn-custom btn-minus-plus button-scale add-button">+</div>
                      </div>
                    </div>
                  </div>`;
  container.appendChild(div);

  let agregarButton = div.querySelector(".agregar-button");
  let subtractButton = div.querySelector(".subtract-button");
  let amountDisplay = div.querySelector(".amount-display");
  let addButton = div.querySelector(".add-button");

  // "Agregar" button
  agregarButton.addEventListener("click", () => {
    agregarButton.classList.add("d-none");
    subtractButton.classList.remove("d-none");
    amountDisplay.classList.remove("d-none");
    addButton.classList.remove("d-none");
    add(product);
    checkout();
    amountDisplay.innerText = `${product.amount}`;
  });

  // "Plus" button
  addButton.addEventListener("click", () => {
    add(product);
    amountDisplay.innerText = `${product.amount}`;
  });

  // "Minus" button
  subtractButton.addEventListener("click", () => {
    subtract(product);
    amountDisplay.innerText = `${product.amount}`;
    if (product.amount == 0) {
      subtractButton.classList.add("d-none");
      amountDisplay.classList.add("d-none");
      addButton.classList.add("d-none");
      agregarButton.classList.remove("d-none");
    };
  });
});