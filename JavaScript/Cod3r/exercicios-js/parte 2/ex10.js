function stringer(num){
    let string = ''
    for (; num !== 0; num--){
        string += '+'
    }
    return string
}

console.log(stringer(2))

//

function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
    }

console.log(simboloMais(3))

//

function simboloMais2(quantidade) {
    return "+".repeat(quantidade)
    }
    
console.log(simboloMais2(4))