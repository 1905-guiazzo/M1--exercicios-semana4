/*Crie uma função que receba como parâmetro uma lista de notas 
e calcule a média dessas notas imprimindo o resultado. */

var arrayNotas = [5, 7, 10, 6, 8];
var intSoma = 0;
var intMedia = 0;

function imprimeNota(nota) {
    for (var i = 0; i < arrayNotas.length; i++) {
        intSoma += arrayNotas[i];
    }
    intMedia = intSoma / arrayNotas.length;
    console.log(intSoma);
    console.log(intMedia);
}

