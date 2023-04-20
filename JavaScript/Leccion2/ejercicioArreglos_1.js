/*Ejercicio 1: leer 5 numeros, guardarlos en un arreglo y
mostralos en el mismo orden introducidos.*/


let arreglo = [];

alert("Guardando los datos en el arreglo: ");
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt((i + 1) + ".Digite un numero: "));
    arreglo[i] = num;
}

alert("\nImprimir los elementos del arreglo (mirar la consola): ");
for (let i = 0; i < arreglo.length;i++) {
    console.log(arreglo[i] + " ");
}

