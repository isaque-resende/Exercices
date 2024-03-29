/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

function caracteresContidos(string1, string2) {
    const string1Minusc = string1.toLowerCase();
    const string2Minusc = string2.toLowerCase();
    const caracteresUnicosString1 = [...new Set(string1Minusc)];
    const caracteresUnicosString2 = [...new Set(string2Minusc)];
    const todosCaracteresContidos = caracteresUnicosString1.every(char => caracteresUnicosString2.includes(char));
  
    return todosCaracteresContidos;
  }
  
  const resultado = caracteresContidos("Marrocos", "Socorra-me");
  console.log(resultado);

  //

  function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificacaoDeString('abcd', 'dcba'))
  