function divide(n1, n2){
    if (n1 >= 0 && n2 >= 0){
        return n1 / (1 / n2)
    } else {
        return 'apenas números inteiros a partir do 0'
    }
}

console.log(divide(4, 3))