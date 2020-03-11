export default class Fecha {
    constructor (año, mes, dia) {
        this.fecha = new Date(año, mes -1,  dia)
        this.diaSemana = [
            "Domingo", 
            "Lunes", 
            "Martes", 
            "Miercoles", 
            "Jueves", 
            "Viernes", 
            "Sabado",
        ]

        this.nombreMes = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ]
    }

    getFecha(){
        return `${this.fecha.getDate()}/${this.nombreMes[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`
    }

    getAños(){
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear()
        return `Han pasado ${añosTranscurridos} años desde ${this.fecha.getFullYear()}`
    }

    getMeses() {
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear()
        return `Han pasado ${añosTranscurridos * 12} meses desde ${this.fecha.getFullYear()}` 
    }

    getSemanas(){
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear()
        return `Han pasado ${añosTranscurridos * 52} semanas desde ${this.fecha.getFullYear()}`

    }

    getDias(){
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear()
        return `Han pasado ${añosTranscurridos * 365} dias desde ${this.fecha.getFullYear()}`
    }

    getDiaFecha(){
        return`${this.diaSemana[this.fecha.getDay()]}`
    }

}