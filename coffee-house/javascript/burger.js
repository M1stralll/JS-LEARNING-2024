const burgerIcon = document.querySelector(".header-burger");
const burger = document.querySelector(".header-burgerMenu");

burgerIcon.addEventListener("click", toggleMobileMenu);

function scrollToTop() {
    window.scrollTo({top: 0});
}

function toggleMobileMenu() {
    if (getComputedStyle(burger).display == 'none') {
        document.querySelector(".line:nth-child(1)").classList.toggle("line-bottom");
        document.querySelector(".line:nth-child(2)").classList.toggle("line-top");
        burger.style.display = 'flex';
        burger.classList.remove('header-burgerMenu-noactive');
        document.querySelector(".header-burgerMenu").classList.toggle("header-burgerMenu-active");
        window.addEventListener('scroll', scrollToTop);
        
    } else {
        document.querySelector(".line:nth-child(1)").classList.toggle("line-bottom");
        document.querySelector(".line:nth-child(2)").classList.toggle("line-top");
        window.removeEventListener('scroll', scrollToTop);
        burger.classList.remove('header-burgerMenu-active');
        document.querySelector(".header-burgerMenu").classList.toggle("header-burgerMenu-noactive");

        setTimeout(() => {
            burger.style.display = 'none';
        }, 900);
    }

}
