function criarProduto(nome, preco, desconto){
    return {
        nome,
        preco,
        precoComDesconto: Math.round(preco - preco * desconto)
    }
}

const produto1 = criarProduto('Notebook', 2199.49, 0.20)



console.log(`Este ${produto1.nome} está
de: ${produto1.preco}
por: ${produto1.precoComDesconto}
Aproveite!!!`)


