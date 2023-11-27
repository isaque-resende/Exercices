function paresDeIndicePar (elemento){
    let arrayDePares = []
    for (let indice in elemento){
        if (indice % 2 == 0 && elemento[indice] % 2 == 0){
            arrayDePares.push(elemento[indice])
        }
    }
    return arrayDePares
}

console.log(paresDeIndicePar([10, 70, 22, 44, 55, 12, 20]))

//

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
    }
    
    console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 44, 55, 12, 20]))