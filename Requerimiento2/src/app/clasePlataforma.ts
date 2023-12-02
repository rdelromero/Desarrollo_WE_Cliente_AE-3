
// Clase que guarda los atributos de un Heroe
export class Plataforma{

    /*Atributos de instancia 
    * Los atributos privados se ponen con "_" por convenio*/
    private _id: number = 0;
    public nombrePlataforma : string;
    public fabricante: string;
    public fechaLanzamiento: Date;

    /*Atributos de clase*/
    private static contadorId : number = 1;

    constructor(nombre : string, fabricante : string, fechaLanzamiento: Date){
        this._id = Plataforma.contadorId++;
        this.nombrePlataforma = nombre;
        this.fabricante = fabricante;
        this.fechaLanzamiento = fechaLanzamiento;
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
         return `Pt.: ${this._id}, ${this.nombrePlataforma}, ${this.fabricante}, ${this.fechaLanzamiento.toDateString()}`
    }
}