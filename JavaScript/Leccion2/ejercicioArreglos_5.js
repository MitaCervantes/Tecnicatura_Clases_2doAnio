/*Ejercicio 5: leer por teclado 2 tablas de 10 numeros enteros y 
mezclarlas en una tercera de la forma: el 1° de A, el 1° de B,
el 2° de A, el 2° de B, etc. */

 
let a=[10], b=[10], c=[20];
let i, j;

// la tabla c tendrá que tener el doble de tamaño que a y b.

// leemos la tabla a
alert("Ingresamos la tabla a: ");
for (let i = 0; i < 10; i++) {
    let numA = parseInt(prompt(("Digite un número: ")));
    a[i] = numA;
}

// leemos la tabla b
alert("Ingresamos la tabla b: ");
for (i = 0; i < 10; i++) {
    let numB = parseInt(prompt(("Digite un número: ")));
    b[i] = numB;
}
// asignaremos los elementos de la tabla c
// para las tablas a y b utilizaremos como índice i
// y para la tabla c utilizaremos como índice j.
j = 0;
for (i = 0; i < 10; i++) {
    c[j] = a[i];
    j++;
    c[j] = b[i];
    j++;
}
alert("La tabla c queda (mirar la consola): ");
for (j = 0; j < 20; j++) // seguimos utilizando j, para la tabla c. Aunque se podría utilizar i.
{
    console.log(c[j] + " ");
}

