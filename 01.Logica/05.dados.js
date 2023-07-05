/* Valores literais, quando coloca números sem fundamentos.
console.log('Caneta');
console.log(10);
console.log(6.4);
console.log(1.5);
console.log(7.9);
*/

// Criando Variável 
var nome = 'Caneta';
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;

console.log(nome);
console.log(quantidade);
console.log(preco);
// console.log(preco + imposto);
console.log(precoFinal);

// É possível mudar a variável no decorrer da sequência de cód.
nome = "Caneta BIG";
console.log(nome);

// É possível criar variável sem o usu do var, será explicado em outra aula.
blabla = 123;
console.log(blabla);

// A forma mais moderna de criar variáveis é utilizando let
// Com a variável let, só funciona dentro do bloco.
let imposto = 1.4
