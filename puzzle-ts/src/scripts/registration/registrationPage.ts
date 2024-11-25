import { startaPage } from "../start/startPage";

export class registrationPage {
  private mainRegestration: HTMLDivElement;
  private mainEnter: HTMLDivElement;
  private mainEnterSection: HTMLDivElement;
  private changePageStart: startaPage;
  private buttonLogin: HTMLButtonElement | null = null;

  constructor() {
    this.changePageStart = new startaPage();

    this.mainRegestration = document.createElement("div");
    this.mainRegestration.className = "main";

    this.mainEnter = document.createElement("div");
    this.mainEnter.className = "main__enter";

    this.mainEnterSection = document.createElement("div");
    this.mainEnterSection.className = "main__enter-section";
    this.mainEnter.append(this.mainEnterSection);
  }

  public addBacroundIMG(srcContent: string, altContent: string): void {
    const bacgroundIMG: HTMLImageElement = document.createElement("img");
    bacgroundIMG.className = "main__img";
    bacgroundIMG.src = srcContent;
    bacgroundIMG.alt = altContent;
    this.mainRegestration.append(bacgroundIMG);
    this.mainRegestration.append(this.mainEnter);
  }

  public addText(textContent: string): void {
    const titleLogin: HTMLElement = document.createElement("h2");
    titleLogin.className = "main__enter-title";
    titleLogin.textContent = textContent;
    this.mainEnterSection.append(titleLogin);
  }

  public addInput(): void {
    const inputLogin: HTMLInputElement = document.createElement("input");
    inputLogin.className = "main__enter-input";
    inputLogin.placeholder = "Enter your name";
    inputLogin.type = "text";
    this.mainEnterSection.append(inputLogin);
  }

  public addButtonLogin(textButton: string): void {
    this.buttonLogin = document.createElement("button");
    this.buttonLogin.className = "main__enter-button";
    this.buttonLogin.textContent = textButton;
    this.mainEnterSection.append(this.buttonLogin);
  }

  public addEventListeners(): void {
    this.buttonLogin!.addEventListener("click", () => {
      this.changePageStart.addBacroundIMG(
        "/puzzle-ts/src/assets/images/startPage.jpg",
        "Background"
      );

      this.changePageStart.addTitle("ENGLISH PUZZLE");

      this.changePageStart.addDescription(
        "Click on words, collect phrases. Words can be drag and drop. Select tooltips in the menu"
      );

      this.changePageStart.addButton("Start");

      this.changePageStart.renderStart();
      console.log("I work");
    });
  }

  public addButtonStyle(textButton: string): void {
    const buttonStyle: HTMLButtonElement = document.createElement("button");
    buttonStyle.className = "main__style";
    buttonStyle.textContent = textButton;
    this.mainEnterSection.append(buttonStyle);
  }

  public renderRegistration(): void {
    document.querySelector("main")!.replaceChildren();
    document.querySelector("main")!.appendChild(this.mainRegestration);
  }
}
