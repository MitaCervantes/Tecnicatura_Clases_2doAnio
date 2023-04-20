/*Ejercicio 2: leer 5 numeros, guardarlos en un arreglo y
mostralos en el orden inverso al introducidos.*/


let numeros = [];

alert("Guardando los datos en el arreglo: ");
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt((i + 1) + ".Digite un numero: "));
    numeros[i] = num;
}

alert("\nImprimir los elementos del arreglo (mirar la consola): ");
for (let i = 4; i >= 0;i--) {
    console.log(numeros[i] + " ");
}
