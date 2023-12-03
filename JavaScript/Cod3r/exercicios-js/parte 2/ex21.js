function menorN (numeros){
    let menorN = numeros[0]
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] < menorN){
            menorN = numeros[i]
        }
    }
    return menorN
}

console.log(menorN([10, 5, 35, 65]))

//

function menorN2(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
    }

    console.log(menorN2([5, -1, 50, -3.5]))
    