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
