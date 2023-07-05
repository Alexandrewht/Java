// var identificador (escolha bons nomes) ";" (sem nenhum identificador)
// var idade = 3;

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(preco * 0.6);
console.log(preco * 1 - desconto); // valor errado
console.log(preco * (1 - desconto)); // valor correto

console.log(precoComDesconto);

let nome = 'Caderno'; // String = sequência de símbolos
let categoria = 'Papelaria'; 

// Usando o + ele concatena os dados soma em string

console.log('Produto: ' + nome
+ ", Categoria: " + categoria
+ ', Preço: ' + preco
+ ', Desconto: ' + desconto);

console.log(1 + 1); // Aqui ele está somando 2 números int
console.log('1' + 1); // Aqui ele está concatenando o número 1