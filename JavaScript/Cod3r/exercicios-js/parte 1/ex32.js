/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function media (vetor){
    let total = 0
    for (let i = 0; i < vetor.length; i++){
        total += vetor[i]
    }
    return total / vetor.length
}

console.log(media ([1, 2, 3, 4, 5]))