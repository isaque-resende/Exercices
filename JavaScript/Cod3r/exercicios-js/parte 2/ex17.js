const numeros = [10, 10, 10];

function soma (nums){
    const soma = nums.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma
}


console.log(soma(numeros));