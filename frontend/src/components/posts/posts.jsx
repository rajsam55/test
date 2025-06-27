import "./posts.css"
import axios from "axios"
import {useState, useEffect, useContext} from "react"
import {Link, useLocation} from "react-router-dom"




const Posts = ()=>{



    
    const [posts, setPosts]  = useState([])

    
   

    
        useEffect(()=>{


            const getPosts =  async ()=>{

            try{

            const res = await axios.get("http://localhost:6600/api/posts" )

            
            setPosts(res.data)
            

            
            


            }
            catch(err){




            }



        }

        getPosts()








        }, [])

         



    return(

        <div className="posts">

        
        <div className="singlePost">

        
        <h1 className="postTitle">My Posts</h1>

        <div className="">
               

        {  posts.map(post=>(


            <div className = "postsDtls" key = {post.id}>

            
            <Link to = {`/post/${post._id}`} className = "link"><span className="titleText">{post.title}</span></Link>
            <span className="">{new Date(post.createdAt).toDateString()}</span>
            <span className="">{post.username}</span>
            
            <span className="">{post.author}</span>
            <span className="">{post.desc}</span>
            





            </div>

))}


        </div>


        
            
            
        </div>
        </div>
        



     
        

        

        
    )
}
export default Posts






