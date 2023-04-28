//1.1 Introducción a los Objetos en JavaScript Parte 1

let x = 10;//varaible de tipo primitiva
console.log(x.length);
console.log('Tipos Primitivos');

let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@mail.com',
    edad: 30,
    nombreCompleto: function(){//método o función en Javascript
        return this.nombre + ' ' + this.apellido;
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
let personaArray = Object.values(person);
console.log(personaArray);

//Numero 4: El metodo JSON.stringify()
console.log('Forma 4:');
let personaString = JSON.stringify(persona);
console.log(personaString);

