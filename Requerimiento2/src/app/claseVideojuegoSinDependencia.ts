export class VideojuegoSinDependencia{

    /*Atributos de instancia 
    * Los atributos privados se ponen con "_" por convenio*/
    private _id: number = 0;
    public nombreDesarrollador: string;
    public titulo: string;
    public fechaLanzamiento: Date;
    public nombrePlataforma: string;
    public genero: string;
    public portada: string;

    /*Atributos de clase
    * Atributo contador del ID del heroe. Es estático para que su ciclo de vida no dependa del tiempo de vida de los objetos.
    * La función de este atributo es llevar un contador del atributo "_id" se autoincrementará automáticamente por cada
    * objeto Novela que se cree. 
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos nombre y universo en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
    constructor(nombreDesarrollador: string, titulo: string, fechaLanzamiento: Date, nombrePlataforma: string, genero: string, portada: string){
        this._id = VideojuegoSinDependencia.contadorId++;
        this.nombreDesarrollador = nombreDesarrollador;
        this.titulo = titulo;
        this.fechaLanzamiento = fechaLanzamiento;
        this.nombrePlataforma = nombrePlataforma;
        this.genero = genero;
        this.portada = portada;
    }

    public get id() : number{
        return this._id;
    }
}