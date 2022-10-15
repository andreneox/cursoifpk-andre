module.exports = {
    subtrair (a,b){
        console.log(a-b)
    },

    calcularMedia(notas) {
        let soma = 0;
        notas.forEach( function (nota)
        {
           soma= soma +nota 
        });
        return soma / notas.length;
    }
     
}

  