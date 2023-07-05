let num1 = 1;
let num2 = 2;

num1++ // forma pós fixada, ele acrescenta 1 unidade a variavel.
console.log(num1); // aqui a variavel passou a valer 2.

--num1 // pre fixada,essa forma tem uma forma mais apressada.
console.log(num1); // aqui diminuiu um valor da variavel, voltando a valer 1.

/**
 * --num antes do calculo
 * num-- vem após o calculo
 */
console.log(++num1 === num2--);
console.log(num1 === num2);


/** OBSERVAÇÂO A AULA FOI UM EXEMPLO NÃO UTILIZE COM FREQUENCIA.
 *  O exemplo da aula faz com que os códigos sejam dificeis de ler
 * isso pode fazer perder tempo, não é recomendado ficar usando.
 */