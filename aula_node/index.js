const modulo = require ("./modulo")
const chalk = require('chalk')


//modulo.subtrair(8,2)
class Aluno 
{
    nome;
    matricula;
    notas ;
    media;

        constructor(nome, matricula, notas)
        {
            this.nome = nome;
            this.matricula = matricula;
            this.notas = notas;
                 
        }

}


aluno01 = new Aluno ("Andre", "a001",[6, 8, 7])


aluno02 = new Aluno ("Maria", "a002", [8,9,5])



aluno01.media = modulo.calcularMedia(aluno01.notas)
aluno02.media = modulo.calcularMedia(aluno02.notas)

if (aluno01.media >= 7) {
    console.log (chalk.blueBright(aluno01.nome+" teve a média "+aluno01.media))
} else {
    console.log (chalk.red(aluno01.nome+" teve a média "+aluno01.media))
}