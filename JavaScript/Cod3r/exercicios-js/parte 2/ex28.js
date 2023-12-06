function filtroDigitos (numeros, digitos) {
    return numeros.filter(numero => String(numero).length === digitos)
    }

console.log(filtroDigitos([38, 2, 365, 10, 125, 11], 3))
console.log(filtroDigitos([5, 9, 1, 125, 11], 1))

