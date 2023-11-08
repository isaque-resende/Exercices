//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 14, 15, 16, 2, 5)
imprimirSoma()


//funcao com retorno
function soma(a, b = 1) { //b tem por padrão 1 a menos q outro valor seja declarado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())