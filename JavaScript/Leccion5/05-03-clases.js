//Clase 6 Clases Parte 1
//6.1 Sintaxis de Clases en JavaScript: Parte 1 y 2

//let persona3 = new Persona('Martin', 'Perez');
//No es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting

class Persona{

    static contadorPersonas = 0;//Atributo estático (de la clase)

    email = 'Valor default email';//Atributo No estático (de los objetos)

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido;
        //Persona.contadorObjetosPersona++;
        //console.log( 'Se incrementa el contador:' + Persona.contadorObjetosPersona);
        //this.idPersona = ++Persona.contadorPersonas;
        if( Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el máximo de objetos permitidos');
        }
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
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object) 
    toString(){//regresa un String
    //Se aplica polimorfismo que significa = multiples formas en tiempo de ejecucion
    //el metodo que se ejecuta depende si es una referencia de tipo padre o hijo 
    //(o sea del objeto al cual apunta) 
    
    return this.nombreCompleto();
    }

    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
    //Sobreescritura
    nombreCompleto(){
    return super.nombreCompleto() + ', ' + this._departamento;
    }
}

/* let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre); */

//Clase 7 Clases Parte 2
//7.1 Heredar métodos, metodo en linea 25

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//7.2 Sobreescritura, metodo en linea 64

//7.3 Clase Object, toString, sobreescritura y Polimorfismo
Object.prototype.toString(); //Esta es la manera de acceder a atributos y metodos de manera dinamica

console.log( persona1.toString());
console.log( empleado1.toString());

//Clase 8 Static
//8.1 Palabra static con métodos: Parte 1 y 2, metodo en linea 37 a 42

//persona1.saludar(); no se puede llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


//8.2 Atributos estáticos, en linea 10
//Se asocian a la clase
console.log( persona1.contadorObjetosPersona);//no se puede acceder desde el objeto de persona
console.log( Persona.contadorObjetosPersona );

console.log( Empleado.contadorObjetosPersona );

//8.3 Atributos estáticos vs No estáticos, en linea 12
//Se asocian a los objetos
console.log( persona1.email );
console.log( empleado1.email );
console.log( Persona.email);//no se puede acceder desde la clase persona
console.log( Empleado.email);//no se puede acceder desde la clase empleado

//8.4 Uso de la palabra static: Parte 1 y 2, linea 23

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona('Carla', 'Pereyra')
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

//8.5 Creación de constantes estáticas, en linea 14

console.log( Persona.MAX_OBJ);
Persona.MAX_OBJ = 10; //No se puede modificar xq es un metodo que simula una constante
console.log( Persona.MAX_OBJ);

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Liliana', 'Paz');
console.log( persona5.toString() );




