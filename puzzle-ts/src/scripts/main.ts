import { StyleChanger } from "./registration/changeStyle";
import { registrationPage } from "./registration/registrationPage";
import { startaPage } from "./start/startPage";

const pageBuilder = new registrationPage();

pageBuilder.addBacroundIMG(
  "/puzzle-ts/src/assets/images/mountin.jpg",
  "Background"
);

pageBuilder.addText("What is your name?");

pageBuilder.addInput();

pageBuilder.addButtonLogin("Let's go");

pageBuilder.addEventListeners();

pageBuilder.addButtonStyle("BMW mode");

pageBuilder.renderRegistration();

window.onload = () => {
  new StyleChanger();
};
