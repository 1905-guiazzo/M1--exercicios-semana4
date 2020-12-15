/*Crie uma arrowFunction que receba um 
objeto contendo altura e largura de um retângulo e 
retorne a área do retângulo. */

const medidas = [ 8.5, 12.3]
   


const area = medidas.reduce((altura, largura) => altura * largura).toFixed(2)
 

console.log(area)