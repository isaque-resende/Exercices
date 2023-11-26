const produtos = [
    {nome: 'notebook', tag: "tecnologia", preco: 2499, fragil: true},
    {nome: 'ipad pro', tag: "tecnologia", preco: 4199, fragil: true},
    {nome: 'copo de vidro', tag: "cozinha", preco: 12.49, fragil: true},
    {nome: 'copo de plástico', tag: "cozinha", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil == false
}))

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))

console.log(produtos.filter(function(p){
    return p.tag == "cozinha"
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))