//Crie uma calculadora que retorne a soma, subtração, multiplicação e divisão dos valores

function calculadora (valor1, valor2){
    soma = valor1 + valor2;
    subtracao = valor1 - valor2;
    multiplicacao = valor1 * valor2;
    divisao = valor1 / valor2;
    return console.log(soma, subtracao, multiplicacao, divisao.toFixed(2));
}

calculadora(3, 7)