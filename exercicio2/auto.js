/*Crie uma função que receba um uma lista de números e imprima o quadrado de cada número. */

var arrayNotas = [5, 7, 10, 6, 8];


var quadrado = arrayNotas.map(function (item) {
    return Math.pow(item, 2);})
 
    console.log(quadrado);


