import Fecha from "./fecha.js"
import Doctor from "./doctor.js"
import Tiempo from "./tiempo.js"
import Paciente from "./paciente.js"
export default class Cita {
    constructor({fecha , hora , doctor , paciente}) {
        this._fecha = fecha
        this._hora = hora
        this._doctor = doctor
        this._paciente = paciente
    }

    getPerfil(){
        return`${this._fecha.getFecha()}, ${this._hora.getFormato24()} ,${this._doctor._nombre}, ${this._paciente._nombre}`
    }
}

/* 
this. cita = new Cita {
nombre:
}*/