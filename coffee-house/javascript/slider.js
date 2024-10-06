import { arrFavoriteCoffe } from "./variables/favorite.const.js";


const container = document.querySelector(".favorite__coffee-container");
let count = 0;
let translate = 0;
let startX = 0;
let countX = 0;
let isSwiping = false;
selectCard();

container.innerHTML = "";

const coffeCardFirst = document.createElement("div");
coffeCardFirst.className = `favorite-coffee`;
coffeCardFirst.innerHTML = `
            <img class="favorite-picture" src="${arrFavoriteCoffe[0].img}" alt="favoriteCoffe">

                        <h3 class="favorite-name">
                            ${arrFavoriteCoffe[0].name}
                        </h3>

                        <p class="favorite-description">
                            ${arrFavoriteCoffe[0].description}
                        </p>

                        <h3 class="favorite-price">
                            ${arrFavoriteCoffe[0].price}
                        </h3>
        `;

container.appendChild(coffeCardFirst);


const coffeCardSecond = document.createElement("div");
coffeCardSecond.className = `favorite-coffee`;
coffeCardSecond.innerHTML = `
            <img class="favorite-picture" src="${arrFavoriteCoffe[1].img}" alt="favoriteCoffe">

                        <h3 class="favorite-name">
                            ${arrFavoriteCoffe[1].name}
                        </h3>

                        <p class="favorite-description">
                            ${arrFavoriteCoffe[1].description}
                        </p>

                        <h3 class="favorite-price">
                            ${arrFavoriteCoffe[1].price}
                        </h3>
        `;

container.appendChild(coffeCardSecond);

const coffeCardThird = document.createElement("div");
coffeCardThird.className = `favorite-coffee`;
coffeCardThird.innerHTML = `
            <img class="favorite-picture" src="${arrFavoriteCoffe[2].img}" alt="favoriteCoffe">

                        <h3 class="favorite-name">
                            ${arrFavoriteCoffe[2].name}
                        </h3>

                        <p class="favorite-description">
                            ${arrFavoriteCoffe[2].description}
                        </p>

                        <h3 class="favorite-price">
                            ${arrFavoriteCoffe[2].price}
                        </h3>
        `;

container.appendChild(coffeCardThird);



document.querySelector('.favorite__arrow-right').onclick = function () {
    if (count < 2) {
        translate -= 480;
        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
            element.style.transform = `translateX(${translate}px)`;
        });

        count++;
    } else {
        translate = 0;
        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
            element.style.transform = `translateX(${translate}px)`;

        });
        count = 0;
    }
};

document.querySelector('.favorite__arrow-left').onclick = function () {
    if (count > 0) {
        translate += 480;
        count--;
        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
            element.style.transform = `translateX(${translate}px)`;

        });
    } else {
        count = 2;
        translate = -960;
        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
            element.style.transform = `translateX(${translate}px)`;

        });
    }
};

document.querySelector('.controls-first').onclick = function () {
    changeButtomButtons(0, 0, 0);
};

document.querySelector('.controls-second').onclick = function () {
    changeButtomButtons(-316, -480, 1);
};

document.querySelector('.controls-third').onclick = function () {
    changeButtomButtons(-632, -960, 2);
};

function changeButtomButtons(phone, laptom, check) {
    let sizeWindow = window.matchMedia("(max-width: 767px)")

    if (sizeWindow.matches == true) {
        count = check;
        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
            element.style.transform = `translateX(${phone}px)`;

        });
    } else {
        count = check;
        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
            element.style.transform = `translateX(${laptom}px)`;
        });
    }
}

document.addEventListener('click', function (event) {

    if (event.target.className.startsWith('favorite') || event.target.className.startsWith('controls')) {
        selectCard();
    }
});

function selectCard() {
    if (count === 0) {
        document.querySelector('.controls-first').classList.add('controls-selected');
        document.querySelector('.controls-second').classList.remove('controls-selected');
        document.querySelector('.controls-third').classList.remove('controls-selected');
    } else if (count === 1) {
        document.querySelector('.controls-first').classList.remove('controls-selected');
        document.querySelector('.controls-second').classList.add('controls-selected');
        document.querySelector('.controls-third').classList.remove('controls-selected');
    } else {
        document.querySelector('.controls-first').classList.remove('controls-selected');
        document.querySelector('.controls-second').classList.remove('controls-selected');
        document.querySelector('.controls-third').classList.add('controls-selected');
    }
}


container.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX; 
    isSwiping = true;
});


container.addEventListener('touchmove', function (event) {
    if (isSwiping) {
        countX = event.touches[0].clientX;
    }
});

container.addEventListener('touchend', function () {
    let sizeWindow = window.matchMedia("(max-width: 767px)")

    if (sizeWindow.matches == true) {
        if (isSwiping) {
            let changeX = startX - countX;
            console.log(Math.abs(changeX))

            if (Math.abs(changeX) > 50) {
                if (changeX > 0) {
                    if (count < 2) {
                        translate -= 316;
                        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
                            element.style.transform = `translateX(${translate}px)`;
                        });

                        count++;
                    } else {
                        translate = 0;
                        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
                            element.style.transform = `translateX(${translate}px)`;

                        });
                        count = 0;
                    }
                } else {
                    if (count > 0) {
                        translate += 316;
                        count--;
                        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
                            element.style.transform = `translateX(${translate}px)`;

                        });
                    } else {
                        count = 2;
                        translate = -632;
                        document.querySelectorAll('.favorite-coffee').forEach(function (element) {
                            element.style.transform = `translateX(${translate}px)`;

                        });
                    }
                }
            }
            selectCard();
        }
    } else {
        return;
    }
    isSwiping = false;
});
