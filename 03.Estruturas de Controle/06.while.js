function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
};

let opcao = 0;

// fica girando enquanto a expressão for verdadeira, 
// quando for falsa termina.

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
};

console.log('Até a próxima!');