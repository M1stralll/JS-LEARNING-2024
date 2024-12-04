import { StyleChanger } from "./registration/changeStyle";
import { RegistrationPage } from "./registration/registrationPage";
import { StartPage } from "./start/startPage";
import { GamePage } from "./game/gamePage";
import { Header } from "./header/header";
import { SavingData } from "./registration/localSavingData";

const pageBuilder = new RegistrationPage();
const header = new Header();

header.renderHeader();

export const regestration:HTMLElement = pageBuilder.renderRegistration();

document.querySelector("main")!.appendChild(regestration);

window.onload = () => {
  new StyleChanger();
};
