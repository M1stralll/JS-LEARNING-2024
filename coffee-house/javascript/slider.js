import { arrFavoriteCoffe } from "./variables/favorite.const.js";

let coffeeNumber = -1;

const container = document.querySelector(".favorite__coffee-bloack");

container.innerHTML = "";

card(0);

const arrowLeft = document.querySelector(".favorite__arrow-left");
const arrowRight = document.querySelector(".favorite__arrow-right");

arrowLeft.addEventListener("click", () => switchOrder("left"));
arrowRight.addEventListener("click", () => switchOrder("right"));

arrowLeft.addEventListener("click", () => buttonMove());
arrowRight.addEventListener("click", () => buttonMove());

let controlsFirst = document.querySelector(".controls-first");
let controlsSecond = document.querySelector(".controls-second");
let controlsThird = document.querySelector(".controls-third");

controlsFirst.classList.add("controls-selected");

let stopRecursion = true;

document.addEventListener("click", (event) => {
    if (event.target.classList.length > 0) {
        let clickedClass = event.target.className;
        if (
            clickedClass === "favorite__arrow-left" ||
            clickedClass === "favorite__arrow-right" ||
            clickedClass === "controls-first" ||
            clickedClass === "controls-second" ||
            clickedClass === "controls-third"
        ) {
            stopRecursion = false;
        }
    }
});

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
    let namecoffe = document
        .getElementsByClassName("favorite-name")[0]
        .textContent.trim();

    if (namecoffe === "S’mores Frappuccino") {
        controlsFirst.classList.add("controls-selected");
        controlsSecond.classList.remove("controls-selected");
        controlsThird.classList.remove("controls-selected");
    } else if (namecoffe === "Caramel Macchiato") {
        controlsFirst.classList.remove("controls-selected");
        controlsSecond.classList.add("controls-selected");
        controlsThird.classList.remove("controls-selected");
    } else if (namecoffe === "Ice coffee") {
        controlsFirst.classList.remove("controls-selected");
        controlsSecond.classList.remove("controls-selected");
        controlsThird.classList.add("controls-selected");
    }
}

function controlsChangeRight(number) {
    document
        .querySelector(".favorite-coffe")
        .classList.toggle("favorite-coffe-leave-right");

    setTimeout(() => {
        document
            .querySelector(".favorite-coffe")
            .classList.toggle("favorite-coffe-leave-right");

        document.getElementsByClassName("favorite-name")[0].textContent =
            arrFavoriteCoffe[number].name;
        document.getElementsByClassName("favorite-description")[0].textContent =
            arrFavoriteCoffe[number].description;
        document.getElementsByClassName("favorite-price")[0].textContent =
            arrFavoriteCoffe[number].price;
        document.getElementsByClassName("favorite-picture")[0].src =
            arrFavoriteCoffe[number].img;

        document
            .querySelector(".favorite-coffe")
            .classList.toggle("favorite-coffe-active-right");
    }, 700);

    setTimeout(() => {
        selected();

        document
            .querySelector(".favorite-coffe")
            .classList.toggle("favorite-coffe-active-right");
    }, 1400);
    coffeeNumber = number;
}

function controlsChangeLeft(number) {
    document
        .querySelector(".favorite-coffe")
        .classList.toggle("favorite-coffe-leave-left");

    setTimeout(() => {
        document
            .querySelector(".favorite-coffe")
            .classList.toggle("favorite-coffe-leave-left");

        document.getElementsByClassName("favorite-name")[0].textContent =
            arrFavoriteCoffe[number].name;
        document.getElementsByClassName("favorite-description")[0].textContent =
            arrFavoriteCoffe[number].description;
        document.getElementsByClassName("favorite-price")[0].textContent =
            arrFavoriteCoffe[number].price;
        document.getElementsByClassName("favorite-picture")[0].src =
            arrFavoriteCoffe[number].img;

        document
            .querySelector(".favorite-coffe")
            .classList.toggle("favorite-coffe-active-left");
    }, 700);

    setTimeout(() => {
        selected();

        document
            .querySelector(".favorite-coffe")
            .classList.toggle("favorite-coffe-active-left");
    }, 1400);
    coffeeNumber = number;
}

function buttonMove() {
    setTimeout(() => {
        selected();
    }, 701);
}

function switchOrder(side) {
    console.log(side);
    if (side === "right") {
        if (coffeeNumber === arrFavoriteCoffe.length - 1) {
            coffeeNumber = -1;
        }
        coffeeNumber = coffeeNumber + 1;

        switchSide(side);
    } else {
        if (coffeeNumber === 0) {
            coffeeNumber = arrFavoriteCoffe.length;
        }
        coffeeNumber = coffeeNumber - 1;

        switchSide(side);
    }
}

function switchSide(scrolling) {
    document
        .querySelector(".favorite-coffe")
        .classList.toggle(`favorite-coffe-leave-${scrolling}`);

    setTimeout(() => {
        document
            .querySelector(".favorite-coffe")
            .classList.toggle(`favorite-coffe-leave-${scrolling}`);

        document.getElementsByClassName("favorite-name")[0].textContent =
            arrFavoriteCoffe[coffeeNumber].name;
        document.getElementsByClassName("favorite-description")[0].textContent =
            arrFavoriteCoffe[coffeeNumber].description;
        document.getElementsByClassName("favorite-price")[0].textContent =
            arrFavoriteCoffe[coffeeNumber].price;
        document.getElementsByClassName("favorite-picture")[0].src =
            arrFavoriteCoffe[coffeeNumber].img;

        document
            .querySelector(".favorite-coffe")
            .classList.toggle(`favorite-coffe-active-${scrolling}`);
    }, 700);

    setTimeout(() => {
        document
            .querySelector(".favorite-coffe")
            .classList.toggle(`favorite-coffe-active-${scrolling}`);
    }, 1400);
}

function card(slot) {
    const coffeCard = document.createElement("div");
    coffeCard.className = `favorite-coffe`;
    coffeCard.innerHTML = `
            <img class="favorite-picture" src="${arrFavoriteCoffe[slot].img}" alt="favoriteCoffe">

                        <h3 class="favorite-name">
                            ${arrFavoriteCoffe[slot].name}
                        </h3>

                        <p class="favorite-description">
                            ${arrFavoriteCoffe[slot].description}
                        </p>

                        <h3 class="favorite-price">
                            ${arrFavoriteCoffe[slot].price}
                        </h3>
        `;

    container.appendChild(coffeCard);
}

function autoslider() {
    if (stopRecursion) {
        if (coffeeNumber === arrFavoriteCoffe.length - 1) {
            coffeeNumber = -1;
        }
        coffeeNumber = coffeeNumber + 1;

        setTimeout(() => {
            if (stopRecursion) {
                document
                    .querySelector(".favorite-coffe")
                    .classList.toggle("favorite-coffe-leave-right");

                setTimeout(() => {
                    document
                        .querySelector(".favorite-coffe")
                        .classList.toggle("favorite-coffe-leave-right");

                    document.getElementsByClassName("favorite-name")[0].textContent =
                        arrFavoriteCoffe[coffeeNumber].name;
                    document.getElementsByClassName(
                        "favorite-description",
                    )[0].textContent = arrFavoriteCoffe[coffeeNumber].description;
                    document.getElementsByClassName("favorite-price")[0].textContent =
                        arrFavoriteCoffe[coffeeNumber].price;
                    document.getElementsByClassName("favorite-picture")[0].src =
                        arrFavoriteCoffe[coffeeNumber].img;

                    document
                        .querySelector(".favorite-coffe")
                        .classList.toggle("favorite-coffe-active-right");
                }, 700);

                setTimeout(() => {
                    document
                        .querySelector(".favorite-coffe")
                        .classList.toggle("favorite-coffe-active-right");

                    selected();
                }, 1400);

                console.log(coffeeNumber);
                autoslider();
            }
        }, 3000);
    }

    return;
}


let sizeWindow = window.matchMedia("(max-width: 767px)")
console.log(sizeWindow.matches);

if (sizeWindow.matches == false) {
    let placeX = 0;
    let cooldownActive = false;

    const mouseMoveHandler = (event) => {
        const currentX = event.clientX;

        if (!cooldownActive) {
            if (currentX > placeX) {
                switchOrder("right");
                buttonMove();
                cooldownActive = true;
                setTimeout(() => {
                    cooldownActive = false;
                    document.removeEventListener('mousemove', mouseMoveHandler);
                }, 1000);
            } else if (currentX < placeX) {
                switchOrder("left");
                buttonMove();
                cooldownActive = true;
                setTimeout(() => {
                    cooldownActive = false;
                    document.removeEventListener('mousemove', mouseMoveHandler);
                }, 1000);
            }
        }

        placeX = currentX;
    };

    document.addEventListener('mousedown', (event) => {
        if (event.target.className == "favorite-coffe" ||
            event.target.className == "favorite-picture" ||
            event.target.className == "favorite-name"
        ) {
            console.log(event.target.className);
            document.addEventListener('mousemove', mouseMoveHandler);
        }
    });
}
