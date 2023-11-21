function getPreco(nome = 'item', imposto = 0, moeda = 'R$'){
    return `Este ${nome} custa ${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

const carro = {preco: 49999, desc: 0.20}

console.log(produto.getPreco())
console.log(getPreco.call(carro))
console.log(getPreco.apply(produto))
console.log(getPreco.call(carro, 'carro', 0.17, '$'))
console.log(getPreco.apply(produto, [produto.nome, 0.50, 'EUR']))