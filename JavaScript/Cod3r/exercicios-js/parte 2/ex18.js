let despesas1 = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]

let despesas2 = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]    

function despesasTotais (despesas){
    let total = 0
    for (let item of despesas){
        total += item.preco
    }
    return total
}
 
console.log(despesasTotais (despesas1))

//

function despesasTotais2(despesas) {
    return despesas.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
    }

console.log(despesasTotais2 (despesas2))