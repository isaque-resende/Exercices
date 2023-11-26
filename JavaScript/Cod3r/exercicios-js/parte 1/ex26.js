/* 26) Faça um programa que coloque todos os pares entre 1 e 100 em um array e todos os ímpares em outro.*/

function arrayParesOuImpares() {
    let pares = []
    let impares = []
    for (let i = 1; i<=100; i++) {
       if (i % 2 == 0){
        pares.push(i)
       } else {
        impares.push(i)
    }
    }
    console.log(pares)
    console.log(impares)
}
arrayParesOuImpares()
