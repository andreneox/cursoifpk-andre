const modulo = require ("./modulo")



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

// dep
aluno02 = new Aluno ("Maria", "a002", [8,9,5])



aluno01.media = modulo.calcularMedia(aluno01.notas)
aluno02.media = modulo.calcularMedia(aluno02.notas)

if (aluno01.media > aluno02.media) {
    console.log (aluno01.nome+" teve a maior media")
} else {
console.log (aluno02.nome+" teve a maior media")
}