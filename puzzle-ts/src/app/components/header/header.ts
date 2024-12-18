import { RegistrationPage } from "../../modules/registration/registrationPage";
import { registration } from "../../../index";

export class Header {
  private headerSection: HTMLDivElement;
  private linkSection: HTMLDivElement;
  private linkLogin: RegistrationPage;

  constructor() {
    this.linkLogin = new RegistrationPage();

    this.headerSection = document.createElement("div");
    this.headerSection.className = "header__section";

    this.linkSection = document.createElement("div");
    this.linkSection.className = "header__link";
    this.headerSection.append(this.linkSection);
  }

  private addLinks() {
    const linkAuth: HTMLAnchorElement = document.createElement("a");
    const linkExit: HTMLAnchorElement = document.createElement("a");
    linkAuth.className = "header__link-word";
    linkExit.className = "header__link-word";
    linkAuth.textContent = "Login";
    linkExit.textContent = "Exit";
    this.linkSection.append(linkAuth);
    this.linkSection.append(linkExit);

    linkAuth.addEventListener("click", async () => {
      document.querySelector("main")!.replaceChildren();
      document.querySelector("main")!.appendChild(registration);
    });
    
    linkExit.addEventListener("click", async () => {
      localStorage.clear();
      location.reload();
    });
  }

  public renderHeader() {
    this.addLinks();
    document.querySelector("header")!.replaceChildren();
    document.querySelector("header")!.appendChild(this.headerSection);
  }
}
