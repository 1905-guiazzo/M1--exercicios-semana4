/*Crie uma função que apresente o ranking dos livros mais vendidos. 
Você precisa diferenciar a posição apenas dos 3 primeiros do ranking,
os demais serão apenas listados. */

const local =[ 
    {   nome: "Cachoeirinha",
        estado: "Rio Grande do Sul"},
        {
            nome: "Lages",
            estado: "Santa Catarina"
        },
        {
            nome: "Curitiba",
            estado: "Parana"
        },
        {
            nome:"São Joaquim",
            estado: "Santa Catarina"
        }
]



const imprimeLocal = local.filter((cidade, estad) =>{
    return cidade.estado ==="Rio Grande do Sul"
});


console.log(imprimeLocal)