function segundoMaior (numeros) {
return numeros.sort((a, b) => a < b ? 1 : -1)[1];
}

console.log(segundoMaior([12, 16, 1, 5]))