const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)    
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1999'
})

console.log(pessoa)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
Object.assign(dest, o1, o2)

console.log(dest)

const obj = {a: 1, b: 2, c: 3}
console.log(obj)
Object.freeze(obj)
obj.c = 6
console.log(obj)