/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function calcularCedulas(valor) {
    let cedulas100 = 0;
    let cedulas50 = 0;
    let cedulas10 = 0;
    let cedulas5 = 0;
    let cedulas1 = 0;
  
    while (valor > 0) {
      if (valor >= 100) {
        cedulas100++;
        valor -= 100;
      } else if (valor >= 50) {
        cedulas50++;
        valor -= 50;
      } else if (valor >= 10) {
        cedulas10++;
        valor -= 10;
      } else if (valor >= 5) {
        cedulas5++;
        valor -= 5;
      } else {
        cedulas1 += valor;
        valor = 0;
      }
    }
  
    if (cedulas100 > 0) {
      console.log(`${cedulas100} nota(s) de R$ 100.`);
    }
    if (cedulas50 > 0) {
      console.log(`${cedulas50} nota(s) de R$ 50.`);
    }
    if (cedulas10 > 0) {
      console.log(`${cedulas10} nota(s) de R$ 10.`);
    }
    if (cedulas5 > 0) {
      console.log(`${cedulas5} nota(s) de R$ 5.`);
    }
    if (cedulas1 > 0) {
      console.log(`${cedulas1} nota(s) de R$ 1.`);
    }
  }
  

  calcularCedulas(168);
