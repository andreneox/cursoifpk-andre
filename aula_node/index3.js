//modulos externos do node usando npm
// modulo minimist
const minimist = require('minimist')
const resposta =minimist(process.argv.slice(2));


const nome = resposta['nome']
const idade = resposta['idade']
//const nome = args ['nome']
console.log(nome, idade);



//modulo chalk para colorir o terminal
const chalk = require('chalk')
console.log (chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))