/* Ejercicio1 : Llenar una lista
 Llenar una lsita con los numeros del 1 al 50, luego
 mostra la lista con el bucle for, los elementos deben mostrarse
 de la siguiente forma:
 1-2-3-4-5...-50. */

/* lista = []

i = 1
while (i < 51){
    lista.push(i)
    i += 1
}

for (i in lista){
    i++
    console.log(i, end="-")} */

/* Ejercicio2: Modificar los elementos de una lista
 Llenar una lista con los numeros del 1 al 10, luego modificar los
 elementos de la lista multiplicandolos por un valor ingresado por el usuario. */
 
/* const lista = [1,2,3,4,5,6,7,8,9,10]

console.log('Lista original')
for (i in lista){
    i++
    console.log(i, end="-")
}

let valor = 5;//parseparseINt(prompt("Digite un valor a muliplicar:  "));
//Multiplicamos todos los elementos de la lista:
lista.forEach(function (item, index) {     
    lista[index] = item * valor    
});

console.log('Lista final con los elementos multiplicados por ' + valor + ':')
for (let i = 0; i < lista.length; i++) {
    console.log(i+1, end="- " + lista[i])    
}
 */
/* Ejercicio3: Insertar elementos y ordenarlos
 Pedir numeros y meterlos en una lista, cuando el usuario
 introduzca un numero 0, nuestro programa dejaria de insertar.
 Por ultimo mostrar los numeros ordenados de menor a mayor. */

/* let newArray = []
salir = false

while (salir == false){
    numero = parseInt(prompt("Digite un numero: "))
    if (numero == 0){
        salir = true
    }  else{
       newArray.push(numero)
    }
} 
newArray.sort(function(a, b){return a - b});
console.log('Lista ordenada:' + newArray) */


/*  Ejercicio 4: sumar numeros pares dentro de un rango.
 Hacer un programa para sumar numeros pares dentro
 de un rango, por ejemplo: suma de numeros pares del 2 al 30
                           suma = 240 */

/* let inicio = parseInt(prompt("Digite de donde va a comenzar la suma: "))
let fin = parseInt(prompt("Digite hasta donde quiere llegar a sumar: "))

suma = 0

function range(inicio, fin) {
  var nums = [];
  for (let i = inicio; i <= fin; i++) {
    nums.push(i);
    if (i % 2 == 0) {
      suma += i;
      console.log(i);
    }
  }
}
range(inicio, fin);
alert("La suma del rango dentro de numero pares es: " + suma); */

/* Ejercicio 5: factorial de un numero positivo.
Hacer un programa para calcular el factorial de un numero positivo */

/* let num = parseInt(prompt("Digite un numero para calcular el factorial: "))
while (num <= 0) {
    console.log("Error -> El numero tiene que ser positivo")
    num = parseInt(prompt("Digite otro numero: "))
}

function factorial (num) {
	var total = 1; 
	for (i=1; i<=num; i++) {
		total = total * i; 
        console.log(totals)        
	}alert('El factorial de 5 es: ' + total);
	
}
factorial(num); */

/*  Ejercicio 6: Tabla de multiplicar
 Hacer un programa que pida un numero por teclado y guarde
 en una lista su tabla de multiplicar hasta el 10. Por ejemplo:
 Si digita el 5 la lista tendra: 5,10,15,20,25,30,35,40,45,50. */

/* let numero = parseInt(prompt("Digite un numero: "))
let array1 = [] 

let num1 = 1;
let num2 = 11;

function range(num1, num2) {
  for (let i = num1; i < num2; i++) {
    array1.push(i*numero);     
  }
}
range(num1,num2);

alert('La tabla de multiplicar del numero ' + numero + ' es: ' + array1)

array1.forEach(function (item, index) {   
    console.log((index + 1) + 'x' + numero + '=' + array1[index] )    
    console.log(index, item)
});
 */

/*  Ejercicio 7: Juego adivina el numero
 Realizar un juego para adivinar un numero. Para ello se debe
 generar un numero aleatorio entre 1-100, y luego ir pidiendo
 numeros indicando "es mayor" o "es menor" segun sea mayor o menor
 con respecto a N. El proceso termina cuando el usuario acierta
 y alli se debe mostrar el numero de intentos. */


/* alert(".:Juego adivina el numero:.");
aleatorio = Math.floor((Math.random() * 10) + 1);
conteo = 0;

numero = parseInt(prompt("Digite un numero: "));
while (true) {
  conteo += 1;
  if (numero > aleatorio) {
    numero = parseInt(prompt("Digite un numero menor: "));
  } else if (numero < aleatorio) {
    numero = parseInt(prompt("Digite un numero mayor: "));
  } else {
    alert("Felicidades!!! Has adivinado el numero " + aleatorio + "!");
    break;
  }
}
alert('Has adivinado el numero en ' + conteo + ' intentos.');
 */


/* Ejercicio 8: Menu Interactivo - Cajero Automatico
 Hacer un programa que simule un cajero automatico con un saldo
 inicial de $1000  y tendrá el siguiente menú de opciones:
                   1. Ingresar dinero en la cuenta
                   2. Retirar dinero de la cuenta
                   3. Mostrar dinero disponible
                   4. Salir */

/* saldo = 1000
while (true){
    alert("\t.:Menu:.")
    alert("1.Ingresar dinero en la cuenta")
    alert("2.Retirar dinero de la cuenta")
    alert("3.Mostrar dinero disponible")
    alert("4.Salir")
    alert()
    opcion = parseInt(prompt("Digite una opcion: "))
    alert()
    if (opcion == 1){
        ingreso = parseFloat(prompt("Cuanto dinero desea ingresar: "))
        saldo += ingreso
        alert(`Saldo actual: ${saldo}.-`)
        alert()
    }else if (opcion == 2){
        extraccion = parseFloat(prompt("Cuanto dinero desea extraer: "))
        if (extraccion > saldo){
            alert("Saldo insuficiente para realizar operacion.")
            alert(`Saldo actual: ${saldo}.-`)
            alert("Ingrese nuevamente una opcion: ")
            alert()
        }else{
            saldo -= extraccion
            alert(`Saldo actual: ${saldo}.-`)
            alert()
        }
    }else if(opcion == 3){
        alert(`Su saldo actual es : ${saldo}`)
        alert()
    }
    else if (opcion == 4){
        alert("Usted ha terminado de operar en su cuenta.")
        console.log()
        break;
    }
    else{
        alert("Error, opcion de menu incorrecta.")}
    }
alert("Gracias por utilizar nuestros servicios.") */

/*  Ejercicio 9: Mostrar una frase sin espacios y contar su longitud
 Hacer un programa donde el usuario ingrese una frase, se le
 devolverá la misma frase pero sin espacios en blanco, y ademas
 un contador de cuantos caracteres tiene la frase
 (sin contar los espacios en blanco)
 Ejemplo: frase = vivir por siempre en paz
          frase final = vivirporsiempreenpaz
          N° de caracteres = 20 */

/* frase1 = prompt("Escriba una frase: ");
frase2 = ""

for (let i = 0; i < frase1.length; i++){
    if (frase1[i] != " "){
        frase2 += frase1[i]
        console.log(frase1[i])        
    }
}
frase1 = frase2

alert("Frase final: " + frase1)
alert("N° de caracteres: " + frase1.length)
 */

/*  Ejercicio 10: No repetir caracteres
 Hacer un programa que pida una cadena por teclado, luego
 meter los caracteres en una lista sin repetir caracteres. */


/* lista = []
cadena = prompt("Digite una frase: ")

for (i = 0;i < cadena.length; i++){
    if(!lista.includes(cadena[i])){
        lista.push(cadena[i]);
    }
       console.log(cadena[i])    
}
alert('Lista de caracteres sin repetir ninguno : ' + lista) */


/*  Ejercicio 11: Agenda telefonica
 Hacer un programa que simule una agenda de contactos. Crear
 un diccionario donde la clave sea el nombre del usuario y el valor
 sea el telefono, el programa tendrá el siguiente menu de opciones:
           1.Nuevo contacto
           2.Borrar contacto
           3.Ver contactos existentes
           4.Salir */

/* agenda = {}
console.log(agenda)

while (true){
    alert("\t.:Menu:.")
    alert("1.Nuevo contacto")
    alert("2.Borrar contacto")
    alert("3.Ver contactos existentes")
    alert("4.Salir")
    
    opcion = parseInt(prompt("Digite una opcion: "))

    if (opcion == 1){
        nombre = prompt("Ingrese el nombre del contacto: ")
        telefono = prompt("Digite el numero de telefono: ")
    
        if (nombre in (Object.values(agenda))){
            alert("Ese nombre de contacto ya existe.")
            console.log(nombre)          
        }
        else{
            agenda[nombre]= telefono
            alert("Contacto agregado exitosamente.")      
        }
        
    }else if(opcion == 2){
        nombre = prompt("Cual es el nombre del contacto: ")
    
        if (nombre in agenda){
            delete(agenda[nombre])
            alert("Se ha eliminado el contacto requerido.")
        }
        else{
            alert("Ese contacto no existe en la agenda!")
        }
        
    }else if (opcion == 3){
        alert('Agenda de contactos: ')       
        for (let valor in agenda) {
            const keys = Object.keys(agenda);
            alert("Nombre: " + keys + " " + " Celular: " + agenda[valor]);
            }        
    }
    else if (opcion == 4){
        alert("Gracias por utilizar su agenda de contactos")
        break;
    }
    else{
        alert("Se equivocó de opción de menú.")        
    }
}
 */