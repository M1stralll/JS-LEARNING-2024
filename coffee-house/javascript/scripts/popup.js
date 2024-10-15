import { arrProduct } from "../variables/product.variable.js";

let currentPopupIndex = null;

let sizeWindow = window.matchMedia("(max-width: 767px)");

document.querySelector(".popup__button-small").classList.toggle("menu-selected");

document.addEventListener("click", function (event) {
  if (event.target.closest(".menu-card")) {
    document.body.style.overflow = "hidden";

    const productCardElement = event.target.closest("div");

    const menuItem = productCardElement.querySelector(".menu-item");

    const productTitle = menuItem.textContent.trim().toLowerCase();

    const productData = arrProduct.find(
      (product) => product.name.toLowerCase() === productTitle
    );

    currentPopupIndex = arrProduct.findIndex(
      (product) => product.name.toLowerCase() === productTitle
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
      popupImg.src = productData.img;
      popupDescription.textContent = productData.description;
      popupTotal.textContent = "$" + productData.price;
      popupSiseS.textContent = productData.sizes.s.size;
      popupSiseM.textContent = productData.sizes.m.size;
      popupSiseL.textContent = productData.sizes.l.size;
      popupAdditivesF.textContent = productData.additives[0].name;
      popupAdditivesS.textContent = productData.additives[1].name;
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
  const backgroundPopupSelector = `.menu__popup`;

  if (
    event.target.classList.contains("popup__buttoncancel") ||
    event.target.matches(backgroundPopupSelector)
  ) {
    const popup = document.querySelector(".menu__popup");
    const burger = document.querySelector(".header__burger");
    const logo = document.querySelector(".header__logo");

    if (popup) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";

      if (sizeWindow.matches !== false) {
        burger.style.display = "flex";
        logo.style.display = "flex";
      }
      resetPopupState();
    }

    currentPopupIndex = null;
  }
});

document.addEventListener("click", function (button) {
  if (button.target.closest(".popup__button-small")) {
    const button = document.querySelector(".popup__button-small");

    increaseValue(0);

    ChangeSelected(button);
  }

  if (button.target.closest(".popup__button-medium")) {
    const button = document.querySelector(".popup__button-medium");

    increaseValue(0.5);

    ChangeSelected(button);
  }

  if (button.target.closest(".popup__button-large")) {
    const button = document.querySelector(".popup__button-large");

    increaseValue(1);

    ChangeSelected(button);
  }

  if (button.target.closest(".popup__button-first")) {
    const buttonselect = document.querySelector(".popup__button-first");
    add(buttonselect);
  }

  if (button.target.closest(".popup__button-second")) {
    const buttonselect = document.querySelector(".popup__button-second");
    add(buttonselect);
  }

  if (button.target.closest(".popup__button-third")) {
    const buttonselect = document.querySelector(".popup__button-third");
    add(buttonselect);
  }
});

function ChangeSelected(selected) {
  const buttonSize = document.querySelector(".popup__button-size");
  if (buttonSize) {
    const selectedButton = buttonSize.querySelector(".menu-selected");

    if (selectedButton) {
      selectedButton.classList.toggle("menu-selected");
      selected.classList.toggle("menu-selected");
    }
  }
}

function add(button) {
  const popupTotal = document.querySelector(".total__price");
  const total = popupTotal.textContent;
  let price = parseFloat(total.replace("$", ""));

  const addprice = 0.5;

  if (button.classList.contains("menu-selected")) {
    price = price - addprice;
    button.classList.toggle("menu-selected");
  } else {
    price = price + addprice;
    button.classList.toggle("menu-selected");
  }

  const finalTotal = "$" + price.toFixed(2);

  popupTotal.textContent = finalTotal;
}

function increaseValue(valuePrice) {
  const popupTotal = document.querySelector(".total__price");

  const total = popupTotal.textContent;

  let price = parseFloat(total.replace("$", ""));

  const container = document.querySelector(".popup__button-size");

  const selectSize = container.querySelector(".menu-selected");

  price += valuePrice;

  if (selectSize.classList[0] === "popup__button-small") {
    price = price - 0;
  } else if (selectSize.classList[0] === "popup__button-medium") {
    price = price - 0.5;
  } else if (selectSize.classList[0] === "popup__button-large") {
    price = price - 1;
  }

  const finalTotal = "$" + price.toFixed(2);

  popupTotal.textContent = finalTotal;
}

function resetPopupState() {
  const buttonSize = document.querySelector(".popup__button-size");
  const buttonSizeChildren = buttonSize.children;

  for (let i = 0; i < buttonSizeChildren.length; i++) {
    buttonSizeChildren[i].classList.remove("menu-selected");
  }

  const primeSize = document.querySelector(".popup__button-small");
  primeSize.classList.add("menu-selected");

  const activeButton = document.querySelector(".popup__button-additives");
  const activeButtonChildren = activeButton.children;

  for (let i = 0; i < activeButtonChildren.length; i++) {
    activeButtonChildren[i].classList.remove("menu-selected");
  }

  const popupTotal = document.querySelector(".total__price");
  const initialPrice = arrProduct[currentPopupIndex].price;
  popupTotal.textContent = "$" + initialPrice;
}
