import {arrCoffee} from './variables/variableCoffee.js';
import {arrTea} from './variables/variableTea.js';
import {arrDessert} from './variables/variableDessert.js';

const categoryCoffee = document.querySelector(".menu-coffee");
const categoryTea = document.querySelector(".menu-tea");
const categoryDessert = document.querySelector(".menu-dessert");

document.querySelector(".menu-coffee").classList.toggle("menu-selected");
document.querySelector(".menu-coffee-active").classList.toggle("menu-active-selected");
document.querySelector(".menu-coffee-categories").classList.toggle("menu-categories-selected");

const container = document.querySelector('.menu-products');
container.innerHTML = '';

for(let i = 0; i < arrCoffee.length; i++) {
    const card = document.createElement('div');
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



let categoryNow = "coffee";

categoryCoffee.addEventListener("click", () => coffee(categoryNow));
categoryTea.addEventListener("click", () => tea(categoryNow));
categoryDessert.addEventListener("click", () => dessert(categoryNow));



function tea(category) {
    if (category === "tea") {return;}

    container.innerHTML = '';

    document.querySelector(`.menu-${category}`).classList.toggle("menu-selected");
    document.querySelector(`.menu-${category}-active`).classList.toggle("menu-active-selected");
    document.querySelector(`.menu-${category}-categories`).classList.toggle("menu-categories-selected");
    document.querySelector(`.menu-tea`).classList.toggle("menu-selected");
    document.querySelector(`.menu-tea-active`).classList.toggle("menu-active-selected");
    document.querySelector(`.menu-tea-categories`).classList.toggle("menu-categories-selected");

    categoryNow = "tea";

    const innerElements = container.querySelectorAll('*');

    for(let i = 0; i < arrTea.length; i++) {
        const card = document.createElement('div');
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

}

function dessert(category) {
    if (category === "dessert") {return;}

    container.innerHTML = '';

    document.querySelector(`.menu-${category}`).classList.toggle("menu-selected");
    document.querySelector(`.menu-${category}-active`).classList.toggle("menu-active-selected");
    document.querySelector(`.menu-${category}-categories`).classList.toggle("menu-categories-selected");
    document.querySelector(`.menu-dessert`).classList.toggle("menu-selected");
    document.querySelector(`.menu-dessert-active`).classList.toggle("menu-active-selected");
    document.querySelector(`.menu-dessert-categories`).classList.toggle("menu-categories-selected");

    categoryNow = "dessert";

    const innerElements = container.querySelectorAll('*');

    for(let i = 0; i < arrDessert.length; i++) {
        const card = document.createElement('div');
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
    const more = document.querySelector(".menu-more");

    more.addEventListener("click", () => moreProduct());

    const cards = document.querySelectorAll('.menu-card:nth-child(n+5)');


    function moreProduct (){
        cards.forEach(card => {
            card.style.display = "flex";
        });
        

    }
    
}

function coffee(category) {
    if (category === "coffee") {return;}

    container.innerHTML = '';

    document.querySelector(`.menu-${category}`).classList.toggle("menu-selected");
    document.querySelector(`.menu-${category}-active`).classList.toggle("menu-active-selected");
    document.querySelector(`.menu-${category}-categories`).classList.toggle("menu-categories-selected");
    document.querySelector(`.menu-coffee`).classList.toggle("menu-selected");
    document.querySelector(`.menu-coffee-active`).classList.toggle("menu-active-selected");
    document.querySelector(`.menu-coffee-categories`).classList.toggle("menu-categories-selected");

    categoryNow = "coffee";

    const innerElements = container.querySelectorAll('*');

    for(let i = 0; i < arrCoffee.length; i++) {
        const card = document.createElement('div');
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
    const more = document.querySelector(".menu-more");

    more.addEventListener("click", () => moreProduct());

    const cards = document.querySelectorAll('.menu-card:nth-child(n+5)');


    function moreProduct (){
        cards.forEach(card => {
            card.style.display = "flex";
        });
        

    }
    
}