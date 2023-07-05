const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

// Aqui a variável não tem na memória o valor
funcs[2] ();
funcs[8] ();
