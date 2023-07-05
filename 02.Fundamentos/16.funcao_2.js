// Armazenando uma função dentro de uma variável.
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3);


// Armazenando uma função arrow em uma variável.
// function tbm é usado o sinal "=>" (arrow functiion)
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));


// retorno implícito
// sem o corpo é usado para uma única linha
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3));


const imprimir2 = a => console.log(a)
imprimir2('Legal!!')