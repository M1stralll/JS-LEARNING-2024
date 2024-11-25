export class startaPage {
    private startPage: HTMLDivElement;
    private startPageSection: HTMLDivElement;

    constructor() {
        this.startPage = document.createElement("div");
        this.startPage.className = "start"

        this.startPageSection = document.createElement("div");
        this.startPageSection.className = "start__section";
    }

    public addBacroundIMG(srcContent: string, altContent: string): void {
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

    public addButton(buttonContent: string): void {
        const buttonStart: HTMLButtonElement = document.createElement("button");
        buttonStart.className = "start__button"
        buttonStart.textContent = buttonContent;
        this.startPageSection.append(buttonStart);
    }

    public renderStart(): void {
        document.querySelector('main')!.replaceChildren();
        document.querySelector('main')!.appendChild(this.startPage);
        
    }
}