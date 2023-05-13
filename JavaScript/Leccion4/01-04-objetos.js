//Clase 4 Objetos Parte 1

//1.1 Introducción a los Objetos en JavaScript Parte 1

let x = 10;//varaible de tipo primitiva
console.log(x.length);
console.log('Tipos Primitivos');

let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@mail.com',
    edad: 28,
    idioma: 'Español',
    nombreCompleto: function(){//método o función en Javascript
        return this.nombre + ' ' + this.apellido;
    },
    get nombreEdad(){ //Este es el método get
        return 'El nombre es: '+ this.nombre + ', Edad:  ' + this.edad;
    },
    get lang(){ //Este es el método get
        return this.idioma.toUpperCase();
    },
    set lang( lang ){ //Este es el método set
        this.idioma = lang.toUpperCase();
    }
}

console.log(persona.nombre);

//1.1 Introducción a los Objetos en JavaScript Parte 2

console.log(persona.apellido);
console.log(persona.email);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona);

//1.2 Agregamos métodos a los Objetos
/* nombreCompleto: function(){//método o función en Javascript
    return this.nombre + ' ' + this.apellido; */

console.log(persona.nombreCompleto());
console.log(persona);

//1.3 Diferentes formas de crear un Objetos

console.log('Ejecutando con un objeto')
let persona2 = new Object(); //Debe crear un nuevp objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5495618282821';

console.log(persona2.telefono);

//1.4 Cómo acceder a las propiedades de los Objetos

console.log('Creamos un nuevo objeto');
console.log( persona['apellido'] ); //Accedemos como si fuera un arreglo


console.log('Usamos el ciclo for in')
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//1.5 Agregar y eliminar propiedades de los Objetos

persona.apellido = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
console.log(persona);

console.log('Cambiamos y eliminamos un error')
persona.apellida = 'Betancud';
console.log(persona);

delete persona.apellida; //Eliminamos el error
console.log(persona);

//1.6 Ejecutamos desde el navegador
//creamos el archivo index.html

//1.7 Distintas formas de imprimir un Objeto

//Numero 1: Concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un Objeto');
console.log('Forma 1:');
console.log(persona.nombre + ', ' + persona.apellido);

//Numero 2: A través del ciclo for in
console.log('Forma 2:');
for( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: La función Object.values()
console.log('Forma 3:');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: El metodo JSON.stringify()
console.log('Forma 4:');
let personaString = JSON.stringify(persona);
console.log(personaString);

/* ***************************************************** */
//Clase 5 Objetos Parte 2

//5.1 Métodos get y set Parte 1 y 2

/* Lo agregamos en linea 17:

 get nombreEdad(){ //Este es el método get
        return 'El nombre es: '+ this.nombre + ', Edad:  ' + this.edad;
    }
} */

/*  Lo agregamos en linea 21 a 26:

get lang(){ //Este es el método get
        return this.idioma.toUpperCase();
    },
set lang( lang ){ //Este es el método set
        this.idioma = lang.toUpperCase();
    } */

console.log("Comenzamos a utilizar el método Get: ")
console.log(persona.nombreEdad);
console.log("Comenzamos a utilizar el método Get y Set para idiomas: ");
console.log(persona.lang);
persona.lang = 'English';
console.log(persona.lang);

//5.2 Constructores de objetos

function Persona(nombre, apellido, email){ //Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis';//Modificamos le nombre
console.log(padre);


let madre = new Persona('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);



//5.3 Agregar métodos al constructor del objeto

/* Agrego en linea 142:
this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    } */
console.log(padre.nombreCompleto);
console.log(madre.nombreCompleto);

//5.4 Distintas formas de crear objetos

//caso Objeto 1
let miObjeto = new Object(); //Esta es una opcion formal
//caso Objeto 2
let miObjeto2 = {}; //Esta es una opcion breve y recomendada

//caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal
//caso String 2
let miCadena2 = 'Hola'; //Esta es la sintaxis breve y recomendada

//caso con números 1
let miNumero = new Number(1); //Es formal no recomendable
//caso con números 2
let miNumero2 = 1; //Sintaxis recomendada

//caso Boolean 1
let miBoolean1 = new Boolean(false); //Formal
//caso Boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//caso Arreglos 1
let miArreglo1 = new Array(); //Formal
//caso Arreglos 2
let miArreglo2 = []; //Sintaxis recomendada

//caso funcion 1
let miFuncion = new Function(); //Todo despues de new es considerado objeto
//caso funcion 2
let miFuncion2 = function(){}; //Notación simplificada y recomendada


//5.5 El uso de prototype

padre.telefono = '543816693536'; //una propiedad exclusiva del objeto 'padre'
console.log(madre.telefono); //la propiedad no esta definida

//Para asignar a todos los objetos de la clase se utiliza:
//Prototype
Persona.prototype.telefono = '543816693536';
console.log(padre);
console.log(madre.telefono);

//5.6 El uso de call

let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+ ': ' + this.nombre + ' ' + this.apellido+ ' ' +telefono;
    },
    nombreCompleto3: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso del método call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona4.nombreCompleto2('Lic' , '543815024221') );
console.log( persona4.nombreCompleto2.call( persona5, 'Ing', 543815232704) );

//5.7 El uso del método apply
console.log( persona4.nombreCompleto2('Lic', '543815024221') );

let arreglo = ['Ing','543815024221'];
console.log( persona4.nombreCompleto2.apply(persona5, arreglo));
console.log( persona4.nombreCompleto3.apply(persona5));
