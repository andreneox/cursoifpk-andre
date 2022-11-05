const helpers =  {
    upperCase (content){
        return content.toUpperCase()
    }, 
    formatarData(data){
        return data.split('-').reverse().join('/')
    }
}






module.exports = helpers