/*Considerando a mesma entidade Pessoa do exercício 3:
 https://trello.com/c/LgeM2xcO crie uma função que receba uma lista de pessoas e 
 descubra se todas as pessoas da lista possuem 
 a profissão “Programador” retornando o resultado. */

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

const profissao = pessoas.every(pessoa => pessoa.profissao == "Programador");

console.log(profissao);

