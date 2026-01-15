
import {createContext, useEffect, useReducer, useState} from "react"
import {useContext} from "react"

import axios from "axios"
import Reducer from "./Reducer"








export const AuthContext = createContext()





export const AuthProvider = ({children})=>{

    
    const [accessToken, setAccessToken, user]  = useState(localStorage.getItem("user"))

    const [loading, setLoading] = useState(true)



    useEffect(()=>{


        if(accessToken){

            localStorage.setItem("user", JSON.stringify(accessToken))


        }else{


            localStorage.removeItem("user")        
        
        }       


        
            
    },[accessToken])

           

            

    return(

        <AuthContext.Provider

        value =  {{accessToken, setAccessToken, user}}

        
        
        >

            {children}




        </AuthContext.Provider>





    )



}

export const useAuth = ()=> useContext(AuthContext)






