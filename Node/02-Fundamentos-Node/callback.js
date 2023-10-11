/* function soyAsincrona(miCallback) {
    setTimeout(function() {
        console.log('Hola, soy una funcion asincrona.')
        miCallback();
    }, 1000);
    
}

console.log('Iniciando el proceso...');
soyAsincrona(function(){
    console.log('Terminando el proceso.');
});
 */

function hola(nombre, miCallback) {
    setTimeout( function() {
        console.log('Hola ' + nombre)
        miCallback();
    }, 1000);
    
}
function adios(nombre, otroCallback) {
    setTimeout( function() {
        console.log('Adios ' + nombre)
        otroCallback(nombre);
    }, 1500);
    
}

console.log('Iniciando el proceso...');
hola('Carlos',function(nombre){
    adios(nombre, function(){
        console.log('Terminando el proceso.');
    })   
});

//hola('Carlos', function(){});
//hola('Carlos', function(){});
