import wordCollectionLevel1 from "../../assets/data/dataGame/wordCollectionLevel1.json";
import wordCollectionLevel2 from "../../assets/data/dataGame/wordCollectionLevel2.json";
import wordCollectionLevel3 from "../../assets/data/dataGame/wordCollectionLevel3.json";
import wordCollectionLevel4 from "../../assets/data/dataGame/wordCollectionLevel4.json";
import wordCollectionLevel5 from "../../assets/data/dataGame/wordCollectionLevel5.json";
import wordCollectionLevel6 from "../../assets/data/dataGame/wordCollectionLevel6.json";

interface WordCollection {
  roundsCount: number;
}

export class GamePage {
  private gamePage: HTMLDivElement;
  private gameField: HTMLDivElement;

  constructor() {
    this.gamePage = document.createElement("div");
    this.gamePage.className = "game";

    this.gameField = document.createElement("div");
    this.gameField.className = "game__field";
  }

  public addBackgroundIMG(srcContent: string, altContent: string): void {
    const bacgroundIMG: HTMLImageElement = document.createElement("img");
    bacgroundIMG.className = "game__img";
    bacgroundIMG.src = srcContent;
    bacgroundIMG.alt = altContent;
    this.gamePage.append(bacgroundIMG);
    this.gamePage.append(this.gameField);
  }

  public addАunctionMenu(): void {
    const aunctionMenu: HTMLDivElement = document.createElement("div");
    aunctionMenu.className = "game__aunction";
    this.gameField.append(aunctionMenu);

    const dropdownListLevel: HTMLElement = document.createElement("div");
    dropdownListLevel.className = "game__list";
    aunctionMenu.append(dropdownListLevel);

    const titleLevel: HTMLElement = document.createElement("h2");
    titleLevel.className = "game__list-title";
    titleLevel.textContent = "Level";
    dropdownListLevel.append(titleLevel);

    const selectLevel = document.createElement("select");
    selectLevel.className = "game__list-select";
    dropdownListLevel.append(selectLevel);

    const wordCollections: Record<string, WordCollection> = {
      wordCollectionLevel1,
      wordCollectionLevel2,
      wordCollectionLevel3,
      wordCollectionLevel4,
      wordCollectionLevel5,
      wordCollectionLevel6,
    };

    const pageInLevel: number[] = [];

    const levels: number[] = [1, 2, 3, 4, 5, 6];
    levels.forEach((level) => {
      const option = document.createElement("option");
      option.value = level.toString();
      option.textContent = level.toString();
      selectLevel.appendChild(option);
    });

    const dropdownListPage: HTMLElement = document.createElement("div");
    dropdownListPage.className = "game__list";
    aunctionMenu.append(dropdownListPage);

    const titlePage: HTMLElement = document.createElement("h2");
    titlePage.className = "game__list-title";
    titlePage.textContent = "Page";
    dropdownListPage.append(titlePage);

    const selectPage = document.createElement("select");
    selectPage.className = "game__list-select";
    dropdownListPage.append(selectPage);

    for (let i = 1; i <= 45; i++) {
      pageInLevel.push(i);
    }

    selectLevel.addEventListener("change", (event) => {
      const newLevel: string = (event.target as HTMLSelectElement).value;
      const collectionName: string = `wordCollectionLevel${newLevel}`;
      const selectedCollection: WordCollection =
        wordCollections[collectionName];

      pageInLevel.splice(0, pageInLevel.length);

      for (let i = 1; i <= selectedCollection.roundsCount; i++) {
        pageInLevel.push(i);
      }

      selectPage.replaceChildren();

      pageInLevel.forEach((page) => {
        const option = document.createElement("option");
        option.value = page.toString();
        option.textContent = page.toString();
        selectPage.appendChild(option);
      });
    });

    pageInLevel.forEach((page) => {
      const option = document.createElement("option");
      option.value = page.toString();
      option.textContent = page.toString();
      selectPage.appendChild(option);
    });

    const supportSet: HTMLDivElement = document.createElement("div");
    supportSet.className = "game__support";
    aunctionMenu.append(supportSet)

    const supportSound: HTMLButtonElement = document.createElement("button");
    supportSound.className = "game__support-button";
    supportSet.append(supportSound);

    const supportSoundIMG: HTMLImageElement = document.createElement("img");
    supportSoundIMG.className = "game__support-img";
    supportSoundIMG.src = "/puzzle-ts/src/assets/images/imagesGame/interfacePicture/supportSound.svg"
    supportSoundIMG.alt = "Sound"
    supportSound.append(supportSoundIMG);

    const supportDocument: HTMLButtonElement = document.createElement("button");
    supportDocument.className = "game__support-button";
    supportSet.append(supportDocument);

    const supportDocumentIMG: HTMLImageElement = document.createElement("img");
    supportDocumentIMG.className = "game__support-img";
    supportDocumentIMG.src = "/puzzle-ts/src/assets/images/imagesGame/interfacePicture/supportDocument.svg"
    supportDocumentIMG.alt = "Document"
    supportDocument.append(supportDocumentIMG);

    const supportMusic: HTMLButtonElement = document.createElement("button");
    supportMusic.className = "game__support-button";
    supportSet.append(supportMusic);

    const supportMusicIMG: HTMLImageElement = document.createElement("img");
    supportMusicIMG.className = "game__support-img";
    supportMusicIMG.src = "/puzzle-ts/src/assets/images/imagesGame/interfacePicture/supportMusic.svg";
    supportMusicIMG.alt = "Music"
    supportMusic.append(supportMusicIMG);

  }

  public addGameFunction() {
    const Gameplay: HTMLDivElement = document.createElement("div");
    Gameplay.className = "game_gameplay";
    this.gameField.append(Gameplay);

    const numberOffer: HTMLElement = document.createElement("ul");
    numberOffer.className = "game__numbering"
    Gameplay.append(numberOffer);


    const generationGameplay: HTMLDivElement = document.createElement("div");
    generationGameplay.className = "game__generation";
    Gameplay.append(generationGameplay);



  }

  public renderGame(): void {
    document.querySelector("main")!.replaceChildren();
    document.querySelector("main")!.appendChild(this.gamePage);
  }
}
