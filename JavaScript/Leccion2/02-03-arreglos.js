//Creacion de Array o arreglos
//let autos = new Array('BMW','Mercedes Benz','Volvo'); esta es la sitanxis vieja
const autos = ['Ferrari','Renaul','BMW'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//Recorremos los elementos de un arreglo
for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

//Modificamos los elementos al arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos elmentos al arreglo
autos.push('Audi');
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';
console.log(autos);

//Tercera forna de agregar elementos teniendo CUIDADO
autos[6]= 'Renault';
console.log(autos);

//Como preguntar si es un Array o un arreglo
console.log(typeof autos);

console.log( Array.isArray(autos) );//Devuelve un booleano

console.log( autos instanceof Array);//Preguntamos si la variable es una instancia de la clase Array