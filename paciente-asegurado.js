import Paciente from "./paciente";

export default class PacienteAsegurado extends Paciente{
    constructor(numeroPoliza, fechaSinVigencia, compañia) {
        super(nombre, fechaNacimiento, telefono)

        this._numeroPoliza = numeroPoliza
        this._fechaSinVigencia = fechaSinVigencia
        this._compañia = compañia
    }
}