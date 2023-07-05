// função sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3);
imprimirSoma(2); // pode passar um valor, porém irá retornar um Not a Number.
imprimirSoma(2, 10, 4, 5, 6); // aqui ele vai pegar os 2 primeiros e ignorar o restante.
imprimirSoma(); // sem nenhum parametro ele vai retornar um Not a Number.

// função com retorno.
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3)); // é possivel alterar o paramentro dentro da função.
console.log(soma(2));

console.log(soma);
console.log(soma());
