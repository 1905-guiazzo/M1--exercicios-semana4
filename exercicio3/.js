/*Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, 
crie uma função que receba uma lista de pessoas e 
descubra se alguma das pessoas da lista é maior de idade (18 anos) retornando o resultado. */

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

const deMaior = pessoas.some(pessoa => pessoa.idade > 18);

console.log(deMaior);

