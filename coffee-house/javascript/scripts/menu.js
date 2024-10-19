import { arrCoffee } from "../variables/coffee.variable.js";
import { arrTea } from "../variables/tea.variable.js";
import { arrDessert } from "../variables/dessert.variable.js";

const categoryCoffee = document.querySelector(".menu__coffee");
const categoryTea = document.querySelector(".menu__tea");
const categoryDessert = document.querySelector(".menu__dessert");
let currentCategory = "coffee";
const container = document.querySelector(".menu__products");
let cards = document.querySelectorAll(".menu-card:nth-child(n+5)");
const more = document.querySelector(".menu__more");

buttonSelected("coffee");

for (let i = 0; i < arrCoffee.length; i++) {
  container.appendChild(createDishCard(arrCoffee[i]));
}

categoryCoffee.addEventListener("click", () => generateCoffee(currentCategory));
categoryTea.addEventListener("click", () => generateTea(currentCategory));
categoryDessert.addEventListener("click", () =>
  generateDessert(currentCategory)
);

more.addEventListener("click", () => moreProduct());

function generateTea(category) {
  if (category === "tea") {
    return;
  }

  removeDishCard();

  buttonSelected("tea");

  currentCategory = `tea`;

  for (let i = 0; i < arrTea.length; i++) {
    container.appendChild(createDishCard(arrTea[i]));
  }

  more.style.display = "none";
}

function generateDessert(category) {
  if (category === "dessert") {
    return;
  }

  let sizeWindow = window.matchMedia("(max-width: 1439px)");

  if (sizeWindow.matches == true) {
    more.style.display = "flex";
  } else {
    more.style.display = "none";
  }

  removeDishCard();

  buttonSelected("dessert");

  currentCategory = `dessert`;

  for (let i = 0; i < arrDessert.length; i++) {
    container.appendChild(createDishCard(arrDessert[i]));
  }

  cards = document.querySelectorAll(".menu-card:nth-child(n+5)");

  more.addEventListener("click", () => moreProduct());
}

function generateCoffee(category) {
  if (category === "coffee") {
    return;
  }

  let sizeWindow = window.matchMedia("(max-width: 1439px)");

  if (sizeWindow.matches == true) {
    more.style.display = "flex";
  } else {
    more.style.display = "none";
  }

  removeDishCard();

  buttonSelected("coffee");

  currentCategory = `coffee`;

  for (let i = 0; i < arrCoffee.length; i++) {
    container.appendChild(createDishCard(arrCoffee[i]));
  }

  cards = document.querySelectorAll(".menu-card:nth-child(n+5)");

  more.addEventListener("click", () => moreProduct());
}

function moreProduct() {
  cards.forEach((card) => {
    card.style.display = "flex";
  });
  more.style.display = "none";
}

function buttonSelected(product) {
  const categories = ["coffee", "tea", "dessert"];

  categories.forEach((category) => {
    document
      .querySelector(`.menu__${category}`)
      .classList.remove("menu-selected");
    document
      .querySelector(`.menu__${category}-active`)
      .classList.remove("menu-active-selected");
    document
      .querySelector(`.menu__${category}-categories`)
      .classList.remove("menu-categories-selected");
  });
  document.querySelector(`.menu__${product}`).classList.toggle("menu-selected");
  document
    .querySelector(`.menu__${product}-active`)
    .classList.toggle("menu-active-selected");
  document
    .querySelector(`.menu__${product}-categories`)
    .classList.toggle("menu-categories-selected");
}

function createDishCard(item) {
  const card = document.createElement("div");
  card.className = "menu-card";

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", item.img);
  cardImg.setAttribute("alt", "Product");
  cardImg.classList.add("menu-card-img");

  const cardName = document.createElement("h2");
  cardName.classList.add("menu-item");
  cardName.textContent = item.name;

  const cardDescription = document.createElement("h3");
  cardDescription.classList.add("menu-description");
  cardDescription.textContent = item.description;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("menu-price");
  cardPrice.textContent = `$${item.price}`;

  card.appendChild(cardImg);
  card.appendChild(cardName);
  card.appendChild(cardDescription);
  card.appendChild(cardPrice);

  return card;
}

function removeDishCard() {
  container.replaceChildren();
}
