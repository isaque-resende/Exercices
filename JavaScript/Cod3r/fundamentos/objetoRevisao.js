 //criar objetos
 //usando a notação literal
 const obj1 = {}
 console.log(obj1)

 //função object em JS
 const obj2 = new Object
 console.log(obj2)

 //funções construtoras
 function Produto(nome, preco, desc){
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
 }

 const p1 = new Produto('Caneta', 7.99, 0.15)
 const p2 = new Produto('Notebook', 2998.99, 0.25)
 console.log(`O produto "${p1.nome}" está saindo de ${p1.preco} por ${p1.getPrecoComDesconto().toFixed(2)} após a aplicação do desconto!`)
 console.log(`O produto "${p2.nome}" está saindo de ${p2.preco} por ${p2.getPrecoComDesconto().toFixed(2)} após a aplicação do desconto!`)
 
 //função Factory
 function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
 }

 const f1 = criarFuncionario('João', 7980, 4)
 const f2 = criarFuncionario('Maria', 11400, 1)
 console.log(f1.getSalario(), f2.getSalario())

 //Object.create
 const filha = Object.create({})
 filha.nome = 'Ana'
 console.log(filha)

 //Uma função famosa que retorna Objeto...
 const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJSON.info)