import { GamePage } from "../game/gamePage";

export class StartPage {
  private startPage: HTMLDivElement;
  private startPageSection: HTMLDivElement;
  private changePageGame: GamePage;
  private buttonStart: HTMLButtonElement | null = null;

  constructor() {
    this.changePageGame = new GamePage();

    this.startPage = document.createElement("div");
    this.startPage.className = "start";

    this.startPageSection = document.createElement("div");
    this.startPageSection.className = "start__section";
  }

  public addBackgroundIMG(srcContent: string, altContent: string): void {
    const bacgroundIMG: HTMLImageElement = document.createElement("img");
    bacgroundIMG.className = "start__img";
    bacgroundIMG.src = srcContent;
    bacgroundIMG.alt = altContent;
    this.startPage.append(bacgroundIMG);
    this.startPage.append(this.startPageSection);
  }

  public addTitle(titleContent: string): void {
    const startTitle: HTMLElement = document.createElement("h2");
    startTitle.className = "start__title";
    startTitle.textContent = titleContent;
    this.startPageSection.append(startTitle);
  }

  public addDescription(descriptionContent: string): void {
    const startDescription: HTMLElement = document.createElement("h3");
    startDescription.className = "start__description";
    startDescription.textContent = descriptionContent;
    this.startPageSection.append(startDescription);
  }

  public addButtonStart(buttonContent: string): void {
    this.buttonStart = document.createElement("button");
    this.buttonStart.className = "start__button";
    this.buttonStart.textContent = buttonContent;
    this.startPageSection.append(this.buttonStart);
  }

  public addButtonChangeStyle(): void {
    this.changePageGame.addАunctionMenu();
    this.changePageGame.addGameFunction();
    this.changePageGame.addBackgroundIMG(
      "/puzzle-ts/src/assets/images/start/startPage.jpg",
      "Background"
    );
    this.buttonStart!.addEventListener("click", () => {
      this.changePageGame.renderGame();
    });
  }

  public renderStart(): void {
    document.querySelector("main")!.replaceChildren();
    document.querySelector("main")!.appendChild(this.startPage);
  }
}
