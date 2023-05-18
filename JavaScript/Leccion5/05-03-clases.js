//Clase 6 Clases
//6.1 Sintaxis de Clases en JavaScript: Parte 1 y 2

//let persona3 = new Persona('Martin', 'Perez');
//No es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);

//6.2 Método Get y Set: Parte Get y Parte Set, en linea 9 a 14

console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log( persona1.nombre );

console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log( persona2.nombre );

//6.3 Hoisting y clases: Parte 1 y 2, en linea numero 4

//let persona3 = new Persona('Martin', 'Perez'); //Cannot access 'Persona' before initializacion

//6.4 Herencia: Parte 1 y 2

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);