export default class Tiempo {
    constructor(hora, minutos, periodo) {
        this.hora = hora
        this.minutos = minutos
        this.periodo = periodo
    }

    getFormato12(){
        return `${this.hora}:${this.minutos} ${this.periodo}`

    }

    getFormato24(){
        if (this.periodo.toUpperCase() === "PM" && this.hora != 12) {
            this.hora = this.hora + 12
        }
        return `${this.hora}:${this.minutos}`
    }
}