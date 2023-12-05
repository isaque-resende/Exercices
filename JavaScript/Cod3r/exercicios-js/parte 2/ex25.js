function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras)
    if (palavra.includes(inicio))
    resultado.push(palavra)
    return resultado
    }
    
    console.log(buscarPalavrasSemelhantes("aba", ["abacate", "abba", "abade", "abuda", "abalado", "aboboda"]))

    //

    function buscarPalavrasSemelhantes(inicio, palavras) {
        return palavras.filter(palavra => palavra.includes(inicio))
        }
        