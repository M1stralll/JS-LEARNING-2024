const arrFavotiteCoffe = [
    {
        img: "/coffee-house/images/favorite/coffee-slider-1.png",
        name: "S’mores Frappuccino",
        description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
        price: "$5.50",
    },
    {
        img: "/coffee-house/images/favorite/coffee-slider-2.png",
        name: "Caramel Macchiato",
        description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with the addition of delicate cream under whipped thick foam.",
        price: "$5.00",
    },
    {
        img: "/coffee-house/images/favorite/coffee-slider-3.png",
        name: "Ice coffee",
        description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
        price: "$4.50",
    },
];

let coffeeNumber = 0;

const container = document.querySelector('.favorite-coffeee');
container.innerHTML = '';

function card(slot){
    
   
const coffeCard = document.createElement('div');
coffeCard.className = `favorite-coffe`;
coffeCard.innerHTML = `
            <img class="favorite-picture" src="${arrFavotiteCoffe[slot].img}" alt="favoriteCoffe">

                        <h3 class="favorite-name">
                            ${arrFavotiteCoffe[slot].name}
                        </h3>

                        <p class="favorite-description">
                            ${arrFavotiteCoffe[slot].description}
                        </p>

                        <h3 class="favorite-price">
                            ${arrFavotiteCoffe[slot].price}
                        </h3>
        `;

container.appendChild(coffeCard); 
}

card(coffeeNumber);

const arrowLeft = document.querySelector(".favorite-arrow-left");
const arrowRight = document.querySelector(".favorite-arrow-right");

        
arrowLeft.addEventListener("click", () => switchOrder("left"));
arrowRight.addEventListener("click", () => switchOrder("right"));

function switchOrder(side) {
    if (side === "right") {
        
    if(coffeeNumber === 2 ) { coffeeNumber = -1 };
    coffeeNumber = coffeeNumber + 1;

    document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave");

    setTimeout(() => {

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave");

        
        document.getElementsByClassName('favorite-name')[0].textContent = arrFavotiteCoffe[coffeeNumber].name;
        document.getElementsByClassName('favorite-description')[0].textContent = arrFavotiteCoffe[coffeeNumber].description;
        document.getElementsByClassName('favorite-price')[0].textContent = arrFavotiteCoffe[coffeeNumber].price;
        document.getElementsByClassName('favorite-picture')[0].src = arrFavotiteCoffe[coffeeNumber].img;

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active");
    }, 700);

    setTimeout(() => {

       
        
        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active");

    }, 1400);
    } else {

        if(coffeeNumber === 0 ) { coffeeNumber = 3 };
    coffeeNumber = coffeeNumber - 1;

    document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave-left");

    setTimeout(() => {

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave-left");

        
        document.getElementsByClassName('favorite-name')[0].textContent = arrFavotiteCoffe[coffeeNumber].name;
        document.getElementsByClassName('favorite-description')[0].textContent = arrFavotiteCoffe[coffeeNumber].description;
        document.getElementsByClassName('favorite-price')[0].textContent = arrFavotiteCoffe[coffeeNumber].price;
        document.getElementsByClassName('favorite-picture')[0].src = arrFavotiteCoffe[coffeeNumber].img;

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active-left");
    }, 700);

    setTimeout(() => {

       
        
        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active-left");

    }, 1400);
    }

}



function buttonslider (){
    
}