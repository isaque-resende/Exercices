/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetor A passe a ser o primeiro elemento do vetor B e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function inverse (vetorA, vetorB){
    if (vetorA.length == vetorB.length) {
    for (let i = 0; i < vetorA.length; i++){
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }
    } else {
    return 'Vetores de tamanhos diferentes.'
    }
    return [vetorA, vetorB]
}

console.log(inverse(['1A', '2A', '3A'], ['1B', '2B', '3B']))