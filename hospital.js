export default class Hospital {
    constructor(nombre, direccion){
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array
        this._citas = new Array
    }

    registrarDoctores(doctor){
        this._doctores.push(doctor)
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
}