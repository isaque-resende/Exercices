function type(valor){
    if (typeof valor == 'boolean'){
        return !valor 
    } else if (typeof valor == 'number') {
        return -valor
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(type(-5))
console.log(type(false))