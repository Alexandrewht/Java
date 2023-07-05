// hoisting significa içamento, jogar pra cima.

console.log('a =', a); // Aqui não foi definida, mas existe por isso não gerou erro.
var a = 2;
console.log('a =', a);

/* 
 Com let da o erro de que não é possível acessar a variável b depois da inicialização

console.log('b =', b);
let b = 2;
console.log('b =', b);
*/