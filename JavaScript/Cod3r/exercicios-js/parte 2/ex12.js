const cadastro = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}

function removerProp(objeto, propriedade){
    let objeto2 = Object.assign({}, objeto)
    delete objeto2[propriedade]
    return objeto2
}

console.log(removerProp(cadastro, "descricao"))

//

