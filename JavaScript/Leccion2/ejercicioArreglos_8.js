/*Ejercicio 8: leer 10 numero enteros en una tabla. Guardar en otra tabla los
elementos pares de la primera, y a continuacion los elementos impares. */


let tabla = [10];
let cont_par, par = []; // contador de números pares y tabla para guardarlos 
let cont_impar,impar =[]; // ídem para los impares
cont_par = 0;
cont_impar = 0;


alert("Llenar el arreglo: ");
// Leemos los valores de la tabla 
 for (let i = 0;i < 10; i++){    
 let num = parseInt(prompt("Introduzca un número: "));
 tabla[i] = num;
 if(tabla[i] % 2 == 0){ //si el numero es par
     cont_par++;
 }else{                 // si el numero es impar
     cont_impar++;
 }
} 

// creamos las tablas par e impar del tamaño adecuado 

 par = [cont_par]; //arreglo para almacenar numeros pares
 impar = [cont_impar]; //arreglo para almacenar numeros impares
 
 cont_par = 0;// vuelvo a 0 estas dos variables xq ya le asigne al arreglo la dimesion
 cont_impar = 0;// y ahora los utilizaré en el if para agregar su valor y cantidad a dicho arreglo
 
// almacenamos los elementos par e impares a cada tabla correspondiente
 
  for (let i = 0; i < 10; i++) 
     if(tabla[i] % 2 == 0){ 
         par[cont_par] = tabla[i];   
         cont_par++;
     }else{
         impar[cont_impar] = tabla[i];  
         cont_impar++;
     };
        
// volvemos a iterar para mostrar cada elemento en la tabla adecuada 
 alert("Tabla par (mirar en consola):");
 console.log("Tabla par: ")   
 for (let i = 0;i < cont_par; i++) {          
     console.log(par[i]+ " - ");
 }                    

 
alert("Tabla impar (mirar en consola):");
console.log("Tabla impar: ")    
 for (let i = 0;i < cont_impar;i++){               
     console.log(impar[i]+ " - ");
     }