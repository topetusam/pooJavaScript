// Definición de la clase Persona
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}. ¡Mucho gusto!`);
    }
}


class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.carrera}`);
    }
}


let estudiante1 = new Estudiante('Carlos', 22, 'Masculino', 'Ingeniería Informática');


estudiante1.saludar(); 


estudiante1.estudiar(); 
