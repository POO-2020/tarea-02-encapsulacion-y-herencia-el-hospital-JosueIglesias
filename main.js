import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main {
    constructor() {
        this.doctor1 = new Doctor(141452, "Pediatra", new Nombre("Jose Antonio", "Zarate", "Ornolos" ), "232-323-125")
        this.doctor2 = new Doctor(968842, "Dermatologo", new Nombre("Eduark" , "Labristo", "Antipoda"), "555-92-92")
        this.paciente1 = new Paciente(new Nombre ("Anastasio arquimides", "brisuela", "Lopez" ), new Fecha(2000, 5, 25), 567432)

        this.hospital = new Hospital ("Hospital Puerta de Fierro", "Av. Villalobos #504")
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
        let cita1 = new Cita(new Fecha(2020, 6, 12), new Tiempo(4, 30, "PM"), this.doctor1.nombre, this.paciente1.nombre) 
        console.log(cita1.getPerfil())
    }

    probarHospital() {
        console.log("----------Hospital----------")
        console.log(this.hospital.nombre)
        console.log(this.hospital.direccion)
        this.hospital.registrarDoctores(this.doctor1)
        this.hospital.registrarDoctores(this.doctor2)
        this.hospital.listarDoctores()

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