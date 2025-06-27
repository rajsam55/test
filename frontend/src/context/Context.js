
import {createContext, useReducer, useEffect, useState} from "react"

import Reducer from "./Reducer.js"


const INITIAL_STATE =  {

    user : JSON.parse(localStorage.getItem("myUser")||null),
    isFetching : false,
    error  :  false
}



export const Context = createContext()





export const ContextProvider = ({children})=>{

    
    const [ state, dispatch, ] = useReducer(Reducer, INITIAL_STATE)
    
    
    useEffect(()=>{

        localStorage.setItem("myUser", JSON.stringify(state))




    



        


        },[state])


    
   

            

    return(

        <Context.Provider

        value ={{user :state.user, dispatch}}

            
        
        
        >

            {children}






        </Context.Provider>





    )





}






