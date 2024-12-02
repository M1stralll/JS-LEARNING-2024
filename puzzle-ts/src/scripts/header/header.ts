import { StyleChanger } from "../registration/changeStyle";
import { RegistrationPage } from "../registration/registrationPage";
import { regestration } from "../main";

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
    const link: HTMLAnchorElement = document.createElement("a");
    link.className = "header__link-word";
    link.textContent = "Login";
    this.linkSection.append(link);
    
    let styleChangedHeader: boolean = false;

    link.addEventListener("click", async () => {
      document.querySelector("main")!.replaceChildren();
      document.querySelector("main")!.appendChild(regestration);
    });
  }

  public renderHeader() {
    this.addLinks();
    document.querySelector("header")!.replaceChildren();
    document.querySelector("header")!.appendChild(this.headerSection);
  }
}
