import { arrCoffee } from "../variables/coffee.variable.js";
import { arrTea } from "../variables/tea.variable.js";
import { arrDessert } from "../variables/dessert.variable.js";
import { createPopup } from './popup.js';

const categoryCoffee = document.querySelector(".menu__coffee");
const categoryTea = document.querySelector(".menu__tea");
const categoryDessert = document.querySelector(".menu__dessert");
let currentCategory = "coffee";
const container = document.querySelector(".menu__products");
let cards = document.querySelectorAll(".menu-card:nth-child(n+5)");
const more = document.querySelector(".menu__more");

generateCoffee();

for (let i = 0; i < arrCoffee.length; i++) {
  const card = createDishCard(arrCoffee[i]);
    container.appendChild(card);
    card.addEventListener("click", () => {
      createPopup(arrCoffee[i]);
    })
}

categoryCoffee.addEventListener("click", () => generateCoffee());
categoryTea.addEventListener("click", () => generateTea());
categoryDessert.addEventListener("click", () =>
  generateDessert()
);

more.addEventListener("click", () => moreProduct());

function generateTea(category) {
  if (category === "tea") {
    return;
  }

  removeDishCard();

  selectCategoryButton("tea");

  currentCategory = `tea`;

  for (let i = 0; i < arrTea.length; i++) {
    const card = createDishCard(arrTea[i]);
    container.appendChild(card);
    card.addEventListener("click", () => {
      createPopup(arrTea[i]);
    })
  }

  more.classList.add("menu_more-display")
}

function generateDessert(category) {
  if (category === "dessert") {
    return;
  }

  let sizeWindow = window.matchMedia("(max-width: 1439px)");

  if (sizeWindow.matches) {
    more.classList.remove("menu_more-display");
  } else {
    more.classList.add("menu_more-display")
  }

  removeDishCard();

  selectCategoryButton("dessert");

  currentCategory = `dessert`;

  for (let i = 0; i < arrDessert.length; i++) {
    const card = createDishCard(arrDessert[i]);
    container.appendChild(card);
    card.addEventListener("click", () => {
      createPopup(arrDessert[i]);
    })
  }

  cards = document.querySelectorAll(".menu-card:nth-child(n+5)");

  more.addEventListener("click", () => moreProduct());
}

function generateCoffee() {

  let sizeWindow = window.matchMedia("(max-width: 1439px)");

  if (sizeWindow.matches == true) {
    more.classList.remove("menu_more-display")
  } else {
    more.classList.add("menu_more-display")
  }

  removeDishCard();

  selectCategoryButton("coffee");

  currentCategory = `coffee`;

  for (let i = 0; i < arrCoffee.length; i++) {
    const card = createDishCard(arrCoffee[i]);
    container.appendChild(card);
    card.addEventListener("click", () => {
      createPopup(arrCoffee[i]);
    })
  }

  cards = document.querySelectorAll(".menu-card:nth-child(n+5)");

  more.addEventListener("click", () => moreProduct());
}

function moreProduct() {
  cards.forEach((card) => {
    card.style.display = "flex";
  });
  more.classList.add("menu_more-display")
}

function selectCategoryButton(product) {

  document.querySelector('.menu__buttons').querySelectorAll("button.menu-selected").forEach((child) => {
    child.classList.remove("menu-selected");
  });


  document.querySelector(`.menu__${product}`).classList.add("menu-selected");
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
