const menuIcon = document.querySelector(".burger");
let element = document.querySelector('.burger__menu');

menuIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    if (element.classList.contains('show')) {
        element.classList.remove('show');
        // Добавляем небольшую задержку, чтобы завершилась анимация высоты перед установкой display: none
        setTimeout(() => {
            element.style.display = 'none';
        }, 900); // Соответствует длительности CSS-перехода
    } else {
        element.style.display = 'block';
        // Обеспечиваем обновление макета перед началом перехода
        requestAnimationFrame(() => {
            element.classList.add('show');
        });
    }
}
