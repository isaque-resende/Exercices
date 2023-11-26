Array.prototype.reduce = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], this)
    }
    return acumulador
}