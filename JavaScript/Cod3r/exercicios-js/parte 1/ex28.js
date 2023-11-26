/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function contador(vetor){
    let par = 0
    let impar = 0
    for (const i of vetor){
        if (i % 2 == 0){
            par++
        } else {
            impar++
        }
    }
    console.log(`Este vetor possui ${par} par(es)!`)
    console.log(`Este vetor possui ${impar} impar(es)!`)
}

contador([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])