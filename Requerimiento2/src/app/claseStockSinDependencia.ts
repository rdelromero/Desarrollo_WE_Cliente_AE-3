export class StockSinDependencia{

    /*Atributos de instancia 
    Los atributos privados se ponen con "_" por convenio*/
    private _id: number = 0;
    public tituloVideojuego : string;
    public plataformaVideojuego : string;
    public sumaPuntuaciones: number;
    public nPuntuaciones: number;
    public puntuacionMedia: number;

    /*Atributos de clase*/
    private static contadorId : number = 1;

    //Método constructor
    constructor(tituloVideojuego: string, plataformaVideojuego: string, sumaPuntuaciones: number, nPuntuaciones: number){
        this._id = StockSinDependencia.contadorId++;
        this.tituloVideojuego = tituloVideojuego;
        this.plataformaVideojuego = plataformaVideojuego;
        this.sumaPuntuaciones = sumaPuntuaciones;
        this.nPuntuaciones = nPuntuaciones;
        this.puntuacionMedia=sumaPuntuaciones/nPuntuaciones;
    }

    public get id() : number{
        return this._id;
    }
}