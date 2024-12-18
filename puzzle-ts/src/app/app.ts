import { RegistrationPage } from "./modules/registration/registrationPage";
import { StartPage } from "./modules/start/startPage";
import { GamePage } from "./modules/game/gamePage";
import { Header } from "./components/header/header";
import { SavingData } from "./utilits/localSavingData";

export class App {
  private pageBuilder: RegistrationPage;
  private header: Header;
  public registration: HTMLElement;

  constructor() {
    this.pageBuilder = new RegistrationPage();
    this.header = new Header();
    this.registration = this.pageBuilder.renderRegistration(); 
  }

  private renderHeader() {
    this.header.renderHeader(); 
  }

  private renderRegistration() {
    document.querySelector("main")!.appendChild(this.registration);
  }

  public render() {
    this.renderHeader();
    this.renderRegistration();
  }
}

