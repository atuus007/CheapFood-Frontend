export class FoodSubmit {

    private name: string;
    private elkeszitesi_ido: number;
    private mennyiseg: number;
    private mennyisegfajta: number;
    private ingredientsList: HozzavaloSubmit[];

    constructor(n: string, ingList: HozzavaloSubmit[], elk_i:number, mennyis:number, mennyisegfajta:number) {
        this.name = n;
        this.elkeszitesi_ido=elk_i;
        this.mennyiseg=mennyis;
        this.mennyisegfajta=mennyisegfajta;
        this.ingredientsList = ingList;
    }


    public setName(n: string): void {
        this.name = n;
    }
    public setIngredients(ing: HozzavaloSubmit[]): void {
        this.ingredientsList = ing;
    }
    public setElkId(elkid: number): void {
        this.elkeszitesi_ido = elkid;
    }
    public setMennyiseg(menny: number): void {
        this.mennyiseg = menny;
    }
    public setMennyFaj(mennyfaj: number): void {
        this.mennyisegfajta = mennyfaj;
    }

    public getName(): string {
        return this.name;
    }
    public getElkIdo(): number {
        return this.elkeszitesi_ido;
    }
    public getMennyiseg(): number {
        return this.mennyiseg;
    }
    public getMennyisegFajta(): number {
        return this.mennyisegfajta;
    }
    public getIngredientsList(): HozzavaloSubmit[] {
        return this.ingredientsList;
    }
}

export class HozzavaloSubmit {
    name: string;
    atlagar: number;
    mennyiseg: number;
    mennyisegfajta: number;
    elkeszitesi_ido:number;
}
