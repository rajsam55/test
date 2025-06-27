import Navbar from "../navbar/navbar"
import Header from "../header/header"
import "./post.css"
import {useState, useEffect, useContext} from  "react"

import {Link, useLocation, useNavigate} from "react-router-dom"
import axios from "axios"
import { Context } from "../../context/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare , faTrash} from '@fortawesome/free-solid-svg-icons'











const Post  = ()=>{

    
    const {user}  = useContext(Context)
    const [post, setPost]  = useState({})
    const [title, setTitle]  = useState("")
    const [desc, setDesc]  = useState("")
    const [author, setAuthor]  = useState("")

    const [updatePost, setUpdatePost] = useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const path = location.pathname.split("/")[2]



    

        

        useEffect(()=>{

        
    


        const getPost =  async()=>{

        

        try{

        const res = await axios.get("http://localhost:6600/api/posts/" + path)

            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setAuthor(res.data.author)
            



        }
        catch(err){
        
        }



    }
    getPost()
            
    



    },[path])


    const handleDelete = async()=>{


        try  {
            
            
        await axios.delete(`http://localhost:6600/api/posts/${post._id}`, {data : {username : user.username}})

        window.location.replace("/")





    }
    catch(err){

        {}



    }

}

const handleUpdate = async()=>{

    try  {


        await axios.put(`http://localhost:6600/api/posts/${post._id}`,



            {username : user.username}, title, desc


        )

        setUpdatePost(false)
        window.location.replace("/")
        




    }

    catch(err){



    }





}
   

    return  (
        <>
        
        <Navbar/>

        <div className="post">

        <div className="postDtls">


        

        

        {updatePost ? (<input type="text" className="inputItems"

        onChange = {(e)=>setTitle(e.target.value)}
        value =  {title}
        
        
        
        />)



        :
       ( 
              
        
        
        
        
        <h2 className="">

        {title}


        { post.username === user?.username &&

        <div className="">

        <FontAwesomeIcon  icon = {faPenToSquare}  onClick = {()=>setUpdatePost(true)} />
        <FontAwesomeIcon  icon = {faTrash}  onClick = {handleDelete} />


        </div>


        }

        
        


        </h2>
        

        )



        }

        <div className="">

            <span className="">

            <Link  to = {`/user?= ${post.username}`}> {post.username}</Link>

            Author  : {post.author}

            </span>

        </div>


        {updatePost ? ( <textarea name="" id="" className="textArea"

        value = {desc}

        onChange = {(e)=>setDesc(e.target.value)}        
        
        
        
        >

        </textarea>

        )  
        :   


           ( 
            
            <p className="">{desc}</p>    

            )}



            {updatePost && 

            <button className="updateBtn"  onclick  =  {handleUpdate}>
                
                
            Update
            
            
            
            </button>         
            
            
            
            
            }
        
        </div>
        </div>

        </>

    )
    

      



    
}

export default Post