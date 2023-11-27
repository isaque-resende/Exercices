function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(estaEntre(5, 10, 5, true))