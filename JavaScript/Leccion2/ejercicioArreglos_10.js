/*Ejercicio 10: leer 10 enteros ordenados crecientemente. Leer N y buscarlo en la tabla. 
Se debe mostrar la posicion en que se encuentra. Si no esta, indicarlo con un mensaje.*/


let tabla = [];
let num,j;


for (let i = 0; i < 10; i++) {
  let num1 = parseInt(prompt("Introduzca numero (orden creciente): "));
  tabla[i] = num1;
}

num = parseInt(prompt("Introduzca numero a buscar: "));
j = 0;

while (j < 10 && tabla[j] < num) {
  j++;
}

// cuando me salgo del mientras puede ser por dos motivos:
// - que j llegue a 10 ó
// - que encuentre el donde iría num en la tabla

if (j == 10)
  // hemos llegado al final y no hemos encontrado nada.
  alert("No encontrado");
else {
  // si t[j] < num, hemos sobrepasado el lugar donde debería estar num, sin encontrarlo
  if (tabla[j] == num) {
    // num está en la posición i. Entonces si está ahí.
    alert("Encontrado en la posición " + j);
  } else {
    alert("No encontrado");
  }
} 



