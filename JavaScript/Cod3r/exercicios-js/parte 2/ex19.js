let conj1 = [0, 10]
let conj2 = [1, 2, 3, 4, 5]


function media(conjs) {
    return (conjs.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)) / conjs.length
    }

console.log(media (conj1))
console.log(media (conj2))