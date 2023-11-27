const numeros = [1, 2, 3, 4, 5, 'dog']

function arrayPontas(elementos){
    elementos.splice(1, elementos.length - 2)
    return elementos
}

console.log(arrayPontas(numeros))

//

function arrayPontas2(elementos){
    return [elementos[0], elementos[elementos.length - 1]]
}

console.log(arrayPontas2(numeros))