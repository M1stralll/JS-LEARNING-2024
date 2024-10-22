const burgerIcon = document.querySelector(".header__burger");
const burger = document.querySelector(".header__burger-menu");

burgerIcon.addEventListener("click", toggleMobileMenu);

function scrollToTop() {
    window.scrollTo({ top: 0 });
}

function toggleMobileMenu() {
    if (getComputedStyle(burger).display == "none") {
        document.querySelector(".line").classList.toggle("line-bottom");
        document.querySelector(".line:nth-child(2)").classList.toggle("line-top");
        burger.classList.remove("burger-visuble");
        burger.classList.remove("header__burger-menu-noactive");
        document
            .querySelector(".header__burger-menu")
            .classList.toggle("header__burger-menu-active");
        window.addEventListener("scroll", scrollToTop);
    } else {
        document
            .querySelector(".line:nth-child(1)")
            .classList.toggle("line-bottom");
        document.querySelector(".line:nth-child(2)").classList.toggle("line-top");
        window.removeEventListener("scroll", scrollToTop);
        burger.classList.remove("header__burger-menu-active");
        document
            .querySelector(".header__burger-menu")
            .classList.toggle("header__burger-menu-noactive");

        setTimeout(() => {
            burger.classList.add("burger-visuble");
        }, 900);
    }
}
