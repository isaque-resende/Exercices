/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

function jurosSimples(capitalnicial, taxaDeJuros, tempoEmAnos){
    let montante
    montante = capitalnicial + (capitalnicial * (taxaDeJuros / 100) * tempoEmAnos)
    console.log('O valor final em juros simples é: R$' + montante.toFixed(2).toString().replace(".", ","))
}

jurosSimples(1000, 6, 30)

function jurosCompostos(capitalnicial, taxaDeJuros, tempoEmAnos){
    let montante
    montante = capitalnicial * (1 + (taxaDeJuros / 100)) ** tempoEmAnos
    console.log('O valor final em juros compostos é: R$' + montante.toFixed(2).toString().replace(".", ","))
}

jurosCompostos(1000, 6, 30)