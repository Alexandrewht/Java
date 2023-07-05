// o {} significa um objeto.
const prod1 = {};
prod1.nome = 'Celular Utra Mega',
prod1.preco = 4998.90,
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço.

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2);


/*  Isso é um json, diferente de object
*   '{ "nome": "Camisa Polo", "preco": 79.90 }' 

*    JSON = Java Script Object Notation
*   é uma formatação utilizada para estruturar dados em formato de texto e transmiti-los de um sistema para outro.
*/ 