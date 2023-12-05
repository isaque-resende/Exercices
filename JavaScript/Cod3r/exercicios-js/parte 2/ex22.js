function sorteio (numero){
    let numeroAleatorioEntre1e10 = Math.floor(Math.random() * 10) + 1
    if (numero === numeroAleatorioEntre1e10){
        return `Parabéns! O número sorteado foi o ${numeroAleatorioEntre1e10}`
    } else {
        return `"Que pena! O número sorteado foi o ${numeroAleatorioEntre1e10}`
    }
}

console.log(sorteio (5))

