import { arrCoffee } from "../variables/coffee.variable.js";
import { arrTea } from "../variables/tea.variable.js";
import { arrDessert } from "../variables/dessert.variable.js";

const categoryCoffee = document.querySelector(".menu__coffee");
const categoryTea = document.querySelector(".menu__tea");
const categoryDessert = document.querySelector(".menu__dessert");
let currentCategory = "coffee";
const container = document.querySelector(".menu__products");
container.innerHTML = "";
let cards = document.querySelectorAll(".menu-card:nth-child(n+5)");
const more = document.querySelector(".menu__more");

buttonSelected("coffee");

for (let i = 0; i < arrCoffee.length; i++) {
  const card = document.createElement("div");
  card.className = `menu-card`;
  card.innerHTML = `
        <img class="menu-card-img" src="${arrCoffee[i].img}" alt="menuCoffee">

                    <h2 class="menu-item">
                        ${arrCoffee[i].name}
                    </h2>

                    <h3 class="menu-description">
                        ${arrCoffee[i].description}
                    </h3>

                    <p class="menu-price">
                        $${arrCoffee[i].price}
                    </p>

        `;

  container.appendChild(card);
}

categoryCoffee.addEventListener("click", () => generateCoffee(currentCategory));
categoryTea.addEventListener("click", () => generateTea(currentCategory));
categoryDessert.addEventListener("click", () =>
  generateDessert(currentCategory),
);

more.addEventListener("click", () => moreProduct());

function generateTea(category) {
  if (category === "tea") {
    return;
  }

  container.innerHTML = "";

  buttonSelected("tea");

  currentCategory = `tea`;

  const innerElements = container.querySelectorAll("*");

  for (let i = 0; i < arrTea.length; i++) {
    const card = document.createElement("div");
    card.className = `menu-card`;
    card.innerHTML = `
            <img class="menu-card-img" src="${arrTea[i].img}" alt="menuCoffee">
    
                        <h2 class="menu-item">
                            ${arrTea[i].name}
                        </h2>
    
                        <h3 class="menu-description">
                            ${arrTea[i].description}
                        </h3>
    
                        <p class="menu-price">
                            $${arrTea[i].price}
                        </p>
    
            `;

    container.appendChild(card);
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

  container.innerHTML = "";

  buttonSelected("dessert");

  currentCategory = `dessert`;

  const innerElements = container.querySelectorAll("*");

  for (let i = 0; i < arrDessert.length; i++) {
    const card = document.createElement("div");
    card.className = `menu-card`;
    card.innerHTML = `
            <img class="menu-card-img" src="${arrDessert[i].img}" alt="menuCoffee">
    
                        <h2 class="menu-item">
                            ${arrDessert[i].name}
                        </h2>
    
                        <h3 class="menu-description">
                            ${arrDessert[i].description}
                        </h3>
    
                        <p class="menu-price">
                            $${arrDessert[i].price}
                        </p>
    
            `;

    container.appendChild(card);
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

  container.innerHTML = "";

  buttonSelected("coffee");

  currentCategory = `coffee`;

  const innerElements = container.querySelectorAll("*");

  for (let i = 0; i < arrCoffee.length; i++) {
    const card = document.createElement("div");
    card.className = `menu-card`;
    card.innerHTML = `
            <img class="menu-card-img" src="${arrCoffee[i].img}" alt="menuCoffee">
    
                        <h2 class="menu-item">
                            ${arrCoffee[i].name}
                        </h2>
    
                        <h3 class="menu-description">
                            ${arrCoffee[i].description}
                        </h3>
    
                        <p class="menu-price">
                            $${arrCoffee[i].price}
                        </p>
    
            `;

    container.appendChild(card);
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
    document.querySelector(`.menu__${category}`).classList.remove("menu-selected");
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
