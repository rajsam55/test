import axios from "axios"
import {useState, useEffect, useContext} from "react"
import Navbar from "../../components/navbar/navbar"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"
import User from "../user/user"








const Users = ()=>{


    const [users, setUsers]  =  useState([])

    

    const [error, setError]  = useState(false)

    



        useEffect(()=>{

            setError(false)


            const getUsers =  async()=>{

            

            try {


            const res = await axios.get("http://localhost:6500/api/users/")

            

            setUsers(res.data)
            console.log(res.data)
            
            

            }
            catch(err){

                setError(true)

                }

            }

            getUsers()

        },[])



    return(

    
    <div className="users">
    

    

    { users.map(user=>(

        
        <div className="usersDtls"  key = {user.id}>

            <User user = {user} />


        </div>
            

))}
    
   </div>
    
    
    

    )

}

export default Users



