import "./user.css"
import {useState, useEffect}  from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"












const User = ()=>{

    const [user, setUser]  = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword]  = useState("")
    const [email, setEmail]  = useState("")


    



    useEffect(()=>{

        const getUser = async()=>{


            

            try{

            const res = await axios.get("http://localhost:6600/api/users/user._id")

            setUser(res.data)
            console.log(res.data)
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)



            }
            catch(err){



            }
            
        }

        getUser()


    })







    return(

   <div className="">

    <div className="">

        <span className="spanText">{username}</span>
        <span className="">{email}</span>
        <span className="">{password}</span>




    </div>

    

    




    </div>

    )
}


export default User