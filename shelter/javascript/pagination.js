import {arrPets} from './variables/const.js';

import {shuffleArray} from './utils/random.js';


// Функция для создания нового массива с первыми 8 элементами неизменными и последующими перемешанными в группах
function processArray(arr) {
    const firstPart = arr.slice(0, 8); // Первые 8 элементов
    const restPart = arr.slice(8); // Оставшаяся часть

    // Разделяем оставшуюся часть на группы по 8 элементов
    const groups = [];
    for (let i = 0; i < restPart.length; i += 8) {
        groups.push(restPart.slice(i, i + 8));
    }

    // Перемешиваем элементы в каждой группе
    const shuffledGroups = groups.map(group => shuffleArray(group));

    // Объединяем группы в один массив
    const shuffledRestPart = shuffledGroups.flat();

    // Возвращаем новый массив, состоящий из первых 8 элементов и перемешанных групп
    return [...firstPart, ...shuffledRestPart];
}

const shuffledPets = processArray(arrPets);

let petsCard = 8; // Начальное количество питомцев на странице
let petsPage = 1; // Начальная страница

// Функция для расчета общего количества страниц
function getTotalPages() {
    return Math.ceil(shuffledPets.length / petsCard);
}

// Функция для отображения питомцев на текущей странице
function displayItems(page) {
    const startIndex = (page - 1) * petsCard;
    const endIndex = startIndex + petsCard;

    const itemsToDisplay = shuffledPets.slice(startIndex, endIndex);
    const container = document.querySelector('.looking__pets-firstline');
    container.innerHTML = '';

    itemsToDisplay.forEach(pet => {
        const petCardElement = document.createElement('div');
        petCardElement.className = `table__pet-${pet.title.toLowerCase()}`;

        petCardElement.innerHTML = `
            <img class="table__pet-picture" src="${pet.img}" alt="${pet.title}">
            <h3 class="table__pet-name">${pet.title}</h3>
            <button class="table__pet-button">Learn more</button>
        `;

        container.appendChild(petCardElement);
    });

    // Обновляем информацию о текущей странице, если элемент существует
    const pageInfo = document.querySelector('.pets__slider-page');
    if (pageInfo) {
        pageInfo.textContent = `${page}`;
    }
}


// Функция для обновления количества питомцев на странице в зависимости от ширины окна
function updatePetsCard() {
    const width = window.innerWidth;

    if (width < 1280 && width > 768) {
        petsCard = 6; // Например, для маленьких экранов
    } else if (width < 768) {
        petsCard = 2; // Для средних экранов
    } else {
        petsCard = 8; // Для больших экранов
    }

    petsPage = 1; // Сброс на первую страницу
    displayItems(petsPage);
}

// Инициализация первой страницы
displayItems(petsPage);

// Привязываем события к кнопкам навигации
document.querySelector('.pets__slider-right').addEventListener('click', nextPage);
document.querySelector('.pets__slider-left').addEventListener('click', prevPage);
document.querySelector('.pets__slider-doubleleft').addEventListener('click', goToFirstPage);
document.querySelector('.pets__slider-doubleright').addEventListener('click', goToLastPage);

// Обработчик события изменения размера окна
window.addEventListener('resize', updatePetsCard);

// Вызов функции при загрузке страницы
window.addEventListener('load', updatePetsCard);

// Функция для перехода на следующую страницу
function nextPage() {
    if (petsPage < getTotalPages()) {
        petsPage++;
        displayItems(petsPage);
    }
}

// Функция для перехода на предыдущую страницу
function prevPage() {
    if (petsPage > 1) {
        petsPage--;
        displayItems(petsPage);
    }
}

// Функция для перехода на первую страницу
function goToFirstPage() {
    petsPage = 1;
    displayItems(petsPage);
}

// Функция для перехода на последнюю страницу
function goToLastPage() {
    petsPage = getTotalPages();
    displayItems(petsPage);
}

// Инициализация первой страницы
displayItems(petsPage);

// Привязываем события к кнопкам навигации
document.querySelector('.pets__slider-right').addEventListener('click', nextPage);
document.querySelector('.pets__slider-left').addEventListener('click', prevPage);

document.querySelector('.pets__slider-doubleleft').addEventListener('click', goToFirstPage);
document.querySelector('.pets__slider-doubleright').addEventListener('click', goToLastPage);

function updateButtonsState() {
    const totalPages = getTotalPages();
    const isFirstPage = petsPage === 1;
    const isLastPage = petsPage === totalPages;

    // Обновляем состояние кнопок для перехода влево
    document.querySelector('.pets__slider-left').classList.toggle('disabled', isFirstPage);
    document.querySelector('.pets__slider-doubleleft').classList.toggle('disabled', isFirstPage);

    // Обновляем состояние кнопок для перехода вправо
    document.querySelector('.pets__slider-right').classList.toggle('disabled', isLastPage);
    document.querySelector('.pets__slider-doubleright').classList.toggle('disabled', isLastPage);
}
