/* 08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

function analisarPontuacoes(pontuacoes) {
    const pontuacoesArray = pontuacoes.split(' ').map(Number);
  
    let recordesBatidos = 0;
    let piorJogo = 1;
    let melhorDesempenho = pontuacoesArray[0];
  
    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > melhorDesempenho) {
        melhorDesempenho = pontuacoesArray[i];
        recordesBatidos++;
      }
  
        else if (pontuacoesArray[i] < pontuacoesArray[piorJogo - 1]) {
        piorJogo = i + 1;
      }
    }
      return [recordesBatidos, piorJogo];
  }
  
  const pontuacoesString = "10 20 20 8 25 3 0 30 1";
  const resultado = analisarPontuacoes(pontuacoesString);
  console.log(resultado);
  
