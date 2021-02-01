export class FoodResoponse{

    constructor(  private id:number,
        private name:string,
        private mennyisegfajta:number,
        private mennyiseg:number,
        private elkeszitesi_ido: number,
        private osszar:number) {
      
    }
    public getName(): string {
        return this.name;
    }
    public getId(): number {
        return this.id;
    }

    public getmennyisegfajta(): number {
        return this.mennyisegfajta;
    }

    public getmennyiseg(): number {
        return this.mennyiseg;
    }

    public getosszar(): number {
        return this.osszar;
    }

}