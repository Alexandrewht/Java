/** Aula mais de Node do que js, 
 * apenas para mostrar aonde as variaveis estao sendo executadas
 *  Entenda o RUN TIME. 
 *  Tem que ter conhecimento extra sobre os módulos de node 
*/ 

let a = 3;

globalThis.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// criando uma variavel maluca: sem var e let!
abc = 3 // não faça isso, ela está de forma global.
console.log(global.abc);

// module.exports = { c: 456, d: false, e: 'teste' }