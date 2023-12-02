import { Desarrollador } from "./claseDesarrollador";
import { Plataforma } from "./clasePlataforma";

export class Videojuego{

    /*Atributos de instancia 
    * Los atributos privados se ponen con "_" por convenio*/
    private _id: number = 0;
    public desarrollador: Desarrollador | undefined;
    public titulo: string;
    public fechaLanzamiento: Date;
    public plataforma: Plataforma | undefined;
    public genero: string;
    public portada: string;

    /*Atributos de clase*/
    private static contadorId : number = 1;

    //Método constructor
    constructor(desarrollador: Desarrollador | undefined, titulo: string, fechaLanzamiento: Date, plataforma: Plataforma | undefined, genero: string, portada: string){
        this._id = Videojuego.contadorId++;
        this.desarrollador = desarrollador;
        this.titulo = titulo;
        this.fechaLanzamiento = fechaLanzamiento;
        this.plataforma = plataforma;
        this.genero = genero;
        this.portada = portada;
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
            return `${this.desarrollador?.nombreDesarrollador}, ${this.titulo}, ${this.fechaLanzamiento.toDateString()}, pt. ${this.plataforma?.nombrePlataforma}, ${this.genero}`;
    }
}