/*Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
crie uma função que recebe uma lista de cidades e retorna uma 
lista com os nomes das cidades concatenados com o seu estado. */

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

const imprimeLocal = local.map((cidade, estad) =>{
    return `${nome} + ${estado}`
});


console.log(imprimeLocal)

