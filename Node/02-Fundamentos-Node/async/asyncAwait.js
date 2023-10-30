//la palabra async no es necesaria en las funciones, porque ya son asincronas
async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout( function() {
            console.log('Hello ' + nombre)
            resolve(nombre);
        }, 1000);   
    })
   
}

function hablar() {
    return new Promise ((resolve, reject)=>{ //usamos la sintaxis ES&
        setTimeout( function() {
            console.log('bla bla bla bla')
            resolve();
        }, 1000);
    })     
}

function adios(nombre) {
    return new Promise ((resolve, reject)=>{
        setTimeout( function() {
            console.log('Adios ' + nombre)
            resolve(nombre);
            //reject('Hay un error')
        }, 1000); 
    })  
}

//await adios('Mariana'); //esto es una mala sintaxis
//await solo es valido dentro de una funcion asincrona


async function main() {
   let nombre = await hola('Mariana');
   await hablar();
   await hablar();
   await hablar();
   await adios(nombre);
   console.log('Terminando el proceso.');
}

console.log('Iniciando el proceso...');
main();
console.log('Esta va a ser la segunda instruccion.');


//Codigo en ingles
//es asincrono y retorna una promesa

async function sayHello(name) {
    return new Promise(function(resolve, reject){
        setTimeout( function() {
            console.log('Hello ' + name)
            resolve(name);
        }, 1000);   
    })
   
}

function talk() {
    return new Promise ((resolve, reject)=>{ //usamos la sintaxis ES&
        setTimeout( function() {
            console.log('bla bla bla bla')
            resolve();
        }, 1000);
    })     
}

function sayBye(name) {
    return new Promise ((resolve, reject)=>{
        setTimeout( function() {
            console.log('Godbye ' + name)
            resolve(name);
           // reject('Hay un error')
        }, 1000); 
    })  
}

async function conversation(name) {    
 console.log('Starting async process...');
    //let name = await sayHello('Mariana');
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log('Process completed.');
 }
 
