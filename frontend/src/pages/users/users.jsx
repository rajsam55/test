import axios from "axios"
import {useState, useEffect, useContext} from "react"
import Navbar from "../../components/navbar/navbar"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"








const Users = ()=>{


    const {user}  = useContext(Context)

    
    
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

        },[user])

        
        



            

    






    return(

    
    <div className="">
    

    

    { users.map(user=>(

        
        <div className="usersDtls"  key = {user.name}>

            <h1>Users</h1>


        <Link><span className="spanDtls">{user.username}</span></Link>
        <span className="">{user.password}</span>
        <span className="">{user.email}</span>
        





        </div>
            

))}
    
   </div>
    
    
    

    )

}

export default Users



