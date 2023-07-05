// notação ponto é usado para acessar pontos de um objeto ou membros de uma função.

// ceil arredonda pra cima, floor arredonda pra baixo
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola2';
console.log(obj1.nome);

// this torna o obj público.
function Obj (nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
};

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();