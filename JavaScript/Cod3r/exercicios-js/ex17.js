/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, seguindo a tabela abaixo:
Plano Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcule e imprima o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function reajusteSalarial (salarioAtual, plano) {
    switch (plano) {
        case 'A':
            return salarioAtual + (salarioAtual * (10/100))
        case 'B':
            return salarioAtual + (salarioAtual * (15/100))
        case 'C':
            return salarioAtual + (salarioAtual * (20/100))
        default:
            return 'Plano inválido'
    }
}

console.log(reajusteSalarial(2000, 'A'));
console.log(reajusteSalarial(2000, 'B'));
console.log(reajusteSalarial(2000, 'C'));
console.log(reajusteSalarial(2000, 'D'));
