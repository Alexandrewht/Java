const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

// Aqui a variável tem na memória o valor
funcs[2]();
funcs[6]();
funcs[8]();

// uma variável tem consciência de onde ela foi definida.