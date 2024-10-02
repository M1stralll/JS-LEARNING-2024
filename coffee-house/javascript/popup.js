import { arrProduct } from "./variables/product.const.js";

let currentPopupIndex = null;

let counterSmall = 0;

let counterMedium = 0;

let counterLarge = 0;

let counterFirst = 0;

let counterSecond = 0;

let counterThird = 0;

let sizeWindow = window.matchMedia("(max-width: 767px)")


document.querySelector(".popup__button-small").classList.toggle("menu-selected");

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("menu-card-img")) {


        const productCardElement = event.target.closest("div");

        const menuItem = productCardElement.querySelector(".menu-item");

        const productTitle = menuItem.textContent.trim().toLowerCase();

        const productData = arrProduct.find(
            (product) => product.name.toLowerCase() === productTitle,
        );

        currentPopupIndex = arrProduct.findIndex(
            (product) => product.name.toLowerCase() === productTitle,
        );

        const popupTitle = document.querySelector(".popup__title");
        const popupImg = document.querySelector(".popup__img");
        const popupDescription = document.querySelector(".popup__description");
        const popupTotal = document.querySelector(".total__price");
        const popupSiseS = document.querySelector(".button-small-size");
        const popupSiseM = document.querySelector(".button-medium-size");
        const popupSiseL = document.querySelector(".button-large-size");
        const popupAdditivesF = document.querySelector(".button-first-additives");
        const popupAdditivesS = document.querySelector(".button-second-additives");
        const popupAdditivesT = document.querySelector(".button-third-additives");

        if (popupTitle) {
            popupTitle.textContent = productData.name;
        }

        if (popupImg) {
            popupImg.src = productData.img;
        }

        if (popupDescription) {
            popupDescription.textContent = productData.description;
        }

        if (popupTotal) {
            popupTotal.textContent = "$" + productData.price;
        }

        if (popupSiseS) {
            popupSiseS.textContent = productData.sizes.s.size;
        }

        if (popupSiseM) {
            popupSiseM.textContent = productData.sizes.m.size;
        }

        if (popupSiseL) {
            popupSiseL.textContent = productData.sizes.l.size;
        }

        if (popupAdditivesF) {
            popupAdditivesF.textContent = productData.additives[0].name;
        }

        if (popupAdditivesS) {
            popupAdditivesS.textContent = productData.additives[1].name;
        }

        if (popupAdditivesT) {
            popupAdditivesT.textContent = productData.additives[2].name;
        }

        const popup = document.querySelector(".menu__popup");
        const burger = document.querySelector(".header__burger");
        const logo = document.querySelector(".header__logo");
        if (popup) {
            popup.style.display = "flex";
            if (sizeWindow.matches !== false) {
                burger.style.display = "none";
                logo.style.display = "none";
            }

        }

    }


    if (event.target.classList.contains("popup__buttoncancel")) {
        const popup = document.querySelector(".menu__popup");
        const burger = document.querySelector(".header__burger");
        const logo = document.querySelector(".header__logo");

        if (popup) {
            popup.style.display = "none";
            counterSmall = 0;
            counterMedium = 0;
            counterLarge = 0;
            counterFirst = 0;
            counterSecond = 0;
            counterThird = 0;

            if (document.querySelector(".popup__button-first").classList.contains('menu-selected')) {
                document.querySelector(".popup__button-first").classList.toggle("menu-selected");
            }

            if (document.querySelector(".popup__button-second").classList.contains('menu-selected')) {
                document.querySelector(".popup__button-second").classList.toggle("menu-selected");
            }

            if (document.querySelector(".popup__button-third").classList.contains('menu-selected')) {
                document.querySelector(".popup__button-third").classList.toggle("menu-selected");
            }

            if(document.querySelector(".popup__button-medium").classList.contains('menu-selected') ) {

                document.querySelector(".popup__button-small").classList.toggle("menu-selected");
    
                document.querySelector(".popup__button-medium").classList.toggle("menu-selected");
    
            } else if (document.querySelector(".popup__button-large").classList.contains('menu-selected')) {
    
                document.querySelector(".popup__button-small").classList.toggle("menu-selected");
                
                document.querySelector(".popup__button-large").classList.toggle("menu-selected");
    
            }
            
            if (sizeWindow.matches !== false) {
                burger.style.display = "flex";
                logo.style.display = "flex";
            }
        }

        currentPopupIndex = null;
    }

    const backgroundPopupSelector = `.menu__popup`;
    if (event.target.matches(backgroundPopupSelector)) {
        const popup = document.querySelector(".menu__popup");
        const burger = document.querySelector(".header__burger");
        const logo = document.querySelector(".header__logo");

        if (popup && event.target === popup) {
            popup.style.display = "none";
            counterSmall = 0;
            counterMedium = 0;
            counterLarge = 0;
            counterFirst = 0;
            counterSecond = 0;
            counterThird = 0;

            if (document.querySelector(".popup__button-first").classList.contains('menu-selected')) {
                document.querySelector(".popup__button-first").classList.toggle("menu-selected");
            }

            if (document.querySelector(".popup__button-second").classList.contains('menu-selected')) {
                document.querySelector(".popup__button-second").classList.toggle("menu-selected");
            }

            if (document.querySelector(".popup__button-third").classList.contains('menu-selected')) {
                document.querySelector(".popup__button-third").classList.toggle("menu-selected");
            }

            if(document.querySelector(".popup__button-medium").classList.contains('menu-selected') ) {

                document.querySelector(".popup__button-small").classList.toggle("menu-selected");
    
                document.querySelector(".popup__button-medium").classList.toggle("menu-selected");
    
            } else if (document.querySelector(".popup__button-large").classList.contains('menu-selected')) {
    
                document.querySelector(".popup__button-small").classList.toggle("menu-selected");
                
                document.querySelector(".popup__button-large").classList.toggle("menu-selected");
    
            }

            if (sizeWindow.matches !== false) {
                burger.style.display = "flex";
                logo.style.display = "flex";
            }

        }

        currentPopupIndex = null;
    }
});





document.addEventListener("click", function (button) {
    if (button.target.classList.contains("popup__button-small")) {

        const popupTotal = document.querySelector(".total__price");

        const total = popupTotal.textContent

        let price = parseFloat(total.replace("$", ""));
        add();

        function add() {
            counterSmall++;

            const addprice = 0;



            if (counterSmall % 2 === 0) {
                price = price - addprice;
            } else {
                price = price + addprice;
            }

            console.log(counterSmall)

            if (counterMedium !== 0) {
                price = price - 0.50;
                counterMedium = 0;
            } else if (counterLarge !== 0) {
                price = price - 1;
                counterLarge = 0;
            }

            const finalTotal = "$" + price.toFixed(2);

            popupTotal.textContent = finalTotal;
        }

        if(document.querySelector(".popup__button-medium").classList.contains('menu-selected') ) {

            document.querySelector(".popup__button-small").classList.toggle("menu-selected");

            document.querySelector(".popup__button-medium").classList.toggle("menu-selected");

        } else if (document.querySelector(".popup__button-large").classList.contains('menu-selected')) {

            document.querySelector(".popup__button-small").classList.toggle("menu-selected");
            
            document.querySelector(".popup__button-large").classList.toggle("menu-selected");

        }

    }

    if (button.target.classList.contains("popup__button-medium")) {

        const popupTotal = document.querySelector(".total__price");

        const total = popupTotal.textContent

        let price = parseFloat(total.replace("$", ""));
        add();

        function add() {
            counterMedium++;

            const addprice = 0.50;



            if (counterMedium % 2 === 0) {
                price = price - addprice;
            } else {
                price = price + addprice;
            }

            console.log(counterMedium)

            if (counterSmall !== 0) {
                price = price - 0;
                counterSmall = 0;
            } else if (counterLarge !== 0) {
                price = price - 1;
                counterLarge = 0;
            }

            const finalTotal = "$" + price.toFixed(2);

            popupTotal.textContent = finalTotal;
        }

        if(document.querySelector(".popup__button-small").classList.contains('menu-selected') ) {

            document.querySelector(".popup__button-small").classList.toggle("menu-selected");

            document.querySelector(".popup__button-medium").classList.toggle("menu-selected");

        } else if (document.querySelector(".popup__button-large").classList.contains('menu-selected')) {

            document.querySelector(".popup__button-medium").classList.toggle("menu-selected");
            
            document.querySelector(".popup__button-large").classList.toggle("menu-selected");

        }

    }

    if (button.target.classList.contains("popup__button-large")) {

        const popupTotal = document.querySelector(".total__price");

        const total = popupTotal.textContent

        let price = parseFloat(total.replace("$", ""));
        add();

        function add() {
            counterLarge++;

            const addprice = 1;



            if (counterLarge % 2 === 0) {
                price = price - addprice;
            } else {
                price = price + addprice;
            }

            console.log(counterLarge)

            if (counterSmall !== 0) {
                price = price - 0;
                counterSmall = 0;
            } else if (counterMedium !== 0) {
                price = price - 0.50;
                counterMedium = 0;
            }

            const finalTotal = "$" + price.toFixed(2);

            popupTotal.textContent = finalTotal;
        }

        if(document.querySelector(".popup__button-small").classList.contains('menu-selected') ) {

            document.querySelector(".popup__button-small").classList.toggle("menu-selected");

            document.querySelector(".popup__button-large").classList.toggle("menu-selected");

        } else if (document.querySelector(".popup__button-medium").classList.contains('menu-selected')) {

            document.querySelector(".popup__button-medium").classList.toggle("menu-selected");

            document.querySelector(".popup__button-large").classList.toggle("menu-selected");

        }

    }

    if (button.target.classList.contains("popup__button-first")) {

        const popupTotal = document.querySelector(".total__price");

        const total = popupTotal.textContent

        let price = parseFloat(total.replace("$", ""));
        add();

        function add() {
            counterFirst++;

            const addprice = 0.50;



            if (counterFirst % 2 === 0) {
                price = price - addprice;
                document.querySelector(".popup__button-first").classList.toggle("menu-selected");
            } else {
                price = price + addprice;
                document.querySelector(".popup__button-first").classList.toggle("menu-selected");
            }

            console.log(counterFirst)


            const finalTotal = "$" + price.toFixed(2);

            popupTotal.textContent = finalTotal;
        }

    }

    if (button.target.classList.contains("popup__button-second")) {

        const popupTotal = document.querySelector(".total__price");

        const total = popupTotal.textContent

        let price = parseFloat(total.replace("$", ""));
        add();

        function add() {
            counterSecond++;

            const addprice = 0.50;



            if (counterSecond % 2 === 0) {
                price = price - addprice;
                document.querySelector(".popup__button-second").classList.toggle("menu-selected");
            } else {
                price = price + addprice;
                document.querySelector(".popup__button-second").classList.toggle("menu-selected");

            }

            console.log(counterSecond)


            const finalTotal = "$" + price.toFixed(2);

            popupTotal.textContent = finalTotal;
        }

    }

    if (button.target.classList.contains("popup__button-third")) {

        const popupTotal = document.querySelector(".total__price");

        const total = popupTotal.textContent

        let price = parseFloat(total.replace("$", ""));
        add();

        function add() {
            counterThird++;

            const addprice = 0.50;



            if (counterThird % 2 === 0) {
                price = price - addprice;
                document.querySelector(".popup__button-third").classList.toggle("menu-selected");
            } else {
                price = price + addprice;
                document.querySelector(".popup__button-third").classList.toggle("menu-selected");
            }

            console.log(counterThird)


            const finalTotal = "$" + price.toFixed(2);

            popupTotal.textContent = finalTotal;
        }

    }

});

