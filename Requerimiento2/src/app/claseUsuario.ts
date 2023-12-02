
export class Usuario{

    /*Atributos de instancia 
    * Los atributos privados se ponen con "_" por convenio*/
    private _id: number = 0;
    private _nombreUsuario : string;
    private _contrasena : string;

    /*Atributos de clase
    * Atributo contador del ID del stock
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos nombre y universo en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
    constructor(nombre: string, contrasena: string){
        this._id = Usuario.contadorId++;
        this._nombreUsuario = nombre;
        this._contrasena = contrasena;
    }

    public get id() : number{
        return this._id;
    }   
    public get nombreUsuario() : string{
        return this._nombreUsuario;
    }
    public get contrasena() : string{
        return this._contrasena;
    }


}