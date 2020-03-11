import Nombre from "./nombre.js"
export default class Doctor {
    constructor(cedula, especialidad, nombre = new Nombre , telefono){
        this.cedula = cedula
        this.especialidad = especialidad
        this.nombre = nombre
        this.telefono = telefono
    }

    getPerfil(){
        return`${this.cedula}, ${this.especialidad}, ${this.nombre.getNombreCompleto()}, ${this.telefono}`
    }
}