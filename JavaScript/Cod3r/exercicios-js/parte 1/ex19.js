/* 19) O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function totalPedido(codigo, quantidade){
    switch(codigo){
        case 100:
            return `Total: R$ ${(quantidade * 3.00).toFixed(2).toString().replace(".", ",")}`
        case 200: 
            return `Total: R$ ${(quantidade * 4.00).toFixed(2).toString().replace(".", ",")}`
        case 300:
            return `Total: R$ ${(quantidade * 5.50).toFixed(2).toString().replace(".", ",")}`
        case 400:
            return `Total: R$ ${(quantidade * 7.50).toFixed(2).toString().replace(".", ",")}`
        case 500:
            return `Total: R$ ${(quantidade * 3.50).toFixed(2).toString().replace(".", ",")}`
        case 600:
            return `Total: R$ ${(quantidade * 2.80).toFixed(2).toString().replace(".", ",")}`
        default:
            return 'Produto não existente.'
    }
}

console.log(totalPedido(200, 3))