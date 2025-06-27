import "./settings.css"
import {useState, useContext} from "react"

import axios from "axios"
import { Context } from "../../context/Context"
import Header from "../../components/header/header"
import Navbar from "../../components/navbar/navbar"







const Settings = ()=>{

    const {user, dispatch}  = useContext(Context)

    const [file,setFile]  = useState()

    const [username, setUsername]  = useState("")
    const [email, setEmail]  = useState("")
    const [password, setPassword]  = useState("")
    const [success, setSuccess]  = useState(false)
    


    const handleSubmit = async(e)=>{

        e.preventDefault()
        
        dispatch({type : "UPDATE_START"})

        


        const updateUser   =  {

            userId  : user._id,
            username ,
            email, 
            password

        }

        if(file){

            const data = new FormData()
            const fileName = Date.now() + file.name

            data.append("name", fileName)
            data.append("file", file)

            updateUser.profilePic = fileName

        


        try{

            await axios.post("http://localhost:6600/api/upload" , data)

        }

        catch(err){
        }
    

        try  {

            const res =  await axios.put("http://localhost:6600/api/users"  + user._id, updateUser )

            setSuccess(true)

            dispatch({type  : "UPDATE_SUCCESS", payload : res.data})
            window.location.replace("/")
            

        }
        catch(err){

            dispatch({type : "UPLOAD_FAILURE"})



        }


    }



    }



    return(

        <> 
        <Navbar/>
        <Header/>

        

        <div className="">

        <form action="" className="updateForm" onSubmit =  {handleSubmit}>

            <h1 className="updateTitle">UpdateUser</h1>

        


        <label htmlFor="fileInput" className=""></label>


        

        <input type="file" className="inputForm"

        

        onChange = {(e)=>setFile(e.target.files[0])}
        
        
        
        
        
        />


        <input type="text" className="inputForm" placeholder = "username"


        onChange = {(e)=>setUsername(e.target.value)}
        
        
        
        
        
        />


        <input type="text" className="inputForm" placeholder = "email"

        

        onChange = {(e)=>setEmail(e.target.value)}
        
        
        
        
        />


        <input type="text" className="inputForm" placeholder = "password"

        

        onChange = {(e)=>setPassword(e.target.value)}    
        />
        

        
        
        
             


        <button className="updateBtn" type = "submit">Update User</button>

        
        {success && <span className="">"Your profile has been updated"</span>}


        </form>


         
       

            
        
        
        
        
        
        
        
        </div>

        </>






    )






}

export default Settings

