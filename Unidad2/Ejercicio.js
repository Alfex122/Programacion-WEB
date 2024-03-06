//Pedir un numero mayor a 10 y recorrer desde el 1 hasta n e imprimir en una ventana los numeros que sean pares
'use strict'

do{
    var Numero = prompt("Ingresa un numero");
    if (Numero <10 ){
        alert("El numero es menor que 10, vuelve a ingresar otro");
    }
}while(Numero < 10);

var i = 0;
while(i < Numero){
    i = i + 2
    alert(i + " es un numero par");
}