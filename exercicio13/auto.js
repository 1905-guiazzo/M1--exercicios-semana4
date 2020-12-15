/*Considerando uma entidade Cidade, contendo os seguintes 
atributos nome e estado, crie uma função que receba uma lista de cidades e
 retorne a lista de estados em que o estado seja “SC”. */

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
    return cidade.estado ==="Santa Catarina"
});


console.log(imprimeLocal)

