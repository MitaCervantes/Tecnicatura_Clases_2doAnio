/*Ejercicio 4: leer 10 numeros enteros, guardarlos en un arreglo. Debemos
mostrarlo en el siguiente orden: el primero, el ultimo, el segundo, el penultimo,
el tercero, etc. */

        
let numeros = [];
        
alert("Guardando los datos en el arreglo: ");
for(let i = 0; i < 10; i++){
    let num = parseInt(prompt(((i + 1) + ".Digite un numero: ")));
    numeros[i] = num;
}

alert("\nImprimir los elementos del arreglo (mirar la consola): ");
for (let i = 0; i < 5; i++){
    console.log(" " + numeros[i]);
    console.log(" " + numeros[9-i]);
}             