const escola = 'Cod3r';

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // quando passa do ultimo caractere, ele retorna em branco.
console.log(escola.charCodeAt(3)); // aqui ele chama o número da tabela da unicode.
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // aqui foi pedido para mostrar do índice 0 ao 3

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + (escola) + ("!")); // aqui ele também concatenou.

console.log(escola.replace(3, 'e')); // aqui ele trocou oque foi pedido.
console.log(escola.replace(/\w/g, 'e')); //reg ex

console.log('Ana,Maria,Pedro'.split(',')); // aqio foi gerado um array.
