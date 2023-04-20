//Introduccion a funciones
miFuncion(8, 5); //Esto se conoce como hoisting

//Declaración de la función
function miFuncion(a, b){
    console.log("Sumamos: " + (a + b));   
}

//Llamando a la función
miFuncion(5,4);

/* ---------------------------------------- */
//Palabra reservada return

//Declaración de la función
function miFuncion(a, b){
    return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

/* ----------------------------------------- */

//Declaración Función de tipo Expresión o Anonima
let sumar = function (a, b){return a + b}; //necesita cierre con punto y coma

resultado = sumar(5,6); //al llamarla se pone la variable y parentesis
console.log(resultado);

/* ---------------------------------------- */

//Funciones de tipo self y invoking
(function (a, b){
   console.log('Ejecutando la función: ' + (a + b));
})(9, 6);

/* --------------------------------------- */

//Tipos de datos en una función

console.log(typeof miFuncion);

function miFuncionDos(a, b) {
    console.log[arguments];
}

miFuncionDos(5, 7);

var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

/* --------------------------------------- */

//Funciones Flecha

const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); //Asignamos el valor a una variable
console.log(resultado);

/* --------------------------------------- */
//Argumentos y parámetros

//Declaración Función de tipo Expresión
let sumar1 = function (a = 4, b = 8){
    console.log(arguments[0]); //muestra el parametro de a
    console.log(arguments[1]); //muestra el parametro de b
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumar1(3, 6, 7);
console.log(resultado);

/* --------------------------------------- */

//Concepto hoisting

let respuesta= sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){ //arguments es para arreglos
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}

/* --------------------------------------- */
//Paso por valor

//Tipos primitivos
let k = 10;

function cambiarValor(a){ //Paso por valor
    a = 20;
}

cambiarValor(k);//10
console.log(k);

/* --------------------------------------- */

//Paso por referencia

const persona = {
    nombre: 'Juan',
    apellido: 'Lopez'
}

function cambiarValorObjeto(p1){ //Paso por referencia
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValorObjeto( persona );
console.log( persona );

/* ------------------------------------ */

