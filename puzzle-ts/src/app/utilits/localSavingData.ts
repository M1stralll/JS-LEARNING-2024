export class SavingData { 
    private registrationButton: HTMLButtonElement | null;
    
    constructor() {
        this.registrationButton = document.querySelector(".main__style");
        }

    public savingData(): void {
                const auth: string[] = [];
                let dataAuth = document.querySelectorAll<HTMLInputElement>(".main__enter-input");
                for (let input of dataAuth) {
                    auth.push(input.value);
                }
                localStorage.setItem('User', auth.join(' '));
                
            }
            
}
