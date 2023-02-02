/** Crie uma calculadora de juros simples e juros compostos
 *  Juros simples em meses
 *  
 */

function simples (capitalInicial, taxa, tempo){
    parcelas = (capitalInicial / tempo);
    juros = ((taxa/100) * capitalInicial);
    resultado = ((juros + parcelas) * tempo);
     return resultado;
}

function composto(capitalInicial, taxa, tempo){
     var result = capitalInicial * (1 + (taxa /100)) ** tempo;
     return result.toFixed(5);
}

console.log('Juros simples: '+ simples(1000, 6, 5));
console.log('Juros composto: ' + composto(1000, 10, 2));