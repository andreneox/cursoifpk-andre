alert ("Bem vindo a Pagina")

function nome (){
    let nome = document.getElementById('nome').value
    alert (nome)
}

function idade (){
    let nome = document.getElementById('nome').value
    let nasc = document.getElementById('anoNasc').value
    let anoAtual = 2022
    let idadeAtual = anoAtual - nasc
    alert ("Olá "+nome+". Sua idade é "+idadeAtual)
}
function imc (){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    
    let imc = peso / (altura*altura)
        if (imc <= 18.5){
            alert ("Seu IMC é "+imc+". Você está no nível da magreza")
        } else if (18.5 < imc < 24.9){
            alert ("Seu IMC é "+imc+". Você está no nível normal")
        }else if (imc <= 18.5){
            alert ("Seu IMC é "+imc+". Você está no nível da magreza")
        }else if (imc <= 18.5){
            alert ("Seu IMC é "+imc+". Você está no nível da magreza")
        }
    
}