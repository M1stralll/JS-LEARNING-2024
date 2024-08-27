import { arrcards } from './variables/const.js';

import { shuffleArray } from './utils/random.js';

Array.prototype.multiget = function () {
    var args = Array.apply(null, arguments);
    var result = [];
    for (var i = 0; i < args.length; i++) {
        result.push(this[args[i]]);
    }

    return result;
}

const arrowLeft = document.querySelector(".desription__arrow-left");
const arrowRight = document.querySelector(".desription__arrow-right");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Кэшируем элементы для удобства
const petFirstPicture = document.querySelector('.table__pet-picture');
const te = document.querySelector('.desription__tables');

arrowLeft.addEventListener("click", () => switchOrder("left"));
arrowRight.addEventListener("click", () => switchOrder("right"));

function switchOrder(direction) {
    // Добавляем анимацию в зависимости от направления
    const animationClass = direction === "left" ? "carousel-slide-left" : "carousel-slide-right";
    const animationClassUpdate = direction === "left" ? "carousel-slide-left-update" : "carousel-slide-right-update";

    petFirstPicture.classList.add(animationClass);
    te.classList.add(animationClass);

    // Через 0.5 секунды (длительность анимации) обновляем содержимое и убираем анимационные классы
    setTimeout(() => {
        if (direction === "right") {
            switchorderRight();
        } else {
            switchorderLeft();
        }

        petFirstPicture.classList.remove(animationClass);
        te.classList.remove(animationClass);
        petFirstPicture.classList.add(animationClassUpdate);
        te.classList.add(animationClassUpdate);
        setTimeout(() => {
            petFirstPicture.classList.remove(animationClassUpdate);
            te.classList.remove(animationClassUpdate);

        }, 500);
    }, 500); // 500ms — это время анимации, совпадающее с CSS

}

// Функция для создания нового массива с первыми 8 элементами неизменными и последующими перемешанными в группах
function processArray(arr) {
    const firstPart = arr.slice(0, 3); // Первые 8 элементов
    const restPart = arr.slice(3); // Оставшаяся часть

    // Разделяем оставшуюся часть на группы по 8 элементов
    const groups = [];
    for (let i = 0; i < restPart.length; i += 3) {
        groups.push(restPart.slice(i, i + 3));
    }

    // Перемешиваем элементы в каждой группе
    const shuffledGroups = groups.map(group => shuffleArray(group));

    // Объединяем группы в один массив
    const shuffledRestPart = shuffledGroups.flat();

    // Возвращаем новый массив, состоящий из первых 8 элементов и перемешанных групп
    return [...firstPart, ...shuffledRestPart];
}

const shuffledPets = processArray(arrcards);

let petsCard = 3; // Начальное количество питомцев на странице


function displayItems(page) {
    const itemsToDisplay = shuffledPets.slice(0, 3);
    const container = document.querySelector('.desription__tables');
    container.innerHTML = '';

    itemsToDisplay.forEach(pet => {
        const petCardElement = document.createElement('div');
        petCardElement.className = `table__pet`;

        petCardElement.innerHTML = `
            <img class="table__pet-picture" src="${pet.img}" alt="${pet.title}">
            <h3 class="table__pet-name">${pet.title}</h3>
            <button class="table__pet-button">Learn more</button>
        `;

        container.appendChild(petCardElement);
    });
}

// Функция для обновления количества питомцев на странице в зависимости от ширины окна


// Инициализация первой страницы
displayItems(1);


function switchorderRight() {
    const range = 8; // максимальное значение (1..1000000 включительно)
    const count = 4;
    let m = {};
    let array = [];
    for (let i = 0; i < count; ++i) {
        let r = Math.floor(Math.random() * (range - i));
        array.push(((r in m) ? m[r] : r) + 1);
        let l = range - i - 1;
        m[r] = (l in m) ? m[l] : l;
    }

    const itemsToDisplay = shuffledPets.multiget((array[0] - 1), (array[1] - 1), (array[3] - 1));
    const container = document.querySelector('.desription__tables');
    container.innerHTML = '';

    itemsToDisplay.forEach(pet => {
        const petCardElement = document.createElement('div');
        petCardElement.className = `table__pet`;

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

function switchorderLeft() {
    const range = 8;
    const count = 4;
    let m = {};
    let array = [];
    for (let i = 0; i < count; ++i) {
        let r = Math.floor(Math.random() * (range - i));
        array.push(((r in m) ? m[r] : r) + 1);
        let l = range - i - 1;
        m[r] = (l in m) ? m[l] : l;
    }

    const itemsToDisplay = shuffledPets.multiget((array[0] - 1), (array[1] - 1), (array[3] - 1));
    const container = document.querySelector('.desription__tables');
    container.innerHTML = '';

    itemsToDisplay.forEach(pet => {
        const petCardElement = document.createElement('div');
        petCardElement.className = `table__pet`;

        petCardElement.innerHTML = `
                <img class="table__pet-picture" src="${pet.img}" alt="${pet.title}">
                <h3 class="table__pet-name">${pet.title}</h3>
                <button class="table__pet-button">Learn more</button>
            `;

        container.appendChild(petCardElement);
    });

    const pageInfo = document.querySelector('.pets__slider-page');
    if (pageInfo) {
        pageInfo.textContent = `${page}`;
    }

}