import Navbar from "../../components/navbar/navbar"
import {useState} from "react"
import "./register.css"
import axios from "axios"






const Register = ()=>{

        
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError]  = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        setError(false)

        try  {

            const res = await axios.post("http://localhost:6600/api/auth/register",  username, email, password)
            
            res.data && window.location.replace("/login")
            console.log(res.data)


        }
        catch(err){


            setError(true)
    


        }

        
        





    }

    return(

        <>
        <Navbar/>

        <div className="register">

        

<form  className="formRegister" onSubmit = {handleSubmit}>

        <h1 className="">Register</h1>
        <input
         type="text" 
         className="inputForm" 
         placeholder = "username"
         onChange  = {(e)=>setUsername(e.target.value)}
        
        
        
        
        />
        <input 
        
        type="text" 
        className="inputForm" 
        placeholder = "email"
        onChange  = {(e)=>setEmail(e.target.value)}
        
        
        
        
        />
        <input 
        type="text" 
        className="inputForm" 
        placeholder = "password" 
        onChange  = {(e)=>setPassword(e.target.value)}
        
        
        
        
        
        />
        <button className="formBtn" type = "submit">Register</button>

        


         </form>
            
        </div>

        </>
    )
}

export default Register