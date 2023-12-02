
// Clase que guarda los atributos de un Heroe
export class Desarrollador{

    /*Atributos de instancia 
    * Los atributos privados se ponen con "_" por convenio
    */
    private _id: number = 0;
    public nombreDesarrollador : string;
    public fechaFundacion: Date;
    public pais: string;

    //Atributos de clase
    private static contadorId : number = 1;

    constructor(nombre : string, fechaFundacion: Date, pais : string){

        this._id = Desarrollador.contadorId++;
        this.nombreDesarrollador = nombre;
        this.fechaFundacion = fechaFundacion;
        this.pais = pais;
    }

    public get id() : number{
        return this._id;
    }

    public get contadorId() : number{
        return this.contadorId;
    }

    public toString() : string {
        return `Desarrollador: ${this._id}, ${this.nombreDesarrollador}, ${this.fechaFundacion.toDateString()}, ${this.pais}`
    }

}