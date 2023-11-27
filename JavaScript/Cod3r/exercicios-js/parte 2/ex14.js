function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
    }

    console.log(objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
        }))
    
        //

function objetoParaArray2(objeto) {
    return Object.entries(objeto)
    }
            
    console.log(objetoParaArray2({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
        }))