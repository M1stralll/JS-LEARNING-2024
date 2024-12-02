export class GamePage {
    private gamePage: HTMLDivElement;

    constructor() {
        this.gamePage = document.createElement("div");
        this.gamePage.className = "game"
    }

    public addBackgroundIMG(srcContent: string, altContent: string): void {
        const bacgroundIMG: HTMLImageElement = document.createElement("img");
        bacgroundIMG.className = "game__img";
        bacgroundIMG.src = srcContent;
        bacgroundIMG.alt = altContent;
        this.gamePage.append(bacgroundIMG);
    }

    public renderGame(): void {
        document.querySelector('main')!.replaceChildren();
        document.querySelector('main')!.appendChild(this.gamePage);
        
    }
}