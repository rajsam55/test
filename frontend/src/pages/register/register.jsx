
import {useState} from "react"
import "./register.css"
import axios from "axios"


import { Link, useNavigate } from "react-router-dom"






const Register = ()=>{

    

    

    const [error, setError]  = useState(false)
    const [formData, setFormData] = useState({


        username : "",

        email  : "",

        password : "",

    })


    const navigate = useNavigate()  





    const handleSubmit = async (e)=>{
        e.preventDefault()

        try {

            const res = await axios.post("http://localhost:6500/api/auth/register", formData, {withCredentials : true})
            console.log(res.data)
            navigate("/login")
        }
        catch(err){

            setError("error registering")

            


        }

    

    }

    return(

        <>
        

    <div className="register">


    <form  className="formRegister" onSubmit = {handleSubmit}>





        <label htmlFor="" className="">Username</label>
        <input
         type="text" 
         className="inputForm" 
         
         onChange  = {(e)=>setFormData({...formData, username : e.target.value})}
        
        
        
        
        />

        <label htmlFor="" className="">Email</label>
        <input 
        
        type= "email"        
        className="inputForm" 
        
        onChange  = {(e)=>setFormData({...formData, email :e.target.value})}
        
        
        
        
        />
        <label htmlFor="" className="">Password</label>
        <input 
        type="password"         
        className="inputForm" 
        
        onChange  = {(e)=>setFormData({...formData, password : e.target.value})}
        
        
        
        
        
        />
        <button className="formBtn" type = "submit">Register</button>
        {error && <h2>{error}</h2>}

        

        <p className="">

        Already Have an Account? <br/>

        <Link to = "/login"><button className="btmBtn">

            Login
            
        </button></Link>

       


        </p>


         </form>
            
        </div>

        </>
    )
}

export default Register





