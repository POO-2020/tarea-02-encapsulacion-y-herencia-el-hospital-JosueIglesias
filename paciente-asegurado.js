import Paciente from "./paciente.js"


export default class PacienteAsegurado extends Paciente{
    constructor({nombre, fechaNacimiento, telefono, numeroPoliza, finVigencia, compañia}) {
        super({nombre, fechaNacimiento, telefono})

        this._numeroPoliza = numeroPoliza
        this._finVigencia = finVigencia
        this._compañia = compañia
    }

    getPerfil() {
        console.log(this._nombre.getNombreCompleto())
       /*return`nombre: ${this._nombre.getNombreCompleto()}, fecha de nacimiento: ${this._fechaNacimiento.getFecha()}, teléfono: ${this._telefono}, numero de póliza: ${this._numeroPoliza}, vigencia de póliza: ${this._fechaSinVigencia}, compañía: ${this._telefono} ` */
    }

    
}