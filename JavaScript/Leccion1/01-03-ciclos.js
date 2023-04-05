//While
let contador = 0;

while( contador < 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

//Do While
do{
    console.log(contador);
    contador++;
}while(contador < 3);
console.log("Fin ciclo do while");

//For
for(let contando = 0; contando < 3 ; contando++ ){
    console.log(contando);
}
console.log("Fin ciclo for");

//Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if( contando % 2 == 0){
		 console.log(contando);//muestra todos los pares
        break;
    }   
}
console.log("Termina el ciclo al encontrar el primer numero par.")

//Palabra reservada continue
for(let contando = 0; contando <= 10; contando++){
    if( contando % 2 !== 0){		 
        continue;
    }
    console.log(contando);
}
console.log("Termina el ciclo.")

//Etiqueta Labels
inicio:
for(let contando = 0; contando <= 10; contando++){
    if( contando % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contando);
}
console.log("Termina el ciclo.")


