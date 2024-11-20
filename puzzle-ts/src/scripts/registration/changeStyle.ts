export function changeStyle() {

const bmwButton = document.querySelector<HTMLButtonElement>(".main__style");
const imgElement = document.querySelector<HTMLImageElement>(".main__img");
const blockElement = document.querySelector<HTMLImageElement>(".main__enter-section");
const titleElement = document.querySelector<HTMLImageElement>(".main__enter-title");
const inputElement = document.querySelector<HTMLImageElement>(".main__enter-input");
const buttonElement = document.querySelector<HTMLImageElement>(".main__enter-button");

if (bmwButton) {
  bmwButton.addEventListener("click", () => {
    imgElement?.classList.toggle("main__img-BMW");
    blockElement?.classList.toggle("main__enter-section-BMW");
    titleElement?.classList.toggle("main__enter-title-BMW");
    inputElement?.classList.toggle("main__enter-input-BMW");
    buttonElement?.classList.toggle("main__enter-button-BMW");
    bmwButton?.classList.toggle("bmwButton-BMW");
    if (imgElement) {
        if (imgElement.src === "http://127.0.0.1:5500/puzzle-ts/src/assets/images/mountin.jpg") {
            imgElement.src = "/puzzle-ts/src/assets/images/BMW.jpg";
            bmwButton.textContent = "Mountin mode";
        } else { 
            imgElement.src = "/puzzle-ts/src/assets/images/mountin.jpg";
            bmwButton.textContent = "BMW mode";
        }
    }
    


  });
}

}