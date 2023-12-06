function recerberMelhorEstudante (alunosENotas) {
    const alunos = Object.entries(alunosENotas)
    let notas = []
    alunos.forEach((aluno) => {
        notas.push([aluno[0], (aluno[1].reduce((acumulador, nota) => acumulador + nota, 0)) / aluno[1].length])
    })

    notas.sort((a, b) => {
        if (a[1] > b[1]) {
          return -1;
        }
        if (a[1] < b[1]) {
          return 1;
        }
        return 0;
      })
    
    
    return { nome: notas[0][0], media: notas[0][1]}
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }))

