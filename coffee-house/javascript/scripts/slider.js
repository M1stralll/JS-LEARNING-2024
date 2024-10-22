import { arrFavoriteCoffe } from "../variables/favorite.variable.js";

const container = document.querySelector(".favorite__coffee-container");
let count = 0;
let translate = 0;
let startX = 0;
let countX = 0;
let isSwiping = false;

selectCard();
const cardFirst = createCard(arrFavoriteCoffe[0]);
const cardSecond = createCard(arrFavoriteCoffe[1]);
const cardThird = createCard(arrFavoriteCoffe[2]);

container.appendChild(cardFirst);
container.appendChild(cardSecond);
container.appendChild(cardThird);

function createCard(card) {
  const coffee = document.createElement("div");
  coffee.className = "favorite-coffee";
  const cardImg = document.createElement("img");
  cardImg.className = "favorite-picture";
  cardImg.setAttribute("alt", "card");
  cardImg.src = card.img;

  const cardName = document.createElement("h3");
  cardName.className = "favorite-name";
  cardName.textContent = card.name;

  const cardDescription = document.createElement("p");
  cardDescription.className = "favorite-description";
  cardDescription.textContent = card.description;

  const cardPrice = document.createElement("h3");
  cardPrice.className = "favorite-price";
  cardPrice.textContent = card.price;

  coffee.appendChild(cardImg);
  coffee.appendChild(cardName);
  coffee.appendChild(cardDescription);
  coffee.appendChild(cardPrice);

  return coffee;
}

document.querySelector(".favorite__arrow-right").onclick = function () {
  if (count < 2) {
    translate -= 480;
    document.querySelectorAll(".favorite-coffee").forEach(function (element) {
      element.style.transform = `translateX(${translate}px)`;
    });

    count++;
  } else {
    translate = 0;
    document.querySelectorAll(".favorite-coffee").forEach(function (element) {
      element.style.transform = `translateX(${translate}px)`;
    });
    count = 0;
  }
};

document.querySelector(".favorite__arrow-left").onclick = function () {
  if (count > 0) {
    translate += 480;
    count--;
    document.querySelectorAll(".favorite-coffee").forEach(function (element) {
      element.style.transform = `translateX(${translate}px)`;
    });
  } else {
    count = 2;
    translate = -960;
    document.querySelectorAll(".favorite-coffee").forEach(function (element) {
      element.style.transform = `translateX(${translate}px)`;
    });
  }
};

document.querySelector(".controls-first").onclick = function () {
  changeButtomButtons(0, 0, 0);
};

document.querySelector(".controls-second").onclick = function () {
  changeButtomButtons(-316, -480, 1);
};

document.querySelector(".controls-third").onclick = function () {
  changeButtomButtons(-632, -960, 2);
};

function changeButtomButtons(phone, laptom, check) {
  let sizeWindow = window.matchMedia("(max-width: 767px)");

  if (sizeWindow.matches == true) {
    count = check;
    document.querySelectorAll(".favorite-coffee").forEach(function (element) {
      element.style.transform = `translateX(${phone}px)`;
    });
  } else {
    count = check;
    document.querySelectorAll(".favorite-coffee").forEach(function (element) {
      element.style.transform = `translateX(${laptom}px)`;
    });
  }
}

document.addEventListener("click", function (event) {
  if (
    event.target.className.startsWith("favorite") ||
    event.target.className.startsWith("controls")
  ) {
    selectCard();
  }
});

function selectCard() {
  const controls = document.querySelector(".favorite__controls").children;

  for (let i = 0; i < controls.length; i++) {
    controls[i].classList.remove("controls-selected");
  }

  if (count === 0) {
    controls[0].classList.add("controls-selected");
  } else if (count === 1) {
    controls[1].classList.add("controls-selected");
  } else if (count === 2) {
    controls[2].classList.add("controls-selected");
  }
}

container.addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
  isSwiping = true;
});

container.addEventListener("touchmove", function (event) {
  if (isSwiping) {
    countX = event.touches[0].clientX;
  }
});

container.addEventListener("touchend", function () {
  let sizeWindow = window.matchMedia("(max-width: 767px)");

  if (sizeWindow.matches == true) {
    if (isSwiping) {
      let changeX = startX - countX;
      console.log(Math.abs(changeX));

      if (Math.abs(changeX) > 50) {
        if (changeX > 0) {
          if (count < 2) {
            translate -= 316;
            document
              .querySelectorAll(".favorite-coffee")
              .forEach(function (element) {
                element.style.transform = `translateX(${translate}px)`;
              });

            count++;
          } else {
            translate = 0;
            document
              .querySelectorAll(".favorite-coffee")
              .forEach(function (element) {
                element.style.transform = `translateX(${translate}px)`;
              });
            count = 0;
          }
        } else {
          if (count > 0) {
            translate += 316;
            count--;
            document
              .querySelectorAll(".favorite-coffee")
              .forEach(function (element) {
                element.style.transform = `translateX(${translate}px)`;
              });
          } else {
            count = 2;
            translate = -632;
            document
              .querySelectorAll(".favorite-coffee")
              .forEach(function (element) {
                element.style.transform = `translateX(${translate}px)`;
              });
          }
        }
      }
      selectCard();
    }
  } else {
    return;
  }
  isSwiping = false;
});
