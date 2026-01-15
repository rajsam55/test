import "./user.css"
import {useState, useEffect}  from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import Navbar from "../../components/navbar/navbar"














const User = ()=>{

    


    const [user, setUser] = useState({})
    const [username, setUsername] = useState("")
    const [password, setPassword]  = useState("")
    const [email, setEmail]  = useState("")
    const location = useLocation()

    const path = location.pathname.split("/")[2]

    



    useEffect(()=>{

        const getUser = async()=>{


            

            try{

            const res = await axios.get("http://localhost:6500/api/users" + path)

            setUser(res.data)
            console.log(res)
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)



            }
            catch(err){



            }
            
        }

        getUser()


    },[path])







return(

        

<>


  



   <div className="">

    
    

    

    <div className="spanText">

        <span className="">{username}</span>
        <span className="">{email}</span>
        <span className="">{password}</span>




    </div>

    

    




    </div>

    </>
    

    )
}


export default User