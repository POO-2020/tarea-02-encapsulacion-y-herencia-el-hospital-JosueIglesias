import Paciente from "./paciente.js"
import Nombre from "./nombre.js"
import Fecha from "./fecha.js"


export default class PacienteAsegurado extends Paciente{
    constructor({nombre, fechaNacimiento, telefono, numeroPoliza, finVigencia, compañia}) {
        super({nombre, fechaNacimiento, telefono})

        this._nombre = nombre
        this._fechaNacimiento = fechaNacimiento
        this._telefono = telefono
        this._numeroPoliza = numeroPoliza
        this._finVigencia = finVigencia
        this._compañia = compañia
    }

    getPerfil() {
    return`nombre: ${this._nombre.getNombreCompleto()}, fecha de nacimiento: ${this._fechaNacimiento.getFecha()}, teléfono: ${this._telefono}, numero de póliza: ${this._numeroPoliza}, vigencia de póliza: ${this._finVigencia}, compañía: ${this._telefono} `
    }
    
    
}