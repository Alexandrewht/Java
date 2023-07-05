// Usando Let, a váriavel só é visivel dentro do bloco.

var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);