import {useRef, useContext, useState} from "react"
import axios from "axios"
import "./login.css"
import Navbar from "../../components/navbar/navbar"
import {useNavigate}  from "react-router-dom"
import { Context } from "../../context/Context"









 
const Login  =  ()=>{

    
    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")  
    const[isLoading,setIsLoading]  = useState(false)
    
    const [error, setError] = useState(false)

    const {dispatch, user}   = useContext(Context)

    

    const navigate = useNavigate()


    
    
    
    

   

    const handleSubmit = async(e)=>{


        e.preventDefault()
        setError("")
        
        setIsLoading(true)



        try {                     
        

        

        const res = await axios.post("http://localhost:6600/api/auth/login/", {username, password})

            

        

        
        

        
        console.log(res)

        dispatch({type:"LOGIN_SUCCES", payload : res.data})

        res.data && window.location.replace("/")

               
      }
        
        catch(error){
            setError(true) 
            dispatch({type : "LOGIN_FAILURE"})        



        }
        
        
    }

     
    
    return(
        <>

        <Navbar/>


        

        <div className="login">



        <div className="">
        
        <form type = "submit" className="formLogin" onSubmit = {handleSubmit}>


        <h1 className="">Login</h1>

        

        

        <input
        type="text" 
        name = "username"
        
        className="inputForm" 
        placeholder = "username"
        minLength = {3}
        maxLength  = {20}

        onChange = {(e)=>setUsername(e.target.value)}
        

       

       

        

        
        
        />
        
        <input
        
        type = "text"
        name = "password"
        
        className="inputForm" 
        placeholder = "password"
        onChange = {(e)=>setPassword(e.target.value)}
        
  
        
        
        
        
        
        />


        
             
        
        
        
        

        <button  className = "formBtn" type = "submit">Login</button>

        

        
        
        
        
        
        
        
        </form>

        
        

        </div> 
        </div>

        
      

    </>

    )       
    
}

export default Login




