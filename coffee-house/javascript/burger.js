const burgerIcon = document.querySelector(".header-burger");
const burger = document.querySelector(".header-burgerMenu");

burgerIcon.addEventListener("click", toggleMobileMenu);

function scrollToTop() {
    window.scrollTo({top: 0});
}

function toggleMobileMenu() {
    if (getComputedStyle(burger).display == 'none') {
        burger.style.display = 'flex';
        burger.classList.remove('header-burgerMenu-noactive');
        document.querySelector(".header-burgerMenu").classList.toggle("header-burgerMenu-active");
        window.addEventListener('scroll', scrollToTop);
    } else {
        window.removeEventListener('scroll', scrollToTop);
        burger.classList.remove('header-burgerMenu-active');
        document.querySelector(".header-burgerMenu").classList.toggle("header-burgerMenu-noactive");

        setTimeout(() => {
            burger.style.display = 'none';
        }, 900);
    }

}
