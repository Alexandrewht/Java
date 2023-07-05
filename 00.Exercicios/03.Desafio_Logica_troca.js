 var a = 7;
 var b = 94;

// depois da troca... a = 94 e b = 7

console.log('A vale: ' + a);
console.log('B vale: ' + b);

a = 94
b = 7

console.log('A vale: ' + a);
console.log('B vale: ' + b);

/*Resolução
let a = 7;
let b = 94;

let temp = a; // Aqui foi atribuido o valor da variável "a" para temp
a = b
b = temp;

// depois da troca... a = 94 e b = 7

{
    // nesse bloco a passou a valer 94 e b copiou o 94 e retornou 94
    a = b; 
    b = a;
}


console.log('A vale: ' + a);
console.log('B vale: ' + b);

*/

/*Resolução 2 (Otimizada)
let a = 7;
let b = 94;

[a, b] = [b, a] // Aqui troca de valores as duas variáveis

console.log('A vale: ' + a);
console.log('B vale: ' + b);
*/