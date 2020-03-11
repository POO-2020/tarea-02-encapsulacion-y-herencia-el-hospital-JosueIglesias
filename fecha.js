export default class Fecha {
    constructor (año, mes, dia) {
        this._fecha = new Date(año, mes -1,  dia)
        this._diaSemana = [
            "Domingo", 
            "Lunes", 
            "Martes", 
            "Miercoles", 
            "Jueves", 
            "Viernes", 
            "Sabado",
        ]

        this._nombreMes = [
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
        return `${this._fecha.getDate()}/${this._nombreMes[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`
    }

    getAños(){
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear()
        return `Han pasado ${añosTranscurridos} años desde ${this._fecha.getFullYear()}`
    }

    getMeses() {
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear()
        return `Han pasado ${añosTranscurridos * 12} meses desde ${this._fecha.getFullYear()}` 
    }

    getSemanas(){
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear()
        return `Han pasado ${añosTranscurridos * 52} semanas desde ${this._fecha.getFullYear()}`

    }

    getDias(){
        let fechaActual = new Date(Date.now())
        let añosTranscurridos = fechaActual.getFullYear() - this._fecha.getFullYear()
        return `Han pasado ${añosTranscurridos * 365} dias desde ${this._fecha.getFullYear()}`
    }

    getDiaFecha(){
        return`${this._diaSemana[this._fecha.getDay()]}`
    }

}