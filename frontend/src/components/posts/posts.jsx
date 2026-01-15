import "./posts.css"
import axios from "axios"
import {useState, useEffect, useContext} from "react"
import {Link, useLocation} from "react-router-dom"
import Post from "../post/post"
import Navbar from "../navbar/navbar"





const Posts = ({posts})=>{    
    


    return(

        

        

       <div className="posts">

        
       {posts.map(item=>(

        <div className="">

        <Post  post = {item}  key =  {item.id}/>





        </div>





       ))}








       

        </div>     
        
              

        

        
    )
}
export default Posts






