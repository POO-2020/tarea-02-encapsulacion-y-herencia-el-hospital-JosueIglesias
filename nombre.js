export default class Nombre {
    constructor(nombre, apellidoPat, apellidoMat) {
        this.nombre = nombre
        this.apellidoMat = apellidoMat
        this.apellidoPat = apellidoPat
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellidoPat} ${this.apellidoMat}`
    }

    getApellidoNombre(){
        return `${this.apellidoPat} ${this.apellidoMat} ${this.nombre}`
    }

    getIniciales(){
        return `${this.nombre.charAt(0)}${this.apellidoPat.charAt(0)}${this.apellidoMat.charAt(0)}`
    }
}

//let persona1 = new Nombre ("Josue Benjamin", "Iglesias", "Alcaraz")

//console.log(persona1.getNombreCompleto())
//console.log(persona1.getApellidoNombre())
//console.log(persona1.getIniciales())