import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente {
    constructor (nombre = new Nombre, fechaNacimiento = new Fecha, telefono){
        this.nombre = nombre 
        this.fechaNacimiento = fechaNacimiento
        this.telefono = telefono
    }

    getPerfil() {
        return`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${this.telefono} `
    }
}