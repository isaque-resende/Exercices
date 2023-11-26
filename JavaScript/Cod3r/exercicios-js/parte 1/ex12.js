/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(numero) {
    if (numero == 0){
        return 1
    } else {
    let regressivo = numero - 1
    let resultadoFat = numero
    while (regressivo > 0){
        resultadoFat = resultadoFat * regressivo
        regressivo--
    }
    return resultadoFat
}
}

console.log(fatorial(5))