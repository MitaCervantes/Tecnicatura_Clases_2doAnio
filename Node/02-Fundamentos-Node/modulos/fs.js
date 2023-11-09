const fs = require('fs');

//Primero leemos el archivo.txt

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) =>{
        cb(data.toString());
    } )
}

leer( `${__dirname}/archivo.txt`, console.log);//sintaxis ES6


//Segundo escribimos el archivo1.txt
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.log('No se ha podido escribir.', err)
        }else{
            console.log('Se ha escrito correctamente.')
        }
    })
}

escribir( `${__dirname}/archivo1.txt`, 'Soy un nuevo archivo' , console.log);


//Tercero eliminamos el archivo1.txt
function borrar(ruta, cb) {
    fs.unlink(ruta,cb);//elimina de manera asincrona
}

borrar(`${__dirname}/archivo1.txt`, console.log);