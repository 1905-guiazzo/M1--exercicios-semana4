/*Crie uma função que receba uma lista de valores numéricos, e utilizando a 
função reduce imprima a multiplicação dos valores da lista. */

const numeros = [ 3, 4, 7, 10]
   


const multiResultado = numeros.reduce((numAnt, numAtual) => numAnt * numAtual, 1)

console.log(multiResultado)