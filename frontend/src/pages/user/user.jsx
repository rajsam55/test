import "./user.css"
import {useState, useEffect}  from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import Navbar from "../../components/navbar/navbar"














const User = ({user})=>{

    




    return(


        <div className="user">

        <span className="userComponent">{user.username}</span>
        <span className="userComponent">{user.email}</span>





        </div>
    )
 

    



    
}


export default User