/*Crie uma função que apresente o ranking dos livros mais vendidos. 
Você precisa diferenciar a posição apenas dos 3 primeiros do ranking,
os demais serão apenas listados. */

const titulos = ["Harry Potter e a Pedra Filosofal", "O pequeno Principe", "A menina que roubava livros", "Ranger - Ordem dos arqueiros", "Querido John"]
const maisVendidos = ([primeiro, segundo, terceiro,...restante])=>{
    console.log(`primeiro lugar ${terceiro}, segundo lugar ${primeiro}
    , terceiro lugar ${segundo}, segue os demais: ${restante}`)
}                       
maisVendidos(titulos)