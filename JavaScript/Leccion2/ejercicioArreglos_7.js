/*Ejercicio 7: leer por teclado una tabla de 10 elementos numericos enteros y una posicion
(entre 0 y 9). Eliminar el elemento situado en la posicion dada sin dejar huecos. */


let tabla = [];

// leemos los 10 números 
alert("Ingresa los numeros de la tabla: ")
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(("Elemento (" + i + "): ")));
    tabla[i] = num;
}


// leemos la posición que nos interesa
// suponemos que la posición está en el rango 0..9 
alert("Ingresa una posicion para eliminar: ")
let posicion = parseInt(prompt("Posición a eliminar: "));

// desplazamos desde posición hasta el final todos los elementos un lugar hacia la izquierda 
// con lo que el elemento que está en posición se pierde (se borra)
for (let i = posicion; i < 9; i++) // la i llega hasta la penúltima posición
{
    tabla[i] = tabla[i + 1]; // ya que dentro usamos (i+1) que es la última posición 
                             // así evitamos salirnos de la tabla
}
alert("La tabla queda (mirar en consola): ");

console.log("Tabla: ")
for (let i = 0; i < 9; i++) { // hay que tener cuidado que ahora hay un 
    console.log(tabla[i]); // elemento útil menos en la tabla
}

