import { arrProduct } from "../variables/product.variable.js";

let currentPopupIndex;
let sizeWindow = window.matchMedia("(max-width: 767px)");
const container = document.querySelector(".popup");
const popupCard = document.createElement("div");

document
  .querySelector(".menu__products")
  .addEventListener("click", function (event) {
    createPopupForProduct(event.target.closest(".menu-card"));
  });

function createPopupForProduct(menuCard) {
  const productCardElement = menuCard.closest("div");

  const menuItem = productCardElement.querySelector(".menu-item");
  const productTitle = menuItem.textContent.trim().toLowerCase();

  const productData = arrProduct.find(
    (product) => product.name.toLowerCase() === productTitle
  );

  currentPopupIndex = arrProduct.findIndex(
    (product) => product.name.toLowerCase() === productTitle
  );

  createPopup(productData);
}

function removeSelected(buttonContainer) {
  buttonContainer.querySelectorAll("button.menu-selected").forEach((child) => {
    child.classList.toggle("menu-selected");
  });
}

function selectAdditives(button) {
  const popupTotal = document.querySelector(".total__price");
  const total = popupTotal.textContent;
  let price = parseFloat(total.replace("$", ""));

  const addprice = 0.5;

  price = button.classList.contains("menu-selected")
    ? price + addprice
    : price - addprice;

  const finalTotal = "$" + price.toFixed(2);

  popupTotal.textContent = finalTotal;
}

function increaseValue(valuePrice, buttonContainer) {
  const popupTotal = document.querySelector(".total__price");
  let price = parseFloat(popupTotal.textContent.replace("$", ""));

  for (let i = 0; i < buttonContainer.children.length; i++) {
    const child = buttonContainer.children[i];

    if (child.classList.contains("menu-selected")) {
      if (i === 0) {
        price -= 0;
      } else if (i === 1) {
        price -= 0.5;
      } else if (i === 2) {
        price -= 1.0;
      }
    }
  }

  price += valuePrice;

  const finalTotal = "$" + price.toFixed(2);
  popupTotal.textContent = finalTotal;
}

function createButton(text) {
  const button = document.createElement("button");
  button.className = `popup__button `;

  const buttonActive = document.createElement("span");
  buttonActive.className = "button-active";
  buttonActive.textContent = text;

  const buttonSize = document.createElement("span");
  buttonSize.className = `button-size`;

  button.appendChild(buttonActive);
  button.appendChild(buttonSize);

  return button;
}

function createPopup(productData) {
  const popupCard = document.createElement("div");
  popupCard.className = "menu__popup";

  const popupBlock = document.createElement("div");
  popupBlock.className = "popup__block";

  const popupImg = document.createElement("img");
  popupImg.className = "popup__img";
  popupImg.setAttribute("alt", "Product");
  popupImg.src = productData.img;

  const popupInformation = document.createElement("div");
  popupInformation.className = "popup__information";

  const popupTitle = document.createElement("h2");
  popupTitle.className = "popup__title";
  popupTitle.textContent = productData.name;

  const popupDescription = document.createElement("p");
  popupDescription.className = "popup__description";
  popupDescription.textContent = productData.description;

  const popupSize = document.createElement("div");
  popupSize.className = "popup__size";

  const popupSizeTitle = document.createElement("p");
  popupSizeTitle.className = "popup__size-title";
  popupSizeTitle.textContent = "Size";

  const popupButtonSize = document.createElement("div");
  popupButtonSize.className = "popup__button-size";

  const buttonSmall = createButton("S");
  const buttonMedium = createButton("M");
  const buttonLarge = createButton("L");

  buttonSmall.querySelector(".button-size").textContent =
    productData.sizes.s.size;
  buttonMedium.querySelector(".button-size").textContent =
    productData.sizes.m.size;
  buttonLarge.querySelector(".button-size").textContent =
    productData.sizes.l.size;

  buttonSmall.addEventListener("click", () => {
    increaseValue(Number(productData.sizes.s.addPrice), popupButtonSize);
    removeSelected(popupButtonSize);
    buttonSmall.classList.toggle("menu-selected");
  });

  buttonMedium.addEventListener("click", () => {
    increaseValue(Number(productData.sizes.m.addPrice), popupButtonSize);
    removeSelected(popupButtonSize);
    buttonMedium.classList.toggle("menu-selected");
  });

  buttonLarge.addEventListener("click", () => {
    increaseValue(Number(productData.sizes.l.addPrice), popupButtonSize);
    removeSelected(popupButtonSize);
    buttonLarge.classList.toggle("menu-selected");
  });

  popupButtonSize.appendChild(buttonSmall);
  popupButtonSize.appendChild(buttonMedium);
  popupButtonSize.appendChild(buttonLarge);

  popupSize.appendChild(popupSizeTitle);
  popupSize.appendChild(popupButtonSize);

  const popupAdditives = document.createElement("div");
  popupAdditives.className = "popup__additives";

  const popupAdditivesTitle = document.createElement("h2");
  popupAdditivesTitle.className = "popup__additives-title";
  popupAdditivesTitle.textContent = "Additives";

  const popupButtonAdditives = document.createElement("div");
  popupButtonAdditives.className = "popup__button-additives";

  const buttonFirst = createButton("1");
  const buttonSecond = createButton("2");
  const buttonThird = createButton("3");

  buttonFirst.querySelector(".button-size").textContent =
    productData.additives[0].name;
  buttonSecond.querySelector(".button-size").textContent =
    productData.additives[1].name;
  buttonThird.querySelector(".button-size").textContent =
    productData.additives[2].name;

  buttonFirst.addEventListener("click", () => {
    buttonFirst.classList.toggle("menu-selected");
    selectAdditives(buttonFirst);
  });

  buttonSecond.addEventListener("click", () => {
    buttonSecond.classList.toggle("menu-selected");
    selectAdditives(buttonSecond);
  });

  buttonThird.addEventListener("click", () => {
    buttonThird.classList.toggle("menu-selected");
    selectAdditives(buttonThird);
  });

  popupButtonAdditives.appendChild(buttonFirst);
  popupButtonAdditives.appendChild(buttonSecond);
  popupButtonAdditives.appendChild(buttonThird);

  popupAdditives.appendChild(popupAdditivesTitle);
  popupAdditives.appendChild(popupButtonAdditives);

  const popupTotal = document.createElement("div");
  popupTotal.className = "popup__total";

  const popupTotalTitle = document.createElement("h2");
  popupTotalTitle.className = "popup__total-title";
  popupTotalTitle.textContent = "Total:";

  const totalPrice = document.createElement("h2");
  totalPrice.className = "total__price";
  totalPrice.textContent = "$" + productData.price;

  popupTotal.appendChild(popupTotalTitle);
  popupTotal.appendChild(totalPrice);

  const popupInfo = document.createElement("div");
  popupInfo.className = "popup__info";

  const infoImg = document.createElement("img");
  infoImg.setAttribute("src", "/coffee-house/menu/image/menu/info-empty.svg");
  infoImg.setAttribute("alt", "Info");

  const infoDescription = document.createElement("h3");
  infoDescription.className = "info__description";
  infoDescription.textContent =
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";

  popupInfo.appendChild(infoImg);
  popupInfo.appendChild(infoDescription);

  const buttonCancel = document.createElement("button");
  buttonCancel.className = "popup__buttoncancel";

  const buttonCancelText = document.createElement("span");
  buttonCancelText.className = "popup__buttoncancel-text";
  buttonCancelText.textContent = "Close";

  buttonCancel.appendChild(buttonCancelText);

  popupInformation.appendChild(popupTitle);
  popupInformation.appendChild(popupDescription);
  popupInformation.appendChild(popupSize);
  popupInformation.appendChild(popupAdditives);
  popupInformation.appendChild(popupTotal);
  popupInformation.appendChild(popupInfo);
  popupInformation.appendChild(buttonCancel);

  popupBlock.appendChild(popupImg);
  popupBlock.appendChild(popupInformation);
  popupCard.appendChild(popupBlock);

  container.appendChild(popupCard);

  document.body.style.overflow = "hidden";

  buttonSmall.classList.toggle("menu-selected");

  document.body.style.overflow = "hidden";

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

  document
    .querySelector(".popup__buttoncancel")
    .addEventListener("click", () => closePopup());

  document.querySelector(".menu__popup").addEventListener("click", (event) => {
    if (event.target === document.querySelector(".menu__popup")) {
      closePopup();
    }
  });
}

function closePopup() {
  const popup = document.querySelector(".menu__popup");
  const burger = document.querySelector(".header__burger");
  const logo = document.querySelector(".header__logo");

  if (popup) {
    container.replaceChildren();
    document.body.style.overflow = "auto";

    if (sizeWindow.matches !== false) {
      burger.style.display = "flex";
      logo.style.display = "flex";
    }
  }

  currentPopupIndex = null;
}
