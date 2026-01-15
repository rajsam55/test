import {useState, useEffect} from "react"
import axios from "axios"
import "./login.css"
import {Link, useNavigate}  from "react-router-dom"
import { useAuth } from "../../context/Context.js"
import { useDispatch, useSelector } from "react-redux"
import { handleLogin } from "../../store/reducers/userSlice.js"












 
const Login  =  ()=>{

    

    

    const user = useSelector((state)=>state.user)

     const dispatch = useDispatch()

    const [formData, setFormData] = useState(user)
    
    const [error, setError] = useState(false)   

    

    
   const navigate = useNavigate()    

   

    const handleSubmit = async(e)=>{


        e.preventDefault()

        

        try{

            const res = await axios.post("http://localhost:6500/api/auth/login", formData)

            setFormData(res.data)
            

            dispatch(handleLogin(formData))

            
            
            
            
            
            navigate("/")
            

            
               


        }

        


        catch(err){

            setError("error login")          
            


        }

        
        
        
    }

    

     
    
    return(
        <>

        
       

        <div className="login">



        
        
        <form type = "submit" className="formLogin" onSubmit = {handleSubmit}>


        <h1 className="">Welcome to Etsy!</h1>
        <h2 className="">Log in to your account</h2>

        

        
        <label  className="">username</label>
        <input
        type="text" 
        className="inputForm" 
        minLength = {3}
        maxLength  = {20}
        onChange = {(e)=>setFormData({...formData, username :e.target.value})} 
        
        required
        
        />

        <label  className="">password</label>
        
        <input
        
        type = "password"
        className="inputForm"         
        onChange = {(e)=>setFormData({...formData, password :e.target.value})}
        required
        
        
  
        
        
        
        
        
        />
     
             
        
        
        
        

        <button 

        

        className = "formBtn" type = "submit">

            login

        
        
        </button>

        <p className="">
            
            
            Don't Have An Account ?<br/>

            <Link to  = "/register" ><button className="btmBtnx">

            Register
                
                
            </button></Link>


            {error && <span className="">{error}</span>}





        </p>


        

        
        
        
        
        
        
        
        </form>

        
        

        </div> 
        

        
      

    </>

    )       
    
}

export default Login







