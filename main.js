import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"
import PacienteAsegurado from "./paciente-asegurado.js"

//let cita1 = new Cita(new Fecha(2020, 6, 12), new Tiempo(4, 30, "PM"), this.doctor1._nombre, this.paciente1._nombre) 


const datosPaciente1 = {
    nombre: new Nombre ("Anastasio Arquimides", "Figueroa", "Brisuela"),
    fechaNacimiento: new Fecha (2001, 4, 3),
    telefono: 567432
}

const datosDoctor1 = {
    cedula: 141452,
    especialidad: "Pediatra",
    nombre: new Nombre("Jose Antonio", "Zarate", "Ornolos" ),
    telefono: "232-323-125"
}

const datosDoctor2 = {
    cedula: 968842,
    especialidad: "Dermatologo",
    nombre: new Nombre("Eduark" , "Labristo", "Antipoda"),
    telefono: "555-92-92"
}


class Main {
    constructor() {
        this.doctor1 = new Doctor(datosDoctor1)
        this.doctor2 = new Doctor(datosDoctor2)
        this.paciente1 = new Paciente(datosPaciente1)
    }

    probarNombre() {
        console.log("----------Nombre----------")
        let persona1 = new Nombre("Josue Benjamin", "borondongo", "valenciana")
        console.log(persona1.getNombreCompleto())
        console.log(persona1.getApellidoNombre())
        console.log(persona1.getIniciales())

    }
    probarTiempo() {
        console.log("----------Tiempo----------")
        let horaPrueba = new Tiempo(3, 50, "PM")
        console.log(horaPrueba.getFormato12())
        console.log(horaPrueba.getFormato24())
    }
    
    probarFecha(){
        console.log("----------Fecha----------")
        let fecha1 = new Fecha(2007, 4, 4)
        console.log(fecha1.getFecha())
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getDiaFecha())
    }

    probarDoctor(){
        console.log("----------Doctor----------")
        //let doctor1 = new Doctor(141452, "Pediatra", new Nombre("Jose Antonio", "Zarate", "Ornolos" ), 232323)
        console.log(this.doctor1.getPerfil())
    }

   probarPaciente() {
        console.log("----------Paciente----------")

        //let paciente1 = new Paciente(new Nombre ("Anastasio arquimides", "brisuela", "Lopez" ), new Fecha(2000, 5, 25), 567432)
        console.log(this.paciente1.getPerfil())
    } 

    probarCita(){
        console.log("----------Citas----------")
        let datosCita1 = {
            fecha: new Fecha(2020, 6, 12),
            hora: new Tiempo(4, 30, "PM"),
            doctor: this.doctor1._nombre,
            paciente: this.paciente1._nombre
        }
        let cita1 = new Cita(datosCita1) 
        console.log(cita1.getPerfil())
    }

    probarHospital() {
        console.log("----------Hospital----------")
        let hospital = new Hospital ({nombre:"Hospital Puerta de Fierro",
        direccion: "Av. Villalobos #504"})
        console.log(hospital._nombre)
        console.log(hospital._direccion)
        hospital.registrarDoctores(this.doctor1)
        hospital.registrarDoctores(this.doctor2)
        hospital.listarDoctores()
    }

    probarPacienteAsegurado(){
        console.log("---------Paciente asegurado----------")
        let datosPacienteAsegurado1 = {
            nombre: new Nombre("Mario", "Carvantes", "Gutierrez"),
            fechaNacimiento: new Fecha (12,12,2000),
            telefono:31211455,
            numeroPoliza: 3434346 ,
            finVigencia: new Fecha (2022, 5, 30),
            compañia: "Movistar"

        }

        let pacienteAsegurado1 = new PacienteAsegurado(datosPacienteAsegurado1)

        console.log(pacienteAsegurado1.getPerfil())
    }
}
let app = new Main()
app.probarNombre()
app.probarTiempo()
app.probarFecha()
app.probarDoctor()
app.probarPaciente()
app.probarCita()
app.probarHospital()
app.probarPacienteAsegurado()