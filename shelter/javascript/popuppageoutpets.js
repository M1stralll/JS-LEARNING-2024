import {arrPets} from './variables/const.js';

let currentPopupIndex = null; // Переменная для хранения индекса открытого попапа в массиве

document.addEventListener('click', function (event) {
    // Открытие попапа при нажатии на кнопку "Learn more"
    if (event.target.classList.contains('table__pet-button')) {
        const petCardElement = event.target.closest('div');
        const petTitle = petCardElement.querySelector('.table__pet-name').textContent.toLowerCase();
        const petData = arrPets.find(pet => pet.title.toLowerCase() === petTitle);

        if (petData) {
            // Найти индекс элемента в массиве
            currentPopupIndex = arrPets.findIndex(pet => pet.title.toLowerCase() === petTitle);

            const popupSelector = `.table__pet-popup-${petData.popup.toLowerCase()}`;
            const popup = document.querySelector(popupSelector);

            if (popup) {
                popup.style.display = 'flex';
            }
        }
    }

    // Закрытие попапа при нажатии на кнопку "Cancel"
    if (event.target.classList.contains('table__pet-popup-buttoncancel')) {
        if (currentPopupIndex !== null) {
            const petData = arrPets[currentPopupIndex];
            const popupSelector = `.table__pet-popup-${petData.popup.toLowerCase()}`;
            const popup = document.querySelector(popupSelector);

            if (popup) {
                popup.style.display = 'none';
            }

            currentPopupIndex = null; // Сброс индекса при закрытии попапа
        }
    }

    // Закрытие попапа при нажатии на фон попапа
    const backgroundPopupSelector = `.table__pet-popup-${currentPopupIndex !== null ? arrPets[currentPopupIndex].popup.toLowerCase() : ''}`;
    if (event.target.matches(backgroundPopupSelector)) {
        if (currentPopupIndex !== null) {
            const petData = arrPets[currentPopupIndex];
            const popupSelector = `.table__pet-popup-${petData.popup.toLowerCase()}`;
            const popup = document.querySelector(popupSelector);

            if (popup && event.target === popup) {
                popup.style.display = 'none';
            }

            currentPopupIndex = null; // Сброс индекса при закрытии попапа
        }
    }
});
