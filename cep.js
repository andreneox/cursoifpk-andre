function buscarCEP() {
    const cep = document.querySelector('#cep').value
    const url = "https://brasilapi.com.br/api/cep/v2/"+ cep
    
     

    fetch(url).then (response => response.json())
        .then (response =>{
            console.log(response)
            if (response.cep){
                document.getElementById('estado').value = response.state
                document.getElementById('cidade').value = response.city
                document.getElementById('rua').value = response.street
                document.getElementById('bairro').value = response.neighborhood
            }
            else{
                document.getElementById('estado').removeAttribute('readonly')
                document.getElementById('cidade').removeAttribute('readonly')
                document.getElementById('rua').removeAttribute('readonly')
                document.getElementById('bairro').removeAttribute('readonly')
            }
        })

        

}