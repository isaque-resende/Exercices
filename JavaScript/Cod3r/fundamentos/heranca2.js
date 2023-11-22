//cadeia de protótipos (prototype chain)
Object.prototype.at0 = 'Fim da linha'
const avo = {at1: 'aAvo'}
const pai = {__proto__: avo, at2: 'bPai', at3: 'cPai'}
const filho = {__proto__: pai, at3: 'cFilho'}

console.log(filho.at0, filho.at1, filho.at2, filho.at3)

//

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())