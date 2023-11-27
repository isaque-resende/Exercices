function repetidor (repetira, contador){
    let acumulador = []
    for (; contador !== 0; contador--){
        acumulador.push(repetira)
    }
    return acumulador
}

console.log(repetidor(1, 4))

//

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
    }
    
console.log(repetir(2, 3))