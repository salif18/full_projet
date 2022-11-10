import { useState } from "react";
import { createContext } from "react";

//creation de l'objet defaultValue pour stoker les donnees pour authentification
const defaultValue = {
    token:'',
    userId:null,
    userIdLoggedIn:false,
    login:()=>{},
    logout:()=>{}
}
//creation du AuthContext
const AuthContext= createContext(defaultValue);

//recup du token et userid stocker dans localstorage
const tokenLocalStorage = localStorage.getItem('token')
const userIdLocalStorage = localStorage.getItem('userId')

//creation de AuthContextProvider pour wrapper App
export const AuthContextProvider = (props)=>{

//creation  Etate de token
const [token , setToken] = useState(tokenLocalStorage);

//creation etat userId
const [userId, setUserId] =useState(userIdLocalStorage);

//creation d'une fonction pour mettre a jours l'etat de token
const loginHandler = (token , userId) => {
    setToken(token)
    setUserId(userId)
    localStorage.setItem('token',token)
    localStorage.setItem('userId',userId)
}

//creation de fonction pour se deconecter et reinitialise le token
const logoutHandler = () => {
    setToken(null)
    setUserId(null)
    localStorage.clear()
}
//sil ya presence de token alors user est connecter
const userIdLoggedIn = !!token 

//creation de l'objet contextValue pour authentification
const contextValue ={
    token:token,
    userId:userId,
    isLoggin:userIdLoggedIn,
    login:loginHandler,
    logout:logoutHandler
}

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
//exportation de AuthContext
export default AuthContext;