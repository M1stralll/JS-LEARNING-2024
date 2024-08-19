
// const arrowLeft = document.querySelector(".desription__arrow-left");

// const arrowRight = document.querySelector(".desription__arrow-right");

// arrowLeft.addEventListener("click", switchorderLeft);
// arrowRight.addEventListener("click", switchorderRight);

// // function switchorderleft() {
// //     const element = document.querySelector('.table__pet-katrine');
// //     const currentOrder = window.getComputedStyle(element).order;
// //     document.querySelector('.table__pet-katrine').style.order = +currentOrder + 1;
// //     console.log(currentOrder);
// // }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }к

// function switchorderRight() {
//     const currentOrderkatrine = getRandomInt(3);
//     document.querySelector('.table__pet-katrine').style.order = currentOrderkatrine;
//     console.log(currentOrderkatrine);

//     const elementjennifer = document.querySelector('.table__pet-jennifer');
//     // const currentOrderjennifer = window.getComputedStyle(element).order;
//     // document.querySelector('.table__pet-jennifer').style.order = +currentOrderjennifer + 1;
//     const currentOrderjennifer = getRandomInt(3);
//     if (currentOrderjennifer == elementjennifer) { getRandomInt(3) };
//     document.querySelector('.table__pet-jennifer').style.order = getRandomInt(3);

//     const currentOrderwoody = getRandomInt(3);
//     document.querySelector('.table__pet-woody').style.order = getRandomInt(3);
// }
// function switchorderLeft() {
//     const currentOrderkatrine = getRandomInt(3);
//     document.querySelector('.table__pet-katrine').style.order = currentOrderkatrine;
//     console.log(currentOrderkatrine);

//     const currentOrderjennifer = getRandomInt(3);
//     document.querySelector('.table__pet-jennifer').style.order = getRandomInt(3);

//     const currentOrderwoody = getRandomInt(3);
//     document.querySelector('.table__pet-woody').style.order = getRandomInt(3);
// }

const arrpets = [
    {
        title: "Katrine",
        img: "/shelter/images/description/description__katrine.png",
    },

    {
        title: "Jennifer",
        img: "/shelter/images/description/description__jennifer.png",
    },

    {
        title: "Woody",
        img: "/shelter/images/description/description__woody.png",
    },

    {
        title: "Sophia",
        img: "/shelter/images/description/description__sophia.png",
    },

    {
        title: "Timmy",
        img: "/shelter/images/description/description__timmy.png",
    },

    {
        title: "Charly",
        img: "/shelter/images/description/description__charly.png",
    },

    {
        title: "Scralett",
        img: "/shelter/images/description/description__scralett.png",
    },

    {
        title: "Freddie",
        img: "/shelter/images/description/description__freddie.png",
    },


];

document.querySelector('.table__pet-name-first').textContent = arrpets[0].title;
document.querySelector('.table__pet-name-second').textContent = arrpets[1].title;
document.querySelector('.table__pet-name-third').textContent = arrpets[2].title;

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

    document.querySelector('.table__pet-picture-first').src = arrpets[cardfirst].img;
    document.querySelector('.table__pet-name-first').textContent = arrpets[cardfirst].title;

    document.querySelector('.table__pet-picture-second').src = arrpets[cardsecond].img;
    document.querySelector('.table__pet-name-second').textContent = arrpets[cardsecond].title;

    document.querySelector('.table__pet-picture-third').src = arrpets[cardthird].img;
    document.querySelector('.table__pet-name-third').textContent = arrpets[cardthird].title;

}
// Открытие попапов
document.addEventListener('click', function (event) {
    // Получаем заголовок (имя) карточки, на которую кликнули
    let cardTitle;
    if (event.target.classList.contains('table__pet-button-first')) {
        cardTitle = document.querySelector('.table__pet-name-first').textContent.toLowerCase();
    } else if (event.target.classList.contains('table__pet-button-second')) {
        cardTitle = document.querySelector('.table__pet-name-second').textContent.toLowerCase();
    } else if (event.target.classList.contains('table__pet-button-third')) {
        cardTitle = document.querySelector('.table__pet-name-third').textContent.toLowerCase();
    }

    if (cardTitle) {
        const popupClass = `.table__pet-popup-${cardTitle}`;
        const popupElement = document.querySelector(popupClass);
        if (popupElement) {
            popupElement.style.display = 'flex';
        }
    }
});

let activePopup = null;

document.addEventListener('click', function (event) {
    // Определяем, на какую кнопку карточки нажали
    let cardTitle;
    if (event.target.classList.contains('table__pet-button-first')) {
        cardTitle = document.querySelector('.table__pet-name-first').textContent.toLowerCase();
    } else if (event.target.classList.contains('table__pet-button-second')) {
        cardTitle = document.querySelector('.table__pet-name-second').textContent.toLowerCase();
    } else if (event.target.classList.contains('table__pet-button-third')) {
        cardTitle = document.querySelector('.table__pet-name-third').textContent.toLowerCase();
    }

    // Если нашли cardTitle, значит, пользователь открыл попап
    if (cardTitle) {
        const popupClass = `.table__pet-popup-${cardTitle}`;
        activePopup = document.querySelector(popupClass);
        if (activePopup) {
            activePopup.style.display = 'flex';
        }
    }

    // Закрытие попапа по кнопке закрытия
    if (event.target.classList.contains('table__pet-popup-buttoncancel')) {
        if (activePopup) {
            activePopup.style.display = 'none';
            activePopup = null; // Сбрасываем активный попап
        }
    }

    // Закрытие попапа по клику на фон
    if (activePopup && event.target === activePopup) {
        activePopup.style.display = 'none';
        activePopup = null; // Сбрасываем активный попап
    }
});

// Кэшируем элементы для удобства
const petFirstPicture = document.querySelector('.table__pet-picture-first');
const petSecondPicture = document.querySelector('.table__pet-picture-second');
const petThirdPicture = document.querySelector('.table__pet-picture-third');

arrowLeft.addEventListener("click", () => switchOrder("left"));
arrowRight.addEventListener("click", () => switchOrder("right"));

function switchOrder(direction) {
    // Добавляем анимацию в зависимости от направления
    const animationClass = direction === "left" ? "carousel-slide-left" : "carousel-slide-right";

    petFirstPicture.classList.add(animationClass);
    petSecondPicture.classList.add(animationClass);
    petThirdPicture.classList.add(animationClass);

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
    }, 500); // 500ms — это время анимации, совпадающее с CSS
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
    petFirstPicture.src = arrpets[cardFirst].img;
    document.querySelector('.table__pet-name-first').textContent = arrpets[cardFirst].title;

    petSecondPicture.src = arrpets[cardSecond].img;
    document.querySelector('.table__pet-name-second').textContent = arrpets[cardSecond].title;

    petThirdPicture.src = arrpets[cardThird].img;
    document.querySelector('.table__pet-name-third').textContent = arrpets[cardThird].title;
}
