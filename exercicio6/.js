/*Novamente considerando a entidade Pessoa do exercício 3: 
https://trello.com/c/LgeM2xcO crie uma função que receba uma lista de pessoas e 
retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos. */

const pessoas = [
    {
        nome: "Jonathan",
        idade: 13,
        telefone: "3222-5657",
        profissao: "Guia",
    },
    {
        nome: "Pedro",
        idade: 25,
        telefone: "3358-9878",
        profissao: "Carpinteiro",
    },
    {
        nome: "Guilherme",
        idade: 28,
        telefone: "3456-8768",
        profissao: "Bartender",
    },
    {
        nome: "Tayna",
        idade: 17,
        telefone: 3277 - 9823,
        profissao: "Estudante de programção",
    },
];


const listaMenor = pessoas.filter((usuario, pessoas)  =>  {
    return usuario.idade < 18;
})
 
console.log(listaMenor)

