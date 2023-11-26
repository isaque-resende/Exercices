/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

function div3(numero){
    let compara = numero % 3 == 0
    return compara
}

console.log(div3(11))