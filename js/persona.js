class Persona{
    constructor(tipodocumento, documento, nombre, apellido, pais, ciudad, direccion){
        
        this._tipodocumento = tipodocumento
        this._documento = documento
        this._nombre = nombre;
        this._apellido = apellido;
        this._pais = pais;
        this._ciudad = ciudad;
        this._direccion = direccion;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get tipodocumento(){
        return this._tipodocumento;
    }
    set tipodocumento(tipodocumento){
        this._tipodocumento = tipodocumento;
    }
    get documento(){
        return this._documento
    }
    set documento(documento){
        this._documento = documento
    }
    get pais(){
        return this._pais;
    }
    set pais(pais){
        this._pais = pais;
    }
    get ciudad(){
        return this._ciudad;
    }
    set ciudad(ciudad){
        this._ciudad = ciudad;
    }
    get direccion(){
        return this._direccion;
    }
    set direccion(direccion){
        this._direccion = direccion;
    }
}