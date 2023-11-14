/* 30) Escreva um algoritmo que oragnize os valores do menor para o maior
e outro que percorre um vetor de inteiros e define o maior e menor valor dentro do vetor.*/

//organizando
function maiorMenorOrg (vector){
    vector.sort(function(a, b) {
        return a - b;
      })
    return `O menor valor é ${vector[0]} e o maior é ${vector[vector.length - 1]}`
}

console.log(maiorMenorOrg ([5, 3, 25, 17, 6]))

//percorrendo
function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))