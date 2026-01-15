import "./post.css"
import {Link}  from "react-router-dom"
import {useState, useEffect, useContext}  from "react"
import axios from "axios"

import {useLocation}  from "react-router-dom"
import { Context } from "../../context/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../navbar/navbar"



const Post =  ()=>{


    const [post,setPost]  = useState({})
    const [title, setTitle]  = useState("")
    const [desc, setDesc]  = useState("")
    const [updateMode, setUpdateMode]  = useState(false)
    const [error, setError] =  useState(false)

    const {user}   = useContext(Context)
    const location = useLocation()

    console.log(user.username)

    

    const path = location.pathname.split("/")[2]



    useEffect(()=>{

        const getPost  = async()=>{

            try{

            const res =  await axios.get("http://localhost:6500/api/posts/"  + path)

            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)

            }

            catch(err){


            }


        }

        getPost()

    },[path])


    const handleUpdate =  async()=>{


        try{


            await axios.put(`http://localhost:6500/api/posts/${post._id}`,  title, desc)

            

            setUpdateMode(false)



        }

        catch(err){




        }

    }


    const handleDelete =  async()=>{

        try {

            await axios.delete(`http://localhost:6500/api/posts/${post._id}`, {data : {username : user.username}})
            window.location.replace("/")



        }

        catch(err){
        }




    }
    

    

    



    return(

        <>


        <Navbar/>


        <div className="">

        <h1 className="">Post</h1>

        <form action="" className=""  onSubmit =  {handleUpdate}>
        
                { updateMode ? (
                    
                <div className="">
        
                <input type="text" className="inputText" 
        
                onChange =  {(e)=>setTitle(e.target.value)}
        
                placeholder  = "title"
                value = {title}
                
                
                />
        
                           
                    
                </div>)
        
                : (
        
                    <div className="">
        
                      <h2 className="">{title}</h2>
        
        
                    {post.username === user?.username &&
                    <h2 className="">
        
                    <FontAwesomeIcon icon = {faPenToSquare} onClick = {()=>setUpdateMode(true)} />
        
                    <FontAwesomeIcon icon = {faTrash} onClick = {handleDelete} />
                    
                    
                    
        
                    </h2>}
        
                    </div>
        
                )}
        
                {updateMode? (
        
                <textarea
        
                type="text" className="inputText"
        
                onChange =  {(e)=>setDesc(e.target.value)}
        
                placeholder =  "desc"
                value  = {desc}   >  
                       
                
                </textarea>
        
                )
        
                :
                (
        
                    <h2 className="">

                    {desc}
                    </h2>
        
        
        
        
                )
                }
        
        
        
        
        
                {updateMode && <button className="" type = "submit">Update</button>}
        
        
        
        
        
                </form>
        
                  
                    
        






        </div>

        </>
    )
}

export default Post