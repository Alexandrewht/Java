//                  1° parte        ?       retorno
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));

/** também da certo no modo tradicional
 * 
 * const resultado = nota => {
 *      return nota >= 7 ? 'Aprovado' : 'Reprovado'
 * };
 */