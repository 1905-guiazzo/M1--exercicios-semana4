/*Crie uma função que retornará uma promise, ela receberá dois valores 
numéricos como parâmetro, a função deve somar os dois valores e 
somente resolver a promise caso o resultado seja par retornando o 
valor da soma e rejeitando a promise caso ímpar, 
retornando uma mensagem explicativa */

const numeroPar = (numero1, numero2)=>{
    const soma = numero1 + numero2
    const promise = new Promise((resolve, reject) => {
        if (soma % 2 === 0){
           
            setTimeout(() => resolve(soma + " É par!"), 2000);

        } else {
            
            setTimeout(() => reject ("Erro! o número é impar."), 3000);
        }
    });
    return promise;
};
numeroPar(4, 3)
.then((resposta)=>{
    console.log(resposta);
})
.catch((erro)=>console.log(erro))
    

 