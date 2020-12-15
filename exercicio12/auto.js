/*Crie uma função que receba 3 parâmetros (bairro, cidade, estado) e 
imprima os dados em um formato de endereço, utilizando Template String. */

const endereco = {
    bairro: "Canasvieiras",
    cidade: "Florianópolis",
    estado: "Santa Catarina"
}

const imprimeLocal = (mapa) =>{
    const {bairro, cidade, estado} = mapa
    console.log(`${bairro}, ${cidade}, ${estado}.`)   
}

imprimeLocal(endereco)