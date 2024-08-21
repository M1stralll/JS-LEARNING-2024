import {arrcards} from './variables/const.js';

document.querySelector('.table__pet-name-first').textContent = arrcards[0].title;
document.querySelector('.table__pet-name-second').textContent = arrcards[1].title;
document.querySelector('.table__pet-name-third').textContent = arrcards[2].title;

const arrowLeft = document.querySelector(".desription__arrow-left");

const arrowRight = document.querySelector(".desription__arrow-right");

arrowLeft.addEventListener("click", switchorderLeft);
arrowRight.addEventListener("click", switchorderRight);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function switchorderRight() {

    let cardfirst = getRandomInt(8);
    let cardsecond = getRandomInt(8);
    let cardthird = getRandomInt(8);


    while (cardfirst === cardsecond || cardfirst === cardthird || cardsecond === cardthird) {
        cardfirst = getRandomInt(8);
        cardsecond = getRandomInt(8);
        cardthird = getRandomInt(8);
    }

}

function switchorderLeft() {

    let cardfirst = getRandomInt(8);
    let cardsecond = getRandomInt(8);
    let cardthird = getRandomInt(8);


    while (cardfirst === cardsecond || cardfirst === cardthird || cardsecond === cardthird) {
        cardfirst = getRandomInt(8);
        cardsecond = getRandomInt(8);
        cardthird = getRandomInt(8);
    }

    document.querySelector('.table__pet-picture-first').src = arrcards[cardfirst].img;
    document.querySelector('.table__pet-name-first').textContent = arrcards[cardfirst].title;

    document.querySelector('.table__pet-picture-second').src = arrcards[cardsecond].img;
    document.querySelector('.table__pet-name-second').textContent = arrcards[cardsecond].title;

    document.querySelector('.table__pet-picture-third').src = arrcards[cardthird].img;
    document.querySelector('.table__pet-name-third').textContent = arrcards[cardthird].title;

}


// Кэшируем элементы для удобства
const petFirstPicture = document.querySelector('.table__pet-picture-first');
const petSecondPicture = document.querySelector('.table__pet-picture-second');
const petThirdPicture = document.querySelector('.table__pet-picture-third');
const te = document.querySelector('.desription__tables');


arrowLeft.addEventListener("click", () => switchOrder("left"));
arrowRight.addEventListener("click", () => switchOrder("right"));

function switchOrder(direction) {
    // Добавляем анимацию в зависимости от направления
    const animationClass = direction === "left" ? "carousel-slide-left" : "carousel-slide-right";
    const animationClassUpdate = direction === "left" ? "carousel-slide-left-update" : "carousel-slide-right-update";

    petFirstPicture.classList.add(animationClass);
    petSecondPicture.classList.add(animationClass);
    petThirdPicture.classList.add(animationClass);
    te.classList.add(animationClass);

    // Через 0.5 секунды (длительность анимации) обновляем содержимое и убираем анимационные классы
    setTimeout(() => {
        if (direction === "right") {
            switchOrderRight();
        } else {
            switchOrderLeft();
        }

        petFirstPicture.classList.remove(animationClass);
        petSecondPicture.classList.remove(animationClass);
        petThirdPicture.classList.remove(animationClass);
        te.classList.remove(animationClass);
            petFirstPicture.classList.add(animationClassUpdate);
            petSecondPicture.classList.add(animationClassUpdate);
            petThirdPicture.classList.add(animationClassUpdate);
            te.classList.add(animationClassUpdate);
        setTimeout(() => {
            petFirstPicture.classList.remove(animationClassUpdate);
            petSecondPicture.classList.remove(animationClassUpdate);
            petThirdPicture.classList.remove(animationClassUpdate);
            te.classList.remove(animationClassUpdate);
            
        }, 500);
    }, 500); // 500ms — это время анимации, совпадающее с CSS

}

function switchOrderRight() {
    updateCarouselItems();
}

function switchOrderLeft() {
    updateCarouselItems();
}

function updateCarouselItems() {
    let cardFirst = getRandomInt(8);
    let cardSecond = getRandomInt(8);
    let cardThird = getRandomInt(8);

    while (cardFirst === cardSecond || cardFirst === cardThird || cardSecond === cardThird) {
        cardFirst = getRandomInt(8);
        cardSecond = getRandomInt(8);
        cardThird = getRandomInt(8);
    }

    // Обновляем картинки и имена
    petFirstPicture.src = arrcards[cardFirst].img;
    document.querySelector('.table__pet-name-first').textContent = arrcards[cardFirst].title;

    petSecondPicture.src = arrcards[cardSecond].img;
    document.querySelector('.table__pet-name-second').textContent = arrcards[cardSecond].title;

    petThirdPicture.src = arrcards[cardThird].img;
    document.querySelector('.table__pet-name-third').textContent = arrcards[cardThird].title;
}
