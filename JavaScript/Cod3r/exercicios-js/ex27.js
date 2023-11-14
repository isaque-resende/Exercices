/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function calcularCrescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    if (altura1 === altura2 && taxaCrescimento1 === taxaCrescimento2) {
      return "As crianças têm a mesma altura e taxa de crescimento. Não haverá ultrapassagem.";
    }
  
    let criancaMenorAltura = altura1 < altura2 ? 1 : 2;
    let anos = 0;
  
    while (altura1 < altura2) {
      altura1 += taxaCrescimento1;
      altura2 += taxaCrescimento2;
      anos++;
  
      if (altura1 === altura2) {
        return `As crianças têm a mesma altura após ${anos} anos. Não haverá ultrapassagem.`;
      }
    }
  
    return `A criança ${criancaMenorAltura} ultrapassará a outra em ${anos} anos.`;
  }
  
  // Exemplo de uso
  const resultado = calcularCrescimento(120, 5, 130, 4);
  console.log(resultado);
  