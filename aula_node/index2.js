//modulos nativos do nodejs
//modulo path para saber os caminhos, ou montar caminhos
const path = require ("path")
//modulo os para saber informacoes do sistema operacional e da maquina
const os = require ('node:os')


//modulos externos do node



//mostrar o caminho do arquivo
console.log(path.resolve ('index.js'))

//montar o caminho do diretorio
console.log(path.join('documents', 'projetos', 'App.js'))

// saber a extensao do arquivo
console.log(path.extname('App.js'))


// usando o modulo OS para saber o sistema operacional
console.log(os.type())