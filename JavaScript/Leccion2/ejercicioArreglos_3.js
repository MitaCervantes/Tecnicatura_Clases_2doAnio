/*Ejercicio 3: leer 5 numeros por teclado, almacenarlos en un arreglo,
y a continuacion calcular la media de los numeros positivos, la media de 
los negativos, y contar el numero de ceros.*/


let numeros = [];
let negativos = 0, positivos = 0, mediaNegativos, mediaPositivos;
let conteo0 = 0, conteo_negativos = 0, conteo_positivos = 0;

alert("Guardando los datos en el arreglo: ");
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt((i + 1) + ".Digite un numero: "));
    numeros[i] = num;
    if(numeros[i] > 0){
        positivos += numeros[i];
        conteo_positivos ++;
    }else if(numeros[i] < 0){
        negativos += numeros[i];
        conteo_negativos ++;
    }else{
        conteo0 ++;
    }                
}
if(conteo_positivos == 0){
    alert("\nNo se pudo sacar la medio de los numeros positivos.");
}else{
    mediaPositivos = positivos/conteo_positivos;
    alert("La media de los numeros positivos es = " + mediaPositivos);
}

 if(conteo_negativos == 0){
    alert("\nNo se pudo sacar la medio de los numeros negativos.");
}else{
    mediaNegativos = negativos/conteo_negativos;
    alert("La media de los numeros negativos es = " + mediaNegativos);
}
 alert("La cantidad de ceros es = " + conteo0);