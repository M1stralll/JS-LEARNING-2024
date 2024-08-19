const items = [
    "Товар 1", "Товар 2", "Товар 3", "Товар 4", "Товар 5",
    "Товар 6", "Товар 7", "Товар 8", "Товар 9", "Товар 10",
    "Товар 11", "Товар 12", "Товар 13", "Товар 14", "Товар 15"
];

let itemsPerPage = 5;  // Начальное количество товаров на странице
let currentPage = 1;   // Начальная страница

// Функция для расчета общего количества страниц
function getTotalPages() {
    return Math.ceil(items.length / itemsPerPage);
}

// Функция для отображения товаров на текущей странице
function displayItems(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    const itemsToDisplay = items.slice(startIndex, endIndex);
    
    document.getElementById('items').innerHTML = '';
    itemsToDisplay.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        document.getElementById('items').appendChild(div);
    });

    // Обновляем информацию о текущей странице
    document.getElementById('page-info').textContent = `Страница ${currentPage} из ${getTotalPages()}`;
}

// Функция для смены количества элементов на странице
function changeItemsPerPage(newItemsPerPage) {
    itemsPerPage = newItemsPerPage;
    currentPage = 1; // Сброс на первую страницу
    displayItems(currentPage);
}

// Функции для перехода на следующую и предыдущую страницы
function nextPage() {
    if (currentPage < getTotalPages()) {
        currentPage++;
        displayItems(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
    }
}

// Инициализация: отображаем первую страницу
displayItems(currentPage);

// Привязываем события к кнопкам навигации
document.getElementById('next').addEventListener('click', nextPage);
document.getElementById('prev').addEventListener('click', prevPage);

// Пример изменения количества элементов на странице
document.getElementById('items-per-page').addEventListener('change', function() {
    changeItemsPerPage(parseInt(this.value));
});
