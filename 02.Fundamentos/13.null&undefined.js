let valor // não inicializada.

console.log(valor);
// console.log(valor2); Aqui ele nem tem váriavel declarada, emite o erro. "valor2 is not defined".

valor = null // ausência de valor, ela não aponta para nenhum objeto na memória.

console.log(valor);
// console.log(valor.toString()); não pode ler a propriedade null para tostring.

const produto = {}
console.log(produto.preco) // aqui vai voltar como undefined, como já tem o produto, mas não tem o produto, volta como vazio.
console.log(produto); // existe o produto mais sem preço.

produto.preco = 3.50; // aqui foi definido um preço.
console.log(produto.preco);

produto.preco = undefined // evite atribuir undefined.
console.log(!!produto.preco);
// delete produto.preco; Melhor forma de remover o atributo de um objeto.
console.log(produto);

produto.preco = null // sem preço, este produto está sem preço.
console.log(!!produto.preco);
console.log(produto);

/* Mudando o interior do objeto

const a = {name: 'Teste'}; // a const a aponta o endereço do objeto.
const b = a;

console.log(a, b);

b.name = 'Opa'; // ao mudar o endereço da const a, o a passou a entregar o valor que mudou.

console.log(a, b);

let c = 3;
let d = c; // aqui foi feito uma cópia por valor.

d++  // ++ incrementa +1.

console.log(c);
console.log(d);
*/