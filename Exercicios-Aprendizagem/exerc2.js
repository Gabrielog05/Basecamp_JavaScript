/** Desenvolva uma função que recebe dois parâmetros, um é a quantiodade de horas trabalhadas
 * por um funcionario num mês e o quanto ele recebe por hora.
 * O retorno da função deve ser a string "Salário igual a R$ X", 
 * em que X, é o uanto o funcionário ganhou no mês
 */

let hora = 100
let salario = 50
const horas = function (horas, salarioHora){
    return (horas * salarioHora)
} 

console.log(`Salário igual a R$ ${horas(hora, salario)}`)