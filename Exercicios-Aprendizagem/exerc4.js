// Crie uma função que exiba em reais o valor em duas casa decimais 

function dinheiro(valor) {
    valorReal = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    return console.log(valorReal)
}

dinheiro(0.1, 0.02)