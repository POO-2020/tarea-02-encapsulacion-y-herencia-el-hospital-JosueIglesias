import Nombre from "./nombre.js"
export default class Doctor {
    constructor(cedula, especialidad, nombre = new Nombre , telefono){
        this._cedula = cedula
        this._especialidad = especialidad
        this._nombre = nombre
        this._telefono = telefono
    }

    getPerfil(){
        return`${this._cedula}, ${this._especialidad}, ${this._nombre.getNombreCompleto()}, ${this._telefono}`
    }
}