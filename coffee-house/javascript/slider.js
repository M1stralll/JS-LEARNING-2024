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

let coffeeNumber = -1;

const container = document.querySelector('.favorite__coffee-bloack');
container.innerHTML = '';

function card(slot) {


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

card(0);

const arrowLeft = document.querySelector(".favorite__arrow-left");
const arrowRight = document.querySelector(".favorite__arrow-right");


arrowLeft.addEventListener("click", () => switchOrder("left"));
arrowRight.addEventListener("click", () => switchOrder("right"));

function switchOrder(side) {
    if (side === "right") {

        if (coffeeNumber === arrFavotiteCoffe.length - 1) { coffeeNumber = -1 };
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

        if (coffeeNumber === 0) { coffeeNumber = arrFavotiteCoffe.length };
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


arrowLeft.addEventListener("click", () => buttonslider());
arrowRight.addEventListener("click", () => buttonslider());

let controlsFirst = document.querySelector('.controls-first');
let controlsSecond = document.querySelector('.controls-second');
let controlsThird = document.querySelector('.controls-third');

controlsFirst.classList.add('controls-selected');


function buttonslider() {

    setTimeout(() => {

        selected();

    }, 701);

}

let stopRecursion = true;

document.addEventListener('click', function (event) {
    if (event.target.classList.length > 0) {
        let clickedClass = event.target.className;
        if (clickedClass === "favorite__arrow-left" || clickedClass === "favorite__arrow-right" || clickedClass === "controls-first" || clickedClass === "controls-second" || clickedClass === "controls-third") {
            stopRecursion = false;
        }
    }
});


function autoslider() {
    if (stopRecursion) {
        if (coffeeNumber === arrFavotiteCoffe.length - 1) { coffeeNumber = -1 };
        coffeeNumber = coffeeNumber + 1;

        setTimeout(() => {
            if (stopRecursion) {
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


                    selected();


                }, 1400);

                console.log(coffeeNumber);
                autoslider();
            }

        }, 3000);
    }

    return;




}

autoslider();

let lastActivePart = null;

controlsFirst.addEventListener("click", () => {
    if (lastActivePart !== "first") {
        controlsFirst.disabled = true;
        controls("first");
    }
});

controlsSecond.addEventListener("click", () => {
    if (lastActivePart !== "second") {
        controls("second");
    }
});

controlsThird.addEventListener("click", () => {
    if (lastActivePart !== "third") {
        controls("third");
    }
});

function controls(part) {
    if (part === lastActivePart) return;

    lastActivePart = part;

    if (part === "first") {
        if (coffeeNumber === 2) {
            controlsChangeRight(0);
        }
        controlsChangeLeft(0);
    } else if (part === "second") {
        if (coffeeNumber === 0) {
            controlsChangeRight(1);
        }
        controlsChangeLeft(1);
    } else if (part === "third") {
        if (coffeeNumber === 1) {
            controlsChangeRight(2);
        }
        controlsChangeLeft(2);
    }
}


function selected() {
    let namecoffe = document.getElementsByClassName("favorite-name")[0].textContent.trim();

    if (namecoffe === "S’mores Frappuccino") {

        controlsFirst.classList.add('controls-selected');
        controlsSecond.classList.remove('controls-selected');
        controlsThird.classList.remove('controls-selected');

    } else if (namecoffe === "Caramel Macchiato") {

        controlsFirst.classList.remove('controls-selected');
        controlsSecond.classList.add('controls-selected');
        controlsThird.classList.remove('controls-selected');

    } else if (namecoffe === "Ice coffee") {

        controlsFirst.classList.remove('controls-selected');
        controlsSecond.classList.remove('controls-selected');
        controlsThird.classList.add('controls-selected');

    }
}


function controlsChangeRight(number) {
    document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave");

    setTimeout(() => {

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave");


        document.getElementsByClassName('favorite-name')[0].textContent = arrFavotiteCoffe[number].name;
        document.getElementsByClassName('favorite-description')[0].textContent = arrFavotiteCoffe[number].description;
        document.getElementsByClassName('favorite-price')[0].textContent = arrFavotiteCoffe[number].price;
        document.getElementsByClassName('favorite-picture')[0].src = arrFavotiteCoffe[number].img;

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active");
    }, 700);

    setTimeout(() => {

        selected();

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active");

    }, 1400);
    coffeeNumber = number;
}

function controlsChangeLeft(number) {
    document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave-left");

    setTimeout(() => {

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-leave-left");


        document.getElementsByClassName('favorite-name')[0].textContent = arrFavotiteCoffe[number].name;
        document.getElementsByClassName('favorite-description')[0].textContent = arrFavotiteCoffe[number].description;
        document.getElementsByClassName('favorite-price')[0].textContent = arrFavotiteCoffe[number].price;
        document.getElementsByClassName('favorite-picture')[0].src = arrFavotiteCoffe[number].img;

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active-left");
    }, 700);

    setTimeout(() => {

        selected();

        document.querySelector(".favorite-coffe").classList.toggle("favorite-coffe-active-left");

    }, 1400);
    coffeeNumber = number;
}