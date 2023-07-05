// aqui um exemplo de que as duas serão alteradas feitas de forma global.
// fuja do escopo global.
var numero = 1;
{
    var numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);