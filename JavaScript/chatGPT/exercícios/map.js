function conv (arr) {
    const string = arr.map(ar => 'Nome: ' + ar.nome + ', Idade: ' + ar.idade)
    return string
}




console.log(conv([{ nome: 'Alice', idade: 25 }, { nome: 'Bob', idade: 30 }]))