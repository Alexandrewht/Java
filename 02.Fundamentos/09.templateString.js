const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

/*
* Com template é possível usar a quebra de linha na string.
* Para chamar a função template
* Começa com ` (O assento grave)c
* depois com o sifrão de Dollar,
* depois abre e fecha chaves,
* Exemplo: `.... ${...} .... `;
*/

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template);


// expressões....
console.log(`1 + 1 =  ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`);