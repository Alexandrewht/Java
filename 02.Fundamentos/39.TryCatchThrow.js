// Tratamento de erro

function tratarErroELancar(erro){
   // throw new Error('...')
   // throw 10
   // throw true
   // throw 'Mensagem'
   throw {
    nome: erro.nome,
    msg: erro.message,
    date: new Date,
   }
};

// try é um bloco que pode gerar um erro.
// catch detalhar o erro e ver oq está errado.
// finally vai mostrar com erro ou sem erro.

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
};

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);