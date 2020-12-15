/*Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
crie uma função que receba um objeto cidade e atribua nome e o estado a 
duas variáveis e imprima elas no console. */

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


function localidade(local){
const [city] = local;
const {nome, estado} = city;
return console.log(`Esta é ${nome} no estado de ${estado}`)
};
localidade(local);