// var é para criar variáveis no escopo global, funcionam em qualquer parte do cód
// o problema disso é que podem ser sobrescrevidas novas variáveis.

{
    {
        {
            {   
                var sera = 'Será???';
                console.log(sera);
            }
        }
    }
}

console.log(sera);

function teste() {
    var local = 123
    console.log(local);
}

teste();
// Fora do escopo da erro
// console.log(local);