import Nombre from "./nombre.js"
export default class Doctor {
    constructor({cedula, especialidad, nombre , telefono}){
        this._cedula = cedula
        this._especialidad = especialidad
        this._nombre = nombre
        this._telefono = telefono
    }

    getPerfil(){
        return`${this._cedula}, ${this._especialidad}, ${this._nombre.getNombreCompleto()}, ${this._telefono}`
    }

    esIgualA(doctor){
        if (doctor._cedula === this._cedula){
            return true
        } 
        return false
    }
}