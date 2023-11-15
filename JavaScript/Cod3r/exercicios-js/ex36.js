/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

let vetorMultiplicado = []
let vetorMultiplicado2 = []
function multiplicação(vetor1, multiplicador){
    for (i = 0; i < vetor1.length; i++){
        vetorMultiplicado.push(vetor1[i] * multiplicador)
    }
    return vetorMultiplicado
}

function multMaior5 (vetor2, multiplicador){
    for (i = 0; i < vetor2.length; i++){
        if (vetor2[i] > 5){
        vetorMultiplicado2.push(vetor2[i] * multiplicador)
        }
    }
    return vetorMultiplicado2
}

console.log(multiplicação([1, 2, 3, 4], 2))
console.log(multMaior5(vetorMultiplicado, 2))