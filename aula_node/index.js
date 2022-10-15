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

aluno01 = new Aluno ("Andre", "a001",[0, 8, 7])
aluno01.media = modulo.calcularMedia(aluno01.notas)



console.log(aluno01.media)