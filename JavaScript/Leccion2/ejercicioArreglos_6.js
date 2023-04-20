/*Ejercicio 6: leer 5 elementos numericos que se introduciran ordenados de forma creciente.
Estos los guardaremos en una tabla de tamaño 10. Leer un numero N, e insertarlo en el lugar
adecuado para que la tabla continue ordenada.*/


let tabla =[];
let num, nums,sitio_num,j;

alert("Introduzca número (ordenado crecientemente): ");
for (let i = 0;i < 5; i++){    
    let nums = parseInt(prompt("Numero" + (i+1) + " : "))
    tabla[i]= nums;
}
  
alert("Ingrese el numero a insertar entre los anteriores: ");
num = parseInt(prompt("Su número: "));
sitio_num = 0;
j=0;

// buscaremos el sitio donde debería ir num
while(tabla[j] < num && j <= 4){
    sitio_num ++;
    j++;
}        
// desplazaremos los elementos desde el sitio_num hasta el final
// así haremos un hueco para num     
for (let i = 4; i >= sitio_num; i--){
    tabla[i+1] = tabla[i];
}
// por último ponemos num en su sitio para que todo siga ordenado
tabla[sitio_num] = num;

//mostramos la serie ordenada
alert("La nueva serie ordenada queda (mirar en consola): ");
for (let i = 0; i < 5+1 ; i++){
    console.log(tabla[i]);
}        