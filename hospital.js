export default class Hospital {
    constructor(nombre, direccion){
        this.nombre = nombre
        this.direccion = direccion
        this.doctores = new Array
        this.citas = new Array
    }

    registrarDoctores(doctor){
        this.doctores.push(doctor)
    }

    listarDoctores(){
        this.doctores.forEach((doctor, i) => {
            console.log(`${i + 1} ${doctor.getPerfil()}`)
        })
    }

    registrarCitas(cita){
        this.citas.push(cita)
    }

    listarCitas(){
        this.citas.forEach((cita, i )=> {
            console.log(`${i + 1} ${cita.getPerfil()}`)
        })
    }
}