// cuidados com if

function teste1(num){
    if(num > 7)
        console.log(num);

    console.log('Final'); // aqui o final é imprimido nos 2 testes
};

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7); // CUIDADO com o ; NÃO usar com as estruturas de controle.
    {
        console.log(num);
    }
}

teste2(6);
teste2(8);