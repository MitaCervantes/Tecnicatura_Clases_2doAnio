/*Ejercicio 9: leer dos series de 10 enteros, que estaran ordenados crecientemente.
Copiar (fusionar) las dos tablas en una tercera, de forma que sigan ordenados.*/

let a = [10], b = [10], c = [20];
let i, j, k ;


// leemos a
alert("Datos para tabla 'a' (orden creciente): ");
for (i = 0; i < 10; i++) {
    let num = parseInt(prompt(("Introduzca un numero: ")));
    a[i] = num;
}

// leemos b
alert("Datos para tabla 'b' (orden creciente): ");
for (i = 0; i < 10; i++) {
    let num1 = parseInt(prompt(("Introduzca un numero: ")));
    b[i] = num1;
}


// creamos c comparando los valores para insertarlos en tabla c      
i = 0; //utilizaremos i como indice de a;
j = 0; //utilizaremos j como indice de b;
k = 0; //utilizaremos k como indice de c;

while(i < 10 && j < 10){
if(a[i] < b[j]){ // nos interesa el elemento de a
        c[k] = a[i]; // 
        i++;// incrementamos i para tomar el siguiente elemento de a                
}else{
        c[k] = b[j];
        j++;// incrementamos j para tomar el siguiente elemento de b   
    }
    k++; //como hemos copiado a c[k], incrementamos k para
         //en la siguiente vuelta, utilizar el siguiente hueco de la tabla
}	

//cuando salimos de while es porque alguna de las tablas (a ó b) ha llegado al final

if(i == 10) // hemos copiado toda la tabla de a en c, queda por copiar un resto de b
        while(j < 10){
                c[k] =  b[j];
                j++;
                k++;
        }
else    // hsy que copiar el resto de a en c
        while(i < 10){
                c[k] = a[i];
                i++;
                k++;
        }

alert("Mostramos la tabla c (mirar en consola):");

for (k = 0; k < 20; k++) {
    console.log(c[k] + " ");
    };
