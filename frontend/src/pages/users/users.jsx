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

        const getUsers =  async()=>{

            setError(false)

            try {


            const res = await axios.get("http://localhost:6600/api/users")

            setUsers(res.data)
            
            

            }
            catch(err){

                setError(true)



            }



            }

        getUsers()



            

    })






    return(

    
    <div className="">
    <Navbar/>

    

    { users.map(user=>(

        
        <div className=""  key = {user.id}>

            <h1>Users</h1>


        <Link to = {`/user${user._id}`}><span className="">{user.username}</span></Link>
        <span className="">{user.password}</span>
        <span className="">{user.email}</span>





        </div>
            

))}
    
   </div>
    
    
    

    )

}

export default Users



