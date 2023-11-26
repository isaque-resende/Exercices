/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções. Crie
também um default, que retornará uma mensagem de erro no console. */

function temFruta(fruta){
    switch (fruta) {
        case 'Maçã':
          return 'Não vendemos esta fruta aqui.'
        case 'Kiwi':
          return 'Estamos com escassez de kiwis.'
        case 'Melancia':
          return 'Aqui está, são 3 reais o quilo.'
        default:
          return "Erro!";
      }
}

console.log(temFruta('Maçã'))
console.log(temFruta('Kiwi'))
console.log(temFruta('Melancia'))
console.log(temFruta('Uva'));