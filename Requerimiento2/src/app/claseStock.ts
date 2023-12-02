import { Videojuego } from "./claseVideojuego";
export class Stock{

    /*Atributos de instancia 
    * Los atributos privados se ponen con "_" por convenio
    * Atributo privado que lleva el identificador único del autor. Solo se permitiá acceder a él con el método get.
    */
    private _id: number = 0;
    public videojuego : Videojuego | undefined;
    public sumaPuntuaciones: number;
    public nPuntuaciones: number;
    public puntuacionMedia: number;

    /*Atributos de clase
    * Atributo contador del ID del stock
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos nombre y universo en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
    constructor(videojuego: Videojuego | undefined, sumaPuntuaciones:number, nPuntuaciones: number){
        this._id = Stock.contadorId++;
        this.videojuego = videojuego;
        this.sumaPuntuaciones = sumaPuntuaciones;
        this.nPuntuaciones = nPuntuaciones;
        this.puntuacionMedia = sumaPuntuaciones/nPuntuaciones;
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `St.: ${this._id}, ${this.videojuego}, ${this.nPuntuaciones}`
    }

}