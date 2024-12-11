import { StartPage } from "../start/startPage";
import { SavingData } from "../registration/localSavingData";

export class RegistrationPage {
  private mainRegestration: HTMLDivElement;
  private mainEnter: HTMLDivElement;
  private mainEnterSection: HTMLDivElement;
  private changePageStart: StartPage;
  private buttonLogin: HTMLButtonElement | null = null;
  private savingLogin: SavingData;

  constructor() {
    this.changePageStart = new StartPage();
    this.savingLogin = new SavingData();

    this.mainRegestration = document.createElement("div");
    this.mainRegestration.className = "main";

    this.mainEnter = document.createElement("div");
    this.mainEnter.className = "main__enter";

    this.mainEnterSection = document.createElement("div");
    this.mainEnterSection.className = "main__enter-section";
    this.mainEnter.append(this.mainEnterSection);
  }

  public addBackgroundIMG(srcContent: string, altContent: string): void {
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
    const inputName: HTMLInputElement = document.createElement("input");
    const inputSecondName: HTMLInputElement = document.createElement("input");

    inputName.className = "main__enter-input";
    inputSecondName.className = "main__enter-input";

    inputName.placeholder = "Введите ваше имя";
    inputSecondName.placeholder = "Введите ваше фамилию";

    inputName.type = "text";
    inputSecondName.type = "text";

    if (localStorage.getItem("User")) {
      const dataEntranceString: string | null = localStorage.getItem("User");
      const dataEntrance: string[] = dataEntranceString!.split(" ");
      inputName.value = dataEntrance[0];
      inputSecondName.value = dataEntrance[1];
    }

    this.mainEnterSection.append(inputName);
    this.mainEnterSection.append(inputSecondName);

    const validation = (): void => {
      const nameValid = inputName.value.match(/^[A-ZА-Я][a-zA-Zа-яА-Я]{1,29}$/);
      const secondNameValid = inputSecondName.value.match(
        /^[A-ZА-Я][a-zA-Zа-яА-Я]{1,29}$/
      );

      if (nameValid && secondNameValid) {
        const userData: string | null = localStorage.getItem("User");
        let storedName: string;
        let storedSecondName: string;

        if (userData !== null) {
          [storedName, storedSecondName] = userData.split(" ");

          if (
            inputName.value === storedName &&
            inputSecondName.value === storedSecondName
          ) {
            this.buttonLogin?.classList.remove("main__enter-button-error");
            this.buttonLogin?.removeAttribute("disabled");
          } else {
            this.buttonLogin?.classList.add("main__enter-button-error");
            this.buttonLogin?.setAttribute("disabled", "true");
          }
        } else {
          this.buttonLogin?.classList.remove("main__enter-button-error");
          this.buttonLogin?.removeAttribute("disabled");
        }
      } else {
        this.buttonLogin?.classList.add("main__enter-button-error");
        this.buttonLogin?.setAttribute("disabled", "true");
      }
    };

    inputName.addEventListener("input", () => {
      validation();
    });

    inputSecondName.addEventListener("input", () => {
      validation();
    });
  }

  public addButtonLogin(textButton: string): void {
    this.buttonLogin = document.createElement("button");
    this.buttonLogin.className = "main__enter-button";
    this.buttonLogin.textContent = textButton;
    if(localStorage.getItem("User") == null){
      this.buttonLogin?.setAttribute("disabled", "true");
    }
    this.mainEnterSection.append(this.buttonLogin);
  }

  public addEventListeners(): void {
    this.changePageStart.addBackgroundIMG(
      "/puzzle-ts/src/assets/images/start/startPage.jpg",
      "Background"
    );

    this.changePageStart.addTitle("ENGLISH PUZZLE");

    this.changePageStart.addDescription(
      "Click on words, collect phrases. Words can be drag and drop. Select tooltips in the menu"
    );

    this.changePageStart.addButtonStart("Start");

    this.changePageStart.addButtonChangeStyle();
    this.buttonLogin!.addEventListener("click", () => {
      this.savingLogin.savingData();
      this.changePageStart.renderStart();
    });
  }

  public addButtonStyle(textButton: string): void {
    const buttonStyle: HTMLButtonElement = document.createElement("button");
    buttonStyle.className = "main__style";
    buttonStyle.textContent = textButton;
    this.mainEnterSection.append(buttonStyle);
  }

  public renderRegistration() {
    this.addBackgroundIMG(
      "/puzzle-ts/src/assets/images/login/mountin.jpg",
      "Background"
    );

    this.addText("What is your name?");

    this.addInput();

    this.addButtonLogin("Let's go");

    this.addEventListeners();

    this.addButtonStyle("BMW mode");

    document.querySelector("main")!.replaceChildren();
    document.querySelector("main")!.appendChild(this.mainRegestration);
    return this.mainRegestration;
  }
}
