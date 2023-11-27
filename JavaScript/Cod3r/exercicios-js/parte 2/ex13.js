function apenasNumeros(elementos){
    let novoArray = elementos.filter(eNumero => typeof eNumero === "number")
    return novoArray
}

console.log(apenasNumeros(['arroz', 3, 'gato', true, null, 5.5, undefined, 9.9999]))