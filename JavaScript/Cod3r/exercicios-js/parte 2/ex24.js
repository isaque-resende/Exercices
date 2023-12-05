function letraRepetida (letra, frase){
    let contador = 0
    for (let caractere of frase){
        if (caractere === letra){
            contador++
        }
    }
    return contador
}

console.log(letraRepetida('a', 'Me divirto aprendendo a programar'))

//

function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
    }
    