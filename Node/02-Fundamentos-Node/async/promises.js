function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout( function() {
            console.log('Hola ' + nombre)
            resolve(nombre);
        }, 1000);   
    })
   
}

function hablar(nombre) {
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
            //resolve(nombre);
            reject('Hay un error')
        }, 1000); 
    }) 
    .catch(error=>{
        console.log('Ha habido un error')
        console.log(error);
    })   
}


console.log('Iniciando el proceso...');
hola('Mita')
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log('Terminando el proceso.')
    })

    