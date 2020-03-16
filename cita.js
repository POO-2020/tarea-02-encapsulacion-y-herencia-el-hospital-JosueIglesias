import Fecha from "./fecha.js"
import Doctor from "./doctor.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
export default class Cita {
    constructor(fecha = new Fecha, hora = new Tiempo, doctor = new Doctor , paciente = new Paciente) {
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
    }

    getPerfil(){
        return`${this._fecha.getFecha()}, ${this._hora.getFormato24()} ,${this._doctor.nombre}, ${this._paciente.nombre}`
    }
}

/* 
this. cita = new Cita {
nombre:
}*/