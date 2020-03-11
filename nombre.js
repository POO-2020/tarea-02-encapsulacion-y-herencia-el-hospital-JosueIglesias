export default class Nombre {
    constructor(nombre, apellidoPat, apellidoMat) {
        this._nombre = nombre
        this._apellidoMat = apellidoMat
        this._apellidoPat = apellidoPat
    }
    getNombreCompleto() {
        return `${this._nombre} ${this._apellidoPat} ${this._apellidoMat}`
    }

    getApellidoNombre(){
        return `${this._apellidoPat} ${this._apellidoMat} ${this._nombre}`
    }

    getIniciales(){
        return `${this._nombre.charAt(0)}${this._apellidoPat.charAt(0)}${this._apellidoMat.charAt(0)}`
    }
}

//let persona1 = new Nombre ("Josue Benjamin", "Iglesias", "Alcaraz")

//console.log(persona1.getNombreCompleto())
//console.log(persona1.getApellidoNombre())
//console.log(persona1.getIniciales())