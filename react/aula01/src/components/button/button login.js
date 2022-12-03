import "./button.css"





const ButtonLogin = ({tipo}) => {

    const logado =true
    

    return(
        <div>
           {!logado ? (<button className={tipo} > realizar Login</button>) :
           (<span>Logado</span>)
           } 
                      
           

        </div>
        
    )
}

export default ButtonLogin