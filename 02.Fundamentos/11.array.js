/*  Array agrupa multiplos valores em uma estrutura indexada.
*   O primeiro elemento através do índice 0, o segundo do 1...
*/ 

// O par de chaves significa que está criando um array.
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // o índice 4 não esta no array, então ele retorna undefined.

valores[4] = 10;
console.log(valores);
console.log(valores.length); // lenght seve para acessar os elementos dentro do array.

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); // aqui ele retira o útimo valor do array e retorna ele.
delete valores[0]; // aqui ele remove o elemento 0 do array, serve para tirar um elemento de um objeto.
console.log(valores);

console.log(typeof valores);