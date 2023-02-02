/**Crie uma função que recebe um número(de 1 a 12) e retornme o mês correspondente como string. 
*/

function nomeDoMes(numero){
    const mes = ['Janeiro', 'Fevereiro', 'Março','Abril', 'Maio', 
                 'Junho','Julho', 'Agosto', 'Setembro', 
                 'Outubro','Novembro', 'Dezembro']
    
        return console.log(mes[--numero])
    }
    
    nomeDoMes(12)