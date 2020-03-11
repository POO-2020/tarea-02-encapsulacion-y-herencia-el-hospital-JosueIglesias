import Fecha from "./fecha.js"
import Doctor from "./doctor.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
export default class Cita {
    constructor(fecha = new Fecha, hora = new Tiempo, doctor = new Doctor , paciente = new Paciente) {
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }

    getPerfil(){
        return`${this.fecha.getFecha()}, ${this.hora.getFormato24()} ,${this.doctor.nombre}, ${this.paciente.nombre}`
    }
}