import { arrProduct } from './variables/variableProduct.js';


let currentPopupIndex = null; // Переменная для хранения индекса открытого попапа в массиве

document.addEventListener('click', function (event) {
    // Открытие попапа при нажатии на кнопку "Learn more"
    if (event.target.classList.contains('menu-card')) {
        const petCardElement = event.target.closest('div');
        const petTitle = petCardElement.querySelector('.menu-item').textContent.toLowerCase();
        const petData = arrProduct.find(pet => pet.name.toLowerCase() === petTitle);

        if (petData) {
            // Найти индекс элемента в массиве
            currentPopupIndex = arrProduct.findIndex(pet => pet.name.toLowerCase() === petTitle);

            document.querySelector(".popup__title").textContent = petData.name;
            document.querySelector(".popup__img").src = petData.img;
            document.querySelector(".popup__description").textContent = petData.description;
            // document.querySelector(".table__pet-popup-type").textContent = petData.breed;
            // document.querySelector(".table__pet-popup__description").textContent = petData.description;
            // document.querySelector(".table__pet-popup-age").textContent = petData.age;
            // document.querySelector(".table__pet-popup-inoculations").textContent = petData.innoculations;
            // document.querySelector(".table__pet-popup-diseases").textContent = petData.diseases;
            // document.querySelector(".table__pet-popup-parasites").textContent = petData.parasites;

            const popup = document.querySelector(".menu__popup");


            if (popup) {
                popup.style.display = 'flex';
            }
        }
    }


    // Закрытие попапа при нажатии на кнопку "Cancel"
    if (event.target.classList.contains('popup__buttoncancel')) {
        const popup = document.querySelector(".menu__popup");

        if (popup) {
            popup.style.display = 'none';
        }

        currentPopupIndex = null; // Сброс индекса при закрытии попапа
    }

    // Закрытие попапа при нажатии на фон попапа
    const backgroundPopupSelector = `.menu__popup`;
    if (event.target.matches(backgroundPopupSelector)) {
        const popup = document.querySelector(".menu__popup");


        if (popup && event.target === popup) {
            popup.style.display = 'none';
        }

        currentPopupIndex = null; // Сброс индекса при закрытии попапа
    }
});
