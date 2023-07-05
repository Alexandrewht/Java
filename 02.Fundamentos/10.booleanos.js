let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); 
/* A ! significa negação 
* Ela vai forçar a mudar o resultado de verdadeiro para falso 
*se está retornando verdadeiro, irá para falso.
*/
console.log(!!isAtivo); // Com duas retorna o contrário.

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...')

console.log(!!0);
console.log(!!''); // string sem nada retorna falso.
console.log(!!null); 
console.log(!!NaN); 
console.log(!!undefined); 
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));

let nome = '';

console.log(nome || 'Desconhecido'); // || significa OU, se não achar um valor, entrega outro.
