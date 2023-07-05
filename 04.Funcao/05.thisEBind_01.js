const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao)
    }
};

pessoa.falar();

const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: funcional e OO (Orientação ao Objeto)

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();