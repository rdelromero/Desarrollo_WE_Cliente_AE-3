import { Videojuego } from "./claseVideojuego";
export class StockSinUndefined{

    /*Atributos de instancia 
    * Los atributos privados se ponen con "_" por convenio*/
    private _id: number = 0;
    public videojuego : Videojuego | undefined;
    public sumaPuntuaciones: number;
    public nPuntuaciones: number;
    public puntuacionMedia: number;

    //Atributos de clase
    private static contadorId : number = 1;

    //Método constructor
    constructor(videojuego: Videojuego | undefined, sumaPuntuaciones:number, nPuntuaciones: number){
        this._id = StockSinUndefined.contadorId++;
        this.videojuego = videojuego;
        this.sumaPuntuaciones = sumaPuntuaciones;
        this.nPuntuaciones = nPuntuaciones;
        this.puntuacionMedia = sumaPuntuaciones/nPuntuaciones;
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `St.: ${this._id}, ${this.videojuego}, ${this.nPuntuaciones}, ${this.puntuacionMedia}`
    }
}