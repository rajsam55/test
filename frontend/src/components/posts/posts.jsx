import "./posts.css"
import axios from "axios"
import {useState, useEffect, useContext} from "react"
import {Link, useLocation} from "react-router-dom"
import Post from "../post/post"
import Navbar from "../navbar/navbar"





const Posts = ({Posts})=>{



    
    const [posts, setPosts]  = useState([])

    useEffect(()=>{



        const getPosts  = async()=>{

    try {
        
        
        const res = await axios.get("http://localhost:6500/api/posts")
        setPosts(res.data)

        }

    catch(err){


    }

    }
    getPosts()







    },[])

    
   

    




    return(

        <div className="posts">

            <Navbar/>

        
        <div className="singlePost">

        
        <h1 className="postTitle">My Posts</h1>

        <div className="">
               

        {  posts.map(post=>(


            <div className = "postsDtls" key = {post.id}>

            <Link to =  {`/post/${post._id}`}><span className="">{post.title}</span></Link>
            <span className="">{post.desc}</span>

            

            





            </div>

))}


        </div>


        
            
            
        </div>
        </div>
        
  
        

        

        
    )
}
export default Posts






