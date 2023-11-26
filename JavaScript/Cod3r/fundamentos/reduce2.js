const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]


//Desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//ou

const contagemBolsa = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual == true){
        acumulador++
    }
    return acumulador
}, 0)

console.log(contagemBolsa == alunos.length)

//Desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

//ou

const contagemBolsa2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual == true){
        acumulador++
    }
    return acumulador
}, 0)

console.log(contagemBolsa2 !== 0)