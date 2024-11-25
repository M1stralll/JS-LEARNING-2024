export class StyleChanger {
  private bmwButton: HTMLButtonElement | null;
  private imgElement: HTMLImageElement | null;
  private blockElement: HTMLElement | null;
  private titleElement: HTMLElement | null;
  private inputElement: HTMLElement | null;
  private buttonElement: HTMLButtonElement | null;

  constructor() {
    this.bmwButton = document.querySelector(".main__style");
    this.imgElement = document.querySelector(".main__img");
    this.blockElement = document.querySelector(".main__enter-section");
    this.titleElement = document.querySelector(".main__enter-title");
    this.inputElement = document.querySelector(".main__enter-input");
    this.buttonElement = document.querySelector(".main__enter-button");

    this.addEventListeners();
  }

  private addEventListeners(): void {
    if (this.bmwButton) {
      this.bmwButton.addEventListener("click", this.toggleStyles.bind(this));
    }
  }

  private toggleStyles(): void {
    this.imgElement?.classList.toggle("main__img-BMW");
    this.blockElement?.classList.toggle("main__enter-section-BMW");
    this.titleElement?.classList.toggle("main__enter-title-BMW");
    this.inputElement?.classList.toggle("main__enter-input-BMW");
    this.buttonElement?.classList.toggle("main__enter-button-BMW");
    this.bmwButton?.classList.toggle("bmwButton-BMW");
    this.toggleImageSource();
  }

  private toggleImageSource(): void {
    if (this.imgElement) {
      if (
        this.imgElement.src ===
        "http://127.0.0.1:5500/puzzle-ts/src/assets/images/mountin.jpg"
      ) {
        this.imgElement.src = "/puzzle-ts/src/assets/images/BMW.jpg";
        if (this.bmwButton) this.bmwButton.textContent = "Mountin mode";
      } else {
        this.imgElement.src = "/puzzle-ts/src/assets/images/mountin.jpg";
        if (this.bmwButton) this.bmwButton.textContent = "BMW mode";
      }
    }
  }
}
