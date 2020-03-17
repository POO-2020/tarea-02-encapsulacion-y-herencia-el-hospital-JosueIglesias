export default class Hospital {
    constructor({nombre, direccion}){
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array
        this._citas = new Array
    }

    registrarDoctores(doctor){
        this._doctores.push(doctor)
    }

    buscarDoctor(doctor) {
        let result = this._doctores.find(e => e.esIgualA(doctor))

        return result
    }

    eliminarDoctor(doctor){
        let indice = this.encontrarIndiceDoctor(doctor)
        
        if (indice < 0){
            return false
        }

        this._doctores.splice(indice, 1)

        return true
    }

    encontrarIndiceDoctor(doctor) {
        let indice = this._doctores.findIndex(e => e.esIgualA(doctor))

        return indice
    }

    actualizarDoctor(doctor, nuevoDoctor){
        let indice = this.encontrarIndiceDoctor(doctor)

        if (indice < 0) {
            return false
        }

        this._doctores.splice(indice, 1, nuevoDoctor)
        return true
    }

    listarDoctores(){
        this._doctores.forEach((doctor, i) => {
            console.log(`${i + 1} ${doctor.getPerfil()}`)
        })
    }

    registrarCitas(cita){
        this._citas.push(cita)
    }

    listarCitas(){
        this._citas.forEach((cita, i )=> {
            console.log(`${i + 1} ${cita.getPerfil()}`)
        })
    }

    buscarCita(cita){
        let result = this._citas.find(e => e.esIgualA(cita))

        return result
    }

    encontrarIndiceCita(cita){
        let indice = this._citas.findIndex(e => e.esIgualA(cita))

        return indice
    }

    eliminarCita(cita){
        let indice = this.encontrarIndiceCita(cita)

        if (indice < 0){
            return false
        }

        this._citas.splice(indice, 1)

        return true
    }

    actualizarCita(cita, nuevaCita){
        let indice = this.encontrarIndiceCita(cita)

        if (indice < 0){
            return false
        }

        this._citas.splice(indice, 1, nuevaCita)
        return true
    }

}